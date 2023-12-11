import React from 'react';

export type CirclePathProps = React.SVGAttributes<SVGPathElement> & {
  outerRadius: number;
  innerRadius: number;
  cx: number;
  cy: number;
};

export const CirclePath: React.FC<CirclePathProps> = ({
  outerRadius,
  innerRadius,
  cx,
  cy,
  ...props
}) => {
  return (
    <path
      d={`
        M ${cx} ${cy}
        m ${-outerRadius} 0
        a 1 1 0 0 0 ${outerRadius * +2} 0
        a 1 1 0 0 0 ${outerRadius * -2} 0
        m ${outerRadius - innerRadius} 0
        a 1 1 0 0 1 ${innerRadius * +2} 0
        a 1 1 0 0 1 ${innerRadius * -2} 0
      `}
      {...props}
    />
  );
};
