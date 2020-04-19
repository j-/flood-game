import * as React from 'react';
import { Board } from './types';
import { getBoardWidth, getBoardHeight, getBoardColor } from './board';
import { usePrevious } from './use-previous';
import { useRects } from './use-rects';

const PERIOD = 1500;
const MAX_DISTANCE_OFFSET = 1000;

export const useAnimateGrid = (board: Board, gridRef: React.RefObject<SVGSVGElement>) => {
  const previousBoard = usePrevious(board);
  const rects = useRects(gridRef);

  React.useEffect(() => {
    if (!rects.length) return;

    const boardWidth = getBoardWidth(board);
    const boardHeight = getBoardHeight(board);
    const maxDistance = Math.sqrt(boardWidth ** 2 + boardHeight ** 2);
    const length = boardWidth * boardHeight;

    let start: number | null = null;

    const loop = (time: number) => {
      if (start === null) start = time;
      /** Milliseconds since start */
      const progress = time - start;
      /** Between 0 and 1 */
      let t = 0;

      for (let i = 0; i < length; i++) {
        const rect = rects[i];
        const x = i % boardWidth;
        const y = Math.floor(i / boardWidth);

        // Color at these coords
        const color = getBoardColor(board, x, y);

        // First time painting, scenario 1
        if (!previousBoard) {
          rect.dataset.color = color.toString();
          continue;
        }

        // Color at these coords on the last move
        const previousColor = getBoardColor(previousBoard, x, y);

        // First time painting, scenario 2
        if (color === previousColor) {
          rect.dataset.color = color.toString();
          continue;
        }

        /** Between 0 and `maxDistance` */
        const distance = Math.sqrt(x ** 2 + y ** 2);
        /** Between 0 and 1 */
        const distanceOffset = distance / maxDistance;
        /** Between 0 and 1 */
        t = Math.min(Math.max(progress - distanceOffset * MAX_DISTANCE_OFFSET, 0) / PERIOD, 1);

        rect.dataset.color = (t > 0 ? color : previousColor).toString();
      }

      if (t < 1) clock = requestAnimationFrame(loop);
    };

    let clock = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(clock);
  }, [rects, board, previousBoard]);
};
