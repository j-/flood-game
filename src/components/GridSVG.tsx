import * as React from 'react';

export interface Props {
  size?: number;
  width: number;
  height: number;
  onClick: (x: number, y: number) => void;
}

const GridSVG = React.forwardRef<SVGSVGElement, Props>(({ size = 35, width, height, onClick }, ref) => {
  const WIDTH = width * size;
  const HEIGHT = height * size;
  const VIEWBOX = `0 0 ${WIDTH} ${HEIGHT}`;
  const children: React.ReactChild[] = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      children.push(
        <rect
          key={x + ',' + y}
          id={x + ',' + y}
          x={x * size - 0.5}
          y={y * size - 0.5}
          width={size + 1}
          height={size + 1}
          onClick={() => onClick(x, y)}
          onTouchStart={() => onClick(x, y)}
        />
      );
    }
  }

  return (
    <svg
      ref={ref}
      width={WIDTH}
      height={HEIGHT}
      viewBox={VIEWBOX}
      preserveAspectRatio="none"
    >
      {children}
    </svg>
  );
});

export default GridSVG;
