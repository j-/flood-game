import React, { MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flood } from '../store/actions';
import { Color } from '../types';
import { ColorButton } from './ColorButton';
import './ColorButtons.css';
import { getCurrentColor } from '../store';

const ColorButtons: React.FC = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector(getCurrentColor);

  const handleClickColor = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    const color = parseInt(e.currentTarget.value, 10);
    dispatch(flood(color));
  }, [dispatch]);

  return (
    <div className="ColorButtons d-flex justify-content-between">
      <ColorButton onClick={handleClickColor} color={Color.RED} isCurrentColor={currentColor === Color.RED} />
      <ColorButton onClick={handleClickColor} color={Color.ORANGE} isCurrentColor={currentColor === Color.ORANGE} />
      <ColorButton onClick={handleClickColor} color={Color.YELLOW} isCurrentColor={currentColor === Color.YELLOW} />
      <ColorButton onClick={handleClickColor} color={Color.GREEN} isCurrentColor={currentColor === Color.GREEN} />
      <ColorButton onClick={handleClickColor} color={Color.BLUE} isCurrentColor={currentColor === Color.BLUE} />
      <ColorButton onClick={handleClickColor} color={Color.PURPLE} isCurrentColor={currentColor === Color.PURPLE} />
    </div>
  );
};

export default ColorButtons;
