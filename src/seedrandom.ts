export type PRNG = () => number;
export type SeededPRNG = (seed: string) => PRNG;

/** Hash a string seed into a number. */
function stringToSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0; // Simple hash with overflow
  }
  return hash >>> 0; // Ensure unsigned 32-bit integer
}

function mulberry32(seed: number): PRNG {
  return function() {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296; // 2 ** 32
  };
}

export const seedrandom: SeededPRNG = (seed) => (
  mulberry32(stringToSeed(seed))
);
