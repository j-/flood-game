import { type FC, useMemo } from 'react';
import { colorVarMap } from '../color';
import { useGameState } from '../use-game-state';
import { CurrentColor } from './CurrentColor';

export const CurrentColorConnected: FC = () => {
  const { currentColor } = useGameState();

  const colorVar = useMemo(() => {
    const defaultColor = '#fff';
    if (currentColor == null) return defaultColor;
    return colorVarMap.get(currentColor) ?? defaultColor;
  }, [currentColor]);

  return <CurrentColor color={colorVar} />;
};
