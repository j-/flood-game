import React, { MouseEventHandler, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { flood } from '../store/actions';
import { Color } from '../types';
import { ColorButton } from './ColorButton';
import './ColorButtons.css';

const ColorButtons: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickColor = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    const color = parseInt(e.currentTarget.value, 10);
    dispatch(flood(color));
  }, [dispatch]);

  return (
    <div className="ColorButtons d-flex justify-content-between">
      <ColorButton onClick={handleClickColor} color={Color.RED} />
      <ColorButton onClick={handleClickColor} color={Color.ORANGE} />
      <ColorButton onClick={handleClickColor} color={Color.YELLOW} />
      <ColorButton onClick={handleClickColor} color={Color.GREEN} />
      <ColorButton onClick={handleClickColor} color={Color.BLUE} />
      <ColorButton onClick={handleClickColor} color={Color.PURPLE} />
    </div>
  );
};

export default ColorButtons;
