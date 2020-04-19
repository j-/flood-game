import * as React from 'react';
import { Board, Color } from '../types';
import { getBoardWidth, getBoardHeight, getBoardColor } from '../board';
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

  React.useEffect(() => {
    if (!gridRef.current) return;
    const grid = gridRef.current;
    for (let x = 0; x < boardWidth; x++) {
      for (let y = 0; y < boardHeight; y++) {
        const color = getBoardColor(board, x, y);
        const rect = grid.getElementById(x + ',' + y) as SVGRectElement;
        rect.dataset.color = color.toString();
      }
    }
  }, [board, boardWidth, boardHeight]);

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
