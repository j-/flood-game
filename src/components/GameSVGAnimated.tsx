import * as React from 'react';
import { Board, Color } from '../types';
import { getBoardWidth, getBoardHeight, getBoardColor } from '../board';
import { getFillColor } from '../color';
import Grid from './Grid';
import './GameSVGAnimated.css';

const PERIOD = 500;
const DISTANCE_MULTIPLIER = 10;
const MIN_SCALE = 1;
const MAX_SCALE = 1.05;

export interface Props {
  board: Board;
  onClick: (color: Color) => void;
}

const GameSVGAnimated: React.FC<Props> = ({ board, onClick }) => {
  const gridRef = React.useRef<SVGSVGElement>(null);
  const boardWidth = getBoardWidth(board);
  const boardHeight = getBoardHeight(board);

  const handleBoardClick = React.useCallback((x: number, y: number) => {
    onClick(getBoardColor(board, x, y));
  }, [onClick, board]);

  React.useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    
    for (let x = 0; x < boardWidth; x++) {
      for (let y = 0; y < boardHeight; y++) {
        const color = getBoardColor(board, x, y);
        const fillColor = getFillColor(color);
        const rect = grid.getElementById(x + ',' + y) as SVGRectElement;
        rect.setAttribute('fill', fillColor);
      }
    }

    let start: number | null = null;

    const loop = (time: number) => {
      if (start === null) start = time;
      const progress = time - start;
      let t = 0;

      for (let x = 0; x < boardWidth; x++) {
        for (let y = 0; y < boardHeight; y++) {
          const distance = Math.sqrt(x ** 2 + y ** 2);
          t = Math.min(Math.max(progress - distance * DISTANCE_MULTIPLIER, 0) / PERIOD, 1);
          const rect = grid.getElementById(x + ',' + y) as SVGRectElement;
          const scale = MIN_SCALE + Math.sin(t * Math.PI * 2) * (MAX_SCALE - MIN_SCALE);
          const tx = boardWidth / 2 - x;
          const ty = boardHeight / 2 - y;
          rect.setAttribute('transform', `
            translate(${tx * 35} ${ty * 35})
            scale(${scale})
            translate(${tx * -35} ${ty * -35})
          `);
        }
      }

      if (t < 1) clock = requestAnimationFrame(loop);
    };

    let clock = requestAnimationFrame(loop);
    
    return () => cancelAnimationFrame(clock);
  }, [board, boardWidth, boardHeight]);

  return (
    <div className="GameSVGAnimated">
      <Grid
        ref={gridRef}
        width={boardWidth}
        height={boardHeight}
        onClick={handleBoardClick}
      />
    </div>
  );
};

export default GameSVGAnimated;
