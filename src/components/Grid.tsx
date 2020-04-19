import * as React from 'react';
import { Board, Color } from '../types';
import { getBoardWidth, getBoardHeight, getBoardColor } from '../board';
import { useAnimateGrid } from '../use-animate-grid';
import GridSVG from './GridSVG';
import './Grid.css';

export interface Props {
  board: Board;
  onClick: (color: Color) => void;
}

const Grid: React.FC<Props> = ({ board, onClick }) => {
  const gridRef = React.useRef<SVGSVGElement>(null);
  const boardWidth = getBoardWidth(board);
  const boardHeight = getBoardHeight(board);

  useAnimateGrid(board, gridRef);

  return (
    <div className="Grid d-flex align-items-center">
      <GridSVG
        ref={gridRef}
        width={boardWidth}
        height={boardHeight}
        onClick={(x, y) => {
          onClick(getBoardColor(board, x, y))
        }}
      />
    </div>
  );
};

export default Grid;
