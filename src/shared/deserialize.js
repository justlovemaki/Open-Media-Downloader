import { NONE, some } from "./option.js";

/** Deserialize values written by the extension's tagged storage protocol. */
export function deserialize(value) {
  if (!value || typeof value !== "object") return value;

  switch (value.__serde_tag) {
    case "primitive":
      return value.__serde_val;
    case "array":
      return value.__serde_val.map(deserialize);
    case "object":
      return Object.fromEntries(
        Object.entries(value.__serde_val).map(([key, entryValue]) => [
          key,
          deserialize(entryValue),
        ]),
      );
    case "map":
      return new Map(
        value.__serde_val.map(([key, entryValue]) => [
          deserialize(key),
          deserialize(entryValue),
        ]),
      );
    case "set":
      return new Set(value.__serde_val.map(deserialize));
    case "url":
      return new URL(value.__serde_val);
    case "headers":
      return new Headers(value.__serde_val);
    case "regex":
      return new RegExp(value.__serde_val[0], value.__serde_val[1]);
    case "some":
      return some(deserialize(value.__serde_val));
    case "none":
      return NONE;
    case "ok":
      return { ok: true, value: deserialize(value.__serde_val) };
    case "err":
      return { ok: false, error: deserialize(value.__serde_val) };
    default:
      throw new Error(`Unknown serialized value tag: ${value.__serde_tag}`);
  }
}
