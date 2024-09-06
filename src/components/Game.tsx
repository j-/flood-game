import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type FC, useState } from 'react';
import { useGameState } from '../use-game-state';
import { useOnGameOver } from '../use-on-game-over';
import ColorButtons from './ColorButtons';
import GameOverDialog from './GameOverDialog';
import Grid from './Grid';
import Navbar from './Navbar';

const Game: FC = () => {
  const [showGameOver, setShowGameOver] = useState(false);
  const { board, highScore, flood } = useGameState();

  useOnGameOver(() => setShowGameOver(true));

  if (!board) return null;

  return (
    <Box py={2} px={1}>
      <Navbar />

      <Stack gap={4} mx="auto" width="min(100%, 40em)">
        <Grid board={board} onClick={flood} />

        <ColorButtons />

        {highScore ? (
          <Typography
            fontWeight="bold"
            align="center"
          >
            Your high score: {String(highScore)}
          </Typography>
        ) : null}
      </Stack>

      <GameOverDialog
        open={showGameOver}
        onClose={() => setShowGameOver(false)}
      />

    </Box>
  );
};

export default Game;
