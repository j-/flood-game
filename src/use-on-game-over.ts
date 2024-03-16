import { useEffect } from 'react';
import { useGameState } from './use-game-state';

export const useOnGameOver = (callback: () => void, delay = 1_000) => {
  const { gameOver } = useGameState();

  useEffect(() => {
    if (gameOver) {
      const clock = setTimeout(callback, delay);
      return () => clearTimeout(clock);
    }
  }, [gameOver]);
};
