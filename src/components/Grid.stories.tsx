import { useEffect, useState } from 'react';
import { buildBoard, randomiseBoard } from '../board';
import '../styles.css';
import Grid from './Grid';

export const Example = () => {
  const size = 8;
  const [board, setBoard] = useState(() => {
    const board = buildBoard(size, size);
    return board;
  });

  useEffect(() => {
    const clock = setInterval(() => {
      const board = buildBoard(size, size);
      randomiseBoard(board);
      setBoard(board);
    }, 1_000);

    return () => clearInterval(clock);
  }, [size]);

  return (
    <div style={{ maxWidth: '50ch' }}>
      <Grid board={board} onClick={() => {}} />
    </div>
  );
};
