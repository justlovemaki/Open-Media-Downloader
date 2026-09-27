export function parseExtensionVersion(value) {
  const parts = value.split(".").map((part) => Number.parseInt(part, 10));
  if ((parts.length !== 3 && parts.length !== 4) || parts.some(Number.isNaN)) {
    return null;
  }
  if (parts.length === 3) parts.push(0);
  const [major, minor, patch, build] = parts;
  return { major, minor, patch, build };
}
