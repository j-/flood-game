import { Board } from './types';
import { getBoardWidth, getBoardHeight, getBoardColor } from './board';
import { getFillColor } from './color';

const drawSquare = (ctx: CanvasRenderingContext2D, color: number): void => {
  ctx.fillStyle = getFillColor(color);
  ctx.fillRect(0, 0, 1, 1);
};

export const draw = (ctx: CanvasRenderingContext2D, board: Board): void => {
  const { canvas } = ctx;
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const boardWidth = getBoardWidth(board);
  const boardHeight = getBoardHeight(board);
  const gridWidth = canvasWidth / boardWidth;
  const gridHeight = canvasHeight / boardHeight;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  for (let y = 0; y < boardHeight; y++) {
    for (let x = 0; x < boardWidth; x++) {
      const color = getBoardColor(board, x, y);
      ctx.save();
      ctx.translate(x * gridWidth, y * gridHeight);
      ctx.scale(gridWidth, gridHeight);
      drawSquare(ctx, color);
      ctx.restore();
    }
  }
};
