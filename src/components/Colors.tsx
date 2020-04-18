import * as React from 'react';
import { Color } from '../types';
import ColorButton from './ColorButton';

const Colors: React.FC = () => {
  return (
    <div className="Colors">
      <div>
        <ColorButton colorValue={Color.RED} />
        <ColorButton colorValue={Color.ORANGE} />
        <ColorButton colorValue={Color.YELLOW} />
      </div>
      <div>
        <ColorButton colorValue={Color.GREEN} />
        <ColorButton colorValue={Color.BLUE} />
        <ColorButton colorValue={Color.PURPLE} />
      </div>
    </div>
  );
};

export default Colors;
