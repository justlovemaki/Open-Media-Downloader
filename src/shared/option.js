const OPTION_MARKER = Symbol("OpenMediaDownloaderOption");

export const NONE = Object.freeze({
  [OPTION_MARKER]: true,
  kind: "none",
});

export function some(value) {
  return {
    [OPTION_MARKER]: true,
    kind: "some",
    value,
  };
}

export function isOption(value) {
  return Boolean(value?.[OPTION_MARKER]);
}

export function isSome(value) {
  return isOption(value) && value.kind === "some";
}
