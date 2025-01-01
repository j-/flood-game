import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CasinoIcon from '@mui/icons-material/CasinoOutlined';
import Button, { type ButtonProps } from '@mui/material/Button';
import type { FC } from 'react';
import { SeedType } from '../seed';

export type SeedProps = ButtonProps & {
  seed: number;
  seedType: SeedType;
  children?: never;
};

const formatDateSeed = (seed: number) => {
  const year = Math.floor(seed / 1_0000);
  const month = String(Math.floor((seed % 1_0000) / 1_00)).padStart(2, '0');
  const date = String(Math.floor(seed % 1_00)).padStart(2, '0');
  return `${year}-${month}-${date}`;
};

export const Seed: FC<SeedProps> = ({ seed, seedType, children, ...props }) => {
  if (seedType === SeedType.DATE) {
    const label = formatDateSeed(seed);

    return (
      <Button
        color="primary"
        variant="text"
        startIcon={
          <CalendarTodayIcon sx={{
            opacity: 0.1,
            transition: 'opacity 200ms',
            '.MuiButton-root:hover &': { opacity: 0.5 },
          }} />
        }
        {...props}
      >
        {label}
      </Button>
    );
  } else {
    const label = seed.toString();

    return (
      <Button
        color="primary"
        variant="text"
        startIcon={
          <CasinoIcon sx={{
            opacity: 0.1,
            transition: 'opacity 200ms',
            '.MuiButton-root:hover &': { opacity: 0.5 },
          }} />
        }
        {...props}
      >
        {label}
      </Button>
    );
  }
};
