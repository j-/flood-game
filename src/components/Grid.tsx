import { type FC, type ReactEventHandler, useCallback } from 'react';
import { type Board, getBoardColor, getBoardHeight, getBoardWidth } from '../board';
import type { Color } from '../color';
import { CirclePath } from './CirclePath';
import { GridSquare } from './GridSquare';

export interface GridProps {
  board: Board;
  onClick: (color: Color) => void;
}

const SIZE = 35;

export const Grid: FC<GridProps> = ({ board, onClick }) => {
  const size = SIZE;
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  const WIDTH = width * size;
  const HEIGHT = height * size;
  const VIEWBOX = `0 0 ${WIDTH} ${HEIGHT}`;

  const handleClick = useCallback<ReactEventHandler<SVGRectElement>>((e) => {
    const x = Number(e.currentTarget.dataset.x);
    const y = Number(e.currentTarget.dataset.y);
    onClick(getBoardColor(board, x, y)!);
  }, [board, onClick]);

  return (
    <svg
      className="Grid"
      viewBox={VIEWBOX}
      preserveAspectRatio="none"
      style={{
        borderRadius: '4px',
        boxShadow: 'var(--box-shadow)',
      }}
    >
      {Array.from({ length: height }, (_, y) => [
        Array.from({ length: width }, (_, x) => (
          <GridSquare
            key={x + ',' + y}
            x={x * size - 0.5}
            y={y * size - 0.5}
            width={size + 1}
            height={size + 1}
            onPointerDown={handleClick}
            data-x={x}
            data-y={y}
            distance={Math.sqrt(x ** 2 + y ** 2)}
            color={getBoardColor(board, x, y)!}
          />
        ))
      ])}

      <CirclePath
        outerRadius={size * 0.3}
        innerRadius={size * 0.2}
        cx={size / 2}
        cy={size / 2}
        fill="#fff"
        style={{
          pointerEvents: 'none',
        }}
      />
    </svg>
  );
};
