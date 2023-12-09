import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getHeight, getSeed, getWidth, isGameOver } from './store';
import { get } from './track-high-scores';
import { deserialize } from './serialize';

export const useHighScore = (width: number, height: number, seed: string, gameOver?: boolean) => {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    setScore(null);
    // Consume var.
    gameOver = gameOver;
    let mounted = true;

    (async () => {
      const moves = await get(width, height, seed);
      if (!moves) return;
      const { length } = deserialize(moves);
      if (!mounted) return;
      setScore(length);
    })();

    return () => {
      mounted = false;
    };
  }, [width, height, seed, gameOver]);

  return score;
};

export const useHighScoreConnected = () => {
  const width = useSelector(getWidth);
  const height = useSelector(getHeight);
  const seed = useSelector(getSeed);
  const gameOver = useSelector(isGameOver);
  return useHighScore(
    width ?? Infinity,
    height ?? Infinity,
    seed,
    gameOver
  );
};
