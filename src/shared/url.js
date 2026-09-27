import { NONE, some } from "./option.js";

export function optionalUrl(value, base) {
  if (!value) return NONE;

  try {
    return some(new URL(value, base));
  } catch {
    return NONE;
  }
}

export function asUrl(value, base) {
  if (!value) return null;

  try {
    return new URL(value, base);
  } catch {
    return null;
  }
}
