import React from 'react';
import { useSelector } from 'react-redux';
import { isAnyColor } from '../store';
import { type Color, colorNames } from '../color';
import { CirclePath } from './CirclePath';
import './ColorButton.css';

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
  const hasColor = useSelector(isAnyColor(color));

  return (
    <button
      className="ColorButton btn"
      type="button"
      value={color}
      title={title}
      disabled={!hasColor}
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
