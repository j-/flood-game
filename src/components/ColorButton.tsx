import React from 'react';
import { Color, colorNames } from '../types';
import { CirclePath } from './CirclePath';

export type ColorButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
  color: Color;
  isCurrentColor?: boolean;
};

export const ColorButton: React.FC<ColorButtonProps> = ({
  color,
  isCurrentColor,
  ...props
}) => {
  const name = colorNames.get(color);
  const title = `Flood with ${name?.toLowerCase()}`;

  return (
    <button
      className="ColorButtons-button btn"
      type="button"
      value={color}
      title={title}
      {...props}
    >
      <span className="sr-only">name</span>
      {isCurrentColor ? (
        <svg
          width={100}
          height={100}
          viewBox='0 0 100 100'
        >
          <CirclePath
            outerRadius={.3 * 120}
            innerRadius={.2 * 120}
            cx={50}
            cy={50}
            fill="#fff"
          />
        </svg>
      ) : null}
    </button>
  );
};
