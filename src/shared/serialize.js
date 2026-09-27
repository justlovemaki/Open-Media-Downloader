import { isOption } from "./option.js";

/**
 * Serialize browser and application values into the tagged representation
 * consumed by service/main.js.
 */
export function serialize(value) {
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "undefined" ||
    value === null
  ) {
    return { __serde_tag: "primitive", __serde_val: value };
  }

  if (Array.isArray(value)) {
    return { __serde_tag: "array", __serde_val: value.map(serialize) };
  }

  if (value instanceof URL) {
    return { __serde_tag: "url", __serde_val: value.href };
  }

  if (value instanceof Headers) {
    return {
      __serde_tag: "headers",
      __serde_val: [...value.entries()],
    };
  }

  if (value instanceof Set) {
    return {
      __serde_tag: "set",
      __serde_val: [...value].map(serialize),
    };
  }

  if (value instanceof Map) {
    return {
      __serde_tag: "map",
      __serde_val: [...value.entries()].map(([key, entryValue]) => [
        serialize(key),
        serialize(entryValue),
      ]),
    };
  }

  if (value instanceof RegExp) {
    return {
      __serde_tag: "regex",
      __serde_val: [value.source, value.flags],
    };
  }

  if (isOption(value)) {
    return value.kind === "some"
      ? { __serde_tag: "some", __serde_val: serialize(value.value) }
      : { __serde_tag: "none" };
  }

  if (typeof value === "object") {
    return {
      __serde_tag: "object",
      __serde_val: Object.fromEntries(
        Object.entries(value).map(([key, entryValue]) => [
          key,
          serialize(entryValue),
        ]),
      ),
    };
  }

  throw new TypeError(`Cannot serialize value of type ${typeof value}`);
}
