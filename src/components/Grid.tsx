import * as React from 'react';

export interface Props {
  width: number;
  height: number;
  onClick: (x: number, y: number) => void;
}

const Grid = React.forwardRef<SVGSVGElement, Props>(({ width, height, onClick }, ref) => {
  const SIZE = 35;
  const WIDTH = width * SIZE;
  const HEIGHT = height * SIZE;
  const VIEWBOX = `0 0 ${WIDTH} ${HEIGHT}`;
  const children = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      children.push(
        <rect
          key={x + ',' + y}
          id={x + ',' + y}
          x={x * SIZE - 0.5}
          y={y * SIZE - 0.5}
          width={SIZE + 1}
          height={SIZE + 1}
          onClick={() => onClick(x, y)}
          onTouchStart={() => onClick(x, y)}
        />
      );
    }
  }

  return (
    <svg
      ref={ref}
      className="Grid"
      width={WIDTH}
      height={HEIGHT}
      viewBox={VIEWBOX}
      preserveAspectRatio="none"
    >
      {children}
    </svg>
  );
});

export default Grid;
