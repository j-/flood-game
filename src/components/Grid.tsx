import React, { useCallback } from 'react';
import { getBoardColor, getBoardHeight, getBoardWidth } from '../board';
import { Board, Color } from '../types';
import './Grid.css';

export interface Props {
  board: Board;
  onClick: (color: Color) => void;
}

interface CustomCSSProperties extends React.CSSProperties {
  '--distance': number;
}

const SIZE = 35;

const Grid: React.FC<Props> = ({ board, onClick }) => {
  const size = SIZE;
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  const WIDTH = width * size;
  const HEIGHT = height * size;
  const VIEWBOX = `0 0 ${WIDTH} ${HEIGHT}`;
  const children: React.ReactChild[] = [];

  const handleClick = useCallback<React.ReactEventHandler<SVGRectElement>>((e) => {
    const x = Number(e.currentTarget.dataset.x);
    const y = Number(e.currentTarget.dataset.y);
    onClick(getBoardColor(board, x, y));
  }, [board, onClick]);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const distance = Math.sqrt(x ** 2 + y ** 2);
      children.push(
        <rect
          key={x + ',' + y}
          x={x * size - 0.5}
          y={y * size - 0.5}
          width={size + 1}
          height={size + 1}
          onClick={handleClick}
          onTouchStart={handleClick}
          style={{ '--distance': distance } as CustomCSSProperties}
          data-x={x}
          data-y={y}
          data-color={getBoardColor(board, x, y)}
        />
      );
    }
  }

  return (
    <div className="Grid d-flex align-items-center">
      <svg
        className="Grid-svg"
        width={WIDTH}
        height={HEIGHT}
        viewBox={VIEWBOX}
        preserveAspectRatio="none"
      >
        {children}
      </svg>
    </div>
  );
};

export default Grid;
