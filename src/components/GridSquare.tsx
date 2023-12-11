import { motion } from 'framer-motion';
import { colorVarMap } from '../color';
import { Color } from '../types';
import './GridSquare.css';

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

  return (
    <motion.rect
      className="GridSquare"
      initial={{ fill: '#fff' }}
      animate={{ fill }}
      transition={{ duration: 0.125, delay: distance * 0.050 }}
      {...props}
    />
  );
};
