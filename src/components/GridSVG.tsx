import * as React from 'react';
import { getBoardColor, getBoardHeight, getBoardWidth } from '../board';
import { Board } from '../types';
import './GridSVG.css';

export interface Props {
  board: Board;
  size?: number;
  onClick: React.EventHandler<React.SyntheticEvent<SVGRectElement>>;
}

interface CustomCSSProperties extends React.CSSProperties {
  '--distance': number;
}

const GridSVG: React.FC<Props> = ({ board, size = 35, onClick }) => {
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  const WIDTH = width * size;
  const HEIGHT = height * size;
  const VIEWBOX = `0 0 ${WIDTH} ${HEIGHT}`;
  const children: React.ReactChild[] = [];

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
          onClick={onClick}
          onTouchStart={onClick}
          style={{ '--distance': distance } as CustomCSSProperties}
          data-x={x}
          data-y={y}
          data-color={getBoardColor(board, x, y)}
        />
      );
    }
  }

  return (
    <svg
      className="GridSVG"
      width={WIDTH}
      height={HEIGHT}
      viewBox={VIEWBOX}
      preserveAspectRatio="none"
    >
      {children}
    </svg>
  );
};

export default GridSVG;
