import * as React from 'react';
import { Board, Color } from '../types';
import { getBoardColor } from '../board';
import GridSVG from './GridSVG';
import './Grid.css';

export interface Props {
  board: Board;
  onClick: (color: Color) => void;
}

const Grid: React.FC<Props> = ({ board, onClick }) => {
  const handleClick = React.useCallback<React.EventHandler<React.SyntheticEvent<SVGRectElement>>>((e) => {
    const x = Number(e.currentTarget.dataset.x);
    const y = Number(e.currentTarget.dataset.y);
    onClick(getBoardColor(board, x, y));
  }, [board, onClick]);

  return (
    <div className="Grid d-flex align-items-center">
      <GridSVG
        board={board}
        onClick={handleClick}
      />
    </div>
  );
};

export default Grid;
