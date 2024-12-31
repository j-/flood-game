export enum SeedType {
  DATE = 1,
  CUST = 2,
}

export const getTodaysSeed = (now: Date = new Date()): number => {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  return (
    year * 1_0000 +
    month * 1_00 +
    day
  );
};

export const getRandomSeed = (): number => (
  Math.floor(Math.random() * 1_0000_00_00)
);

export const clamp = (seed: number): number => (
  Math.max(0, Math.min(seed, 9999_99_99))
);

export const normalizeSeed = (seed: number, type: SeedType): number => (
  type * 1_0000_00_00 + clamp(seed)
);

export const denormalizeSeed = (seed: number): [SeedType, number] => {
  const type = Math.floor(seed / 1_0000_00_00);
  const value = seed % 1_0000_00_00;

  return [type, value];
};
