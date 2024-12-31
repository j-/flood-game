import { ScoreBoard } from './ScoreBoard';

export const NewGameNoHighScore = () => (
  <ScoreBoard
    currentScore={0}
    highScore={null}
    moveLimit={25}
  />
);

export const NewGameWithHighScore = () => (
  <ScoreBoard
    currentScore={0}
    highScore={24}
    moveLimit={25}
  />
);

export const InProgressNoHighScore = () => (
  <ScoreBoard
    currentScore={15}
    highScore={null}
    moveLimit={25}
  />
);

export const InProgressWithHighScore = () => (
  <ScoreBoard
    currentScore={15}
    highScore={24}
    moveLimit={25}
  />
);
