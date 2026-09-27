export class DownloadQueue {
  #running = 0;
  #youtubeRunning = 0;
  #youtubeDelayMs;
  #lastYoutubeTaskFinishedAt = 0;
  #scheduleTimerPending = false;
  #pending = [];
  #totalCapacity;
  #youtubeCapacity;

  constructor(totalCapacity, youtubeCapacity, youtubeDelayMs) {
    this.#assertCapacity(totalCapacity, "total capacity");
    this.#assertCapacity(youtubeCapacity, "YouTube capacity");
    if (youtubeCapacity > totalCapacity) {
      throw new Error("YouTube capacity cannot exceed total capacity");
    }

    this.#totalCapacity = totalCapacity;
    this.#youtubeCapacity = youtubeCapacity;
    this.#youtubeDelayMs = youtubeDelayMs;
  }

  getStats() {
    return {
      capacity: this.#totalCapacity,
      youtubeCapacity: this.#youtubeCapacity,
      running: this.#running,
      youtubeRunning: this.#youtubeRunning,
      pending: this.#pending.length,
    };
  }

  queueTask(task, id, isYoutube = false) {
    return new Promise((resolve, reject) => {
      this.#pending.push({ task, id, isYoutube, resolve, reject });
      this.#schedule();
    });
  }

  cancelPendingTask(id, cancellationValue = { cancelled: true, id }) {
    const index = this.#pending.findIndex((entry) => entry.id === id);
    if (index < 0) return false;

    const [entry] = this.#pending.splice(index, 1);
    entry.resolve(cancellationValue);
    return true;
  }

  setTotalCapacity(capacity) {
    this.#assertCapacity(capacity, "total capacity");
    if (capacity < this.#youtubeCapacity) {
      throw new Error("Total capacity cannot be lower than YouTube capacity");
    }
    this.#totalCapacity = capacity;
    this.#schedule();
  }

  setYoutubeCapacity(capacity) {
    this.#assertCapacity(capacity, "YouTube capacity");
    if (capacity > this.#totalCapacity) {
      throw new Error("YouTube capacity cannot exceed total capacity");
    }
    this.#youtubeCapacity = capacity;
    this.#schedule();
  }

  #assertCapacity(capacity, label) {
    if (!Number.isFinite(capacity) || capacity <= 0) {
      throw new Error(`${label} must be a positive finite number`);
    }
  }

  #schedule() {
    while (this.#running < this.#totalCapacity) {
      const elapsed = Date.now() - this.#lastYoutubeTaskFinishedAt;
      const parallelYoutubeAllowed = this.#youtubeCapacity > 1;
      const youtubeSlotAvailable =
        this.#youtubeRunning < this.#youtubeCapacity &&
        (parallelYoutubeAllowed || elapsed > this.#youtubeDelayMs);

      const index = this.#pending.findIndex(
        (entry) => !entry.isYoutube || youtubeSlotAvailable,
      );
      if (index < 0) {
        if (
          this.#pending.some((entry) => entry.isYoutube) &&
          !this.#scheduleTimerPending
        ) {
          this.#scheduleTimerPending = true;
          setTimeout(() => {
            this.#scheduleTimerPending = false;
            this.#schedule();
          }, 1_000);
        }
        return;
      }

      const [entry] = this.#pending.splice(index, 1);
      this.#running += 1;
      if (entry.isYoutube) this.#youtubeRunning += 1;

      Promise.resolve()
        .then(entry.task)
        .then(entry.resolve, entry.reject)
        .finally(() => {
          this.#running -= 1;
          if (entry.isYoutube) {
            this.#youtubeRunning -= 1;
            this.#lastYoutubeTaskFinishedAt = Date.now();
          }
          this.#schedule();
        });
    }
  }
}
