import { motion } from 'framer-motion';
import { type Color, colorVarMap } from '../color';
import './GridSquare.css';
import { useDelayedState } from '../use-delayed-state';

export type GridSquareProps = Omit<React.ComponentProps<typeof motion.rect>, 'color'> & {
  distance: number;
  color: Color;
};

export const GridSquare: React.FC<GridSquareProps> = ({
  distance,
  color,
  ...props
}) => {
  const fill = colorVarMap.get(color) ?? '#fff';
  const delayed = useDelayedState(fill, distance * 50);

  return (
    <motion.rect
      className="GridSquare"
      initial={{ fill: '#fff' }}
      animate={{ fill: delayed }}
      transition={{ duration: 0.125 }}
      {...props}
    />
  );
};
