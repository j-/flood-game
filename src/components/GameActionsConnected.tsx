import type { FC } from 'react';
import { useGameState } from '../use-game-state';
import { GameActions } from './GameActions';

export const GameActionsConnected: FC = () => {
  const {
    canRestart,
    canUndo,
    gameOver,
    gameWon,
    restart,
    undo,
  } = useGameState();

  const highlightRestart = gameOver && !gameWon;

  return (
    <GameActions
      buttonPropsUndo={{
        onClick: undo,
        disabled: !canUndo,
      }}
      buttonPropsRestart={{
        variant: highlightRestart ? 'contained' : 'text',
        onClick: restart,
        disabled: !canRestart,
        sx: highlightRestart ? {
          animation: 'GameActionsConnected-pulse 1s ease-in-out infinite alternate',
          '@keyframes GameActionsConnected-pulse': {
            to: {
              transform: 'scale(1.1)',
            },
          },
        } : null,
      }}
    />
  );
};
