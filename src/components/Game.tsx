import Box from '@mui/material/Box';
import { FC, useState } from 'react';
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
    <Box p={1}>
      <Navbar />

      <div className="mt-4 mb-4">
        <Grid board={board} onClick={flood} />
      </div>

      <div className="mt-4 mb-4">
        <ColorButtons />
      </div>

      <GameOverDialog
        open={showGameOver}
        onClose={() => setShowGameOver(false)}
      />

      <div className="mt-4 mb-4 d-flex flex-column align-items-center">
        {highScore ? <strong>Your high score: {String(highScore)}</strong> : null}
      </div>
    </Box>
  );
};

export default Game;
