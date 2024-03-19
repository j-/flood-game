import { FC, ReactEventHandler, useCallback } from 'react';
import { getBoardColor, getBoardHeight, getBoardWidth } from '../board';
import { Board, Color } from '../types';
import { CirclePath } from './CirclePath';
import './Grid.css';
import { GridSquare } from './GridSquare';

export interface Props {
  board: Board;
  onClick: (color: Color) => void;
}

const SIZE = 35;

const Grid: FC<Props> = ({ board, onClick }) => {
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

export default Grid;
