import React from 'react';

export type CirclePathProps = React.SVGAttributes<SVGPathElement> & {
  outerRadius: number;
  innerRadius: number;
  x: number;
  y: number;
};

export const CirclePath: React.FC<CirclePathProps> = ({
  outerRadius,
  innerRadius,
  x,
  y,
  ...props
}) => {
  const thickness = outerRadius - innerRadius;

  return (
    <path
      d={`
        M ${x} ${y + outerRadius}
        A 1 1 0 0 0 ${x + outerRadius * 2} ${y + outerRadius}
        A 1 1 0 0 0 ${x} ${y + outerRadius}

        M ${x + thickness} ${y + outerRadius}
        A 1 1 0 0 1 ${x + outerRadius * 2 - thickness} ${y + outerRadius}
        A 1 1 0 0 1 ${x + thickness} ${y + outerRadius}
      `}
      {...props}
    />
  );
};
