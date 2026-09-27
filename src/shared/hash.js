// cyrb53-style hash used by the existing extension protocol.
export function hashString(value, seed = 0) {
  let low = 0xdeadbeef ^ seed;
  let high = 0x41c6ce57 ^ seed;

  for (let index = 0; index < value.length; index += 1) {
    const character = value.charCodeAt(index);
    low = Math.imul(low ^ character, 2654435761);
    high = Math.imul(high ^ character, 1597334677);
  }

  low = Math.imul(low ^ (low >>> 16), 2246822507);
  low ^= Math.imul(high ^ (high >>> 13), 3266489909);
  high = Math.imul(high ^ (high >>> 16), 2246822507);
  high ^= Math.imul(low ^ (low >>> 13), 3266489909);

  return 4294967296 * (2097151 & high) + (low >>> 0);
}
