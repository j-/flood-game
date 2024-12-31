import Box, { type BoxProps } from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMemo, type FC } from 'react';
import type { GameState } from '../use-game-state';
import { useDelayedState } from '../use-delayed-state';

export type GameOverProps = BoxProps & Pick<GameState, 'gameOver' | 'gameWon' | 'moves'>;

export const GameOver: FC<GameOverProps> = ({
  gameOver,
  gameWon,
  moves,
  ...props
}) => {
  const label = useMemo(() => {
    if (gameWon) {
      if (moves == null) return 'You win';
      return `You win in ${moves} moves`;
    }
    if (gameOver) return 'Game over';
    return null;
  }, [gameWon, gameOver, moves]);

  // Fade in after delay, fade out immediately.
  const fadeIn = useDelayedState(gameOver, 1_500) && gameOver;

  return (
    <Fade in={fadeIn}>
      <Box
        sx={{
          bgcolor: '#fffc',
          display: 'grid',
          placeItems: 'center',
          pointerEvents: 'all',
        }}
        {...props}
      >
        <Stack gap={2}>
          <Typography variant="h4" component="h1">{label}</Typography>
        </Stack>
      </Box>
    </Fade>
  );
};
