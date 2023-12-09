import React from 'react';
import { Color, colorNames } from '../types';

export type ColorButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
  color: Color;
};

export const ColorButton: React.FC<ColorButtonProps> = ({ color, ...props }) => {
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
    </button>
  );
};
