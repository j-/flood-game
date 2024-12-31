import Box from '@mui/material/Box';
import type { FC } from 'react';
import { ColorButtonsConnected } from './ColorButtonsConnected';
import { CurrentColorConnected } from './CurrentColorConnected';
import { GameActionsConnected } from './GameActionsConnected';
import { GameOverConnected } from './GameOverConnected';
import { GridConnected } from './GridConnected';
import { MainMenuButtonConnected } from './MainMenuButtonConnected';
import { ScoreBoardConnected } from './ScoreBoardConnected';
import { SeedConnected } from './SeedConnected';

export const RouteMain: FC = () => (
  <Box sx={{
    maxWidth: {
      xs: '60ch',
      lg: 'fit-content',
    },
    height: '100%',
    px: 2,
    boxSizing: 'border-box',
    gap: 1,
    mx: 'auto',
    display: 'grid',
    gridTemplateAreas: {
      xs: `
        ".. .. .."
        "mm .. sb"
        "se .. sb"
        "gr gr gr"
        "cb cb cb"
        "ga ga ga"
        ".. .. .."
      `,
      lg: `
        ".. .. .."
        "mm gr sb"
        "se gr sb"
        ".. gr .."
        ".. cb .."
        ".. ga .."
        ".. .. .."
      `,
    },
    gridTemplateRows: {
      xs: '1fr repeat(5, auto) 2fr',
      lg: '1fr auto auto auto auto 2fr',
    },
    gridTemplateColumns: {
      xs: '1fr auto 1fr',
      lg: '20ch 60ch 20ch',
    },
  }}>
    <Box gridArea="se" display="grid" sx={{ placeItems: 'start' }}>
      <SeedConnected />
    </Box>

    <Box gridArea="sb" display="flex" justifyContent="end">
      <ScoreBoardConnected />
    </Box>

    <Box gridArea="gr" display="grid" sx={{ placeItems: 'center' }}>
      <GridConnected />
    </Box>

    <Box gridArea="gr" display="grid" sx={{ placeItems: 'stretch', pointerEvents: 'none' }}>
      <GameOverConnected />
    </Box>

    <Box gridArea="cb" my={2}>
      <ColorButtonsConnected />
    </Box>

    <Box gridArea="ga">
      <GameActionsConnected />
    </Box>

    <Box gridArea="mm">
      <MainMenuButtonConnected />
    </Box>

    <CurrentColorConnected />
  </Box>
);
