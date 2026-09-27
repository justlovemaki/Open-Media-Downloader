import {
  ar,
  downloadHlsAudio,
  downloadHlsAudioWithFfmpeg,
  downloadHlsPreview,
  downloadHlsSingleSource,
  downloadHlsSingleWithFfmpeg,
  downloadHlsTwoSources,
  downloadHlsTwoWithFfmpeg,
  downloadHttpDirect,
  downloadHttpPreview,
  downloadHttpSingleSource,
  downloadHttpTwoSources,
  downloadMpdAudio,
  downloadMpdPreview,
  downloadMpdVideo,
  downloadYoutubeAudio,
  downloadYoutubePreview,
  downloadYoutubeSingleSource,
  downloadYoutubeTwoSources,
  ee,
  extractHttpAudio,
  ie,
  nr,
  sr,
} from "./worker-runtime.js";
async function executeDownloadStrategy(t, e) {
  try {
    let r;
    if (t.strategy == "m3u8_audio_only")
      r = t.will_use_jsfetch
        ? await downloadHlsAudioWithFfmpeg(t, e)
        : await downloadHlsAudio(t, e);
    else if (t.strategy == "m3u8_audio_video_one_source")
      r = t.will_use_jsfetch
        ? await downloadHlsSingleWithFfmpeg(t, e)
        : await downloadHlsSingleSource(t, e);
    else if (t.strategy == "m3u8_audio_video_two_sources")
      r = t.will_use_jsfetch
        ? await downloadHlsTwoWithFfmpeg(t, e)
        : await downloadHlsTwoSources(t, e);
    else if (t.strategy == "m3u8_video_preview")
      r = await downloadHlsPreview(t, e);
    else if (t.strategy == "youtube_audio_only")
      r = await downloadYoutubeAudio(t, e);
    else if (t.strategy == "youtube_audio_video_one_source")
      r = await downloadYoutubeSingleSource(t, e);
    else if (t.strategy == "youtube_audio_video_two_sources")
      r = await downloadYoutubeTwoSources(t, e);
    else if (t.strategy == "youtube_video_preview")
      r = await downloadYoutubePreview(t, e);
    else if (t.strategy == "http_audio_video_one_source")
      r = await downloadHttpDirect(t, e);
    else if (t.strategy == "http_audio_video_two_sources_jsfetch")
      r = await downloadHttpTwoSources(t, e);
    else if (t.strategy == "http_audio_video_one_source_jsfetch")
      r = await downloadHttpSingleSource(t, e);
    else if (t.strategy == "http_strip_audio_jsfetch")
      r = await extractHttpAudio(t, e);
    else if (t.strategy == "http_video_preview_jsfetch")
      r = await downloadHttpPreview(t, e);
    else if (t.strategy == "mpd_audio_only") r = await downloadMpdAudio(t, e);
    else if (t.strategy == "mpd_audio_video_one_source")
      r = await downloadMpdVideo(t, e);
    else if (t.strategy == "mpd_video_preview")
      r = await downloadMpdPreview(t, e);
    else throw new Error("Unreachable");
    ie({
      name: "download_result",
      data: r,
    });
  } catch (r) {
    let i = nr(r);
    throw (
      ie({
        name: "download_error",
        data: {
          download_id: t.download_id,
          error: i,
        },
      }),
      r
    );
  }
}
function startDownloadWorkerMessaging() {
  ar();
  let t = new Map();
  (sr(async (e) => {
    if (e.name == "abort_download") {
      let r = t.get(e.data.download_id);
      r && r.abort();
    } else if (e.name == "download") {
      let r = ee(e.data.download_args),
        i = new AbortController();
      (t.set(r.download_id, i),
        await executeDownloadStrategy(r, i.signal),
        t.delete(r.download_id),
        i.abort(),
        ie({
          name: "download_progress",
          data: {
            download_id: r.download_id,
            progress: {
              status: "finalizing",
            },
          },
        }));
    } else
      e.name == "revoke_blob_url"
        ? URL.revokeObjectURL(e.data.blob_url)
        : e.name == "is_ready" &&
          ie({
            name: "is_ready_success",
            data: null,
          });
  }),
    ie({
      name: "is_ready_success",
      data: null,
    }));
}
startDownloadWorkerMessaging();
export { executeDownloadStrategy as Download };
/*! Bundled license information:

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 *)
*/
