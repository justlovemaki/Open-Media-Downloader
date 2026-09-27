export function userAbort() {
  return {
    user_abort: true,
    e4XX_5XX_failure: false,
    percentage_incomplete: false,
    other_failure: false,
  };
}

export function otherFailure(message) {
  return {
    user_abort: false,
    e4XX_5XX_failure: false,
    percentage_incomplete: false,
    other_failure: true,
    message,
  };
}

export function httpFailure(status) {
  return {
    user_abort: false,
    e4XX_5XX_failure: true,
    percentage_incomplete: true,
    other_failure: true,
    status,
  };
}

export function describeEndingReason(reason) {
  if (reason === "end_of_file") return "Download complete";
  if (reason.user_abort) return "User abort";
  if (reason.e4XX_5XX_failure) return `HTTP error. Status: ${reason.status}.`;
  if (reason.percentage_incomplete) return "Incomplete percentage.";
  return `Error. ${reason.message}.`;
}
