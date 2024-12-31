import { GameOver } from './GameOver';

export const GameLost = () => (
  <div style={{ position: 'relative' }}>
    <GameOver gameOver={true} gameWon={false} moves={0} />
  </div>
);

export const GameWon = () => (
  <div style={{ position: 'relative' }}>
    <GameOver gameOver={true} gameWon={true} moves={24} />
  </div>
);
