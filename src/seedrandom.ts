import { type PRNG } from 'seedrandom';

export const seedrandom: (seed?: string) => PRNG = require('seedrandom');
