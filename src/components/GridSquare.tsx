import { Color } from '../types';
import './GridSquare.css';

export type GridSquareProps = Omit<React.SVGAttributes<SVGRectElement>, 'color'> & {
  distance: number;
  color: Color;
};

interface CustomCSSProperties extends React.CSSProperties {
  '--distance': number;
}

export const GridSquare: React.FC<GridSquareProps> = ({
  distance,
  color,
  ...props
}) => {
  return (
    <rect
      className="GridSquare"
      style={{ '--distance': distance } as CustomCSSProperties}
      data-color={color}
      {...props}
    />
  );
};
