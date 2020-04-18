import * as React from 'react';
import { Board, Color } from '../types';
import { getBoardWidth, getBoardHeight, getBoardColor } from '../board';
import { getFillColor } from '../color';
import './GameSVG.css';

export interface Props {
  board: Board;
  onClick: (color: Color) => void;
}

const GameSVG: React.FC<Props> = ({ board, onClick }) => {
  const SIZE = 35;
  const boardWidth = getBoardWidth(board);
  const boardHeight = getBoardHeight(board);
  const WIDTH = boardWidth * SIZE;
  const HEIGHT = boardHeight * SIZE;
  const VIEWBOX = `0 0 ${WIDTH} ${HEIGHT}`;
  const children = [];

  for (let y = 0; y < boardHeight; y++) {
    for (let x = 0; x < boardWidth; x++) {
      const color = getBoardColor(board, x, y);
      const fill = getFillColor(color);
      children.push(
        <rect
          key={x + ',' + y}
          x={x * SIZE - 0.5}
          y={y * SIZE - 0.5}
          width={SIZE + 1}
          height={SIZE + 1}
          fill={fill}
          onClick={() => onClick(color)}
          onTouchStart={() => onClick(color)}
        />
      );
    }
  }

  return (
    <svg
      className="GameSVG"
      width={WIDTH}
      height={HEIGHT}
      viewBox={VIEWBOX}
      preserveAspectRatio="none"
    >
      {children}
    </svg>
  );
};

export default GameSVG;
