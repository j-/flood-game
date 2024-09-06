import React, { MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from '../color';
import { getCurrentColor } from '../store';
import { flood } from '../store/actions';
import { ColorButton } from './ColorButton';
import Stack from '@mui/material/Stack';

const ColorButtons: React.FC = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector(getCurrentColor);

  const handleClickColor = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    const color = parseInt(e.currentTarget.value, 10);
    dispatch(flood(color));
  }, [dispatch]);

  return (
    <Stack direction="row" gap={1} justifyContent="space-between">
      <ColorButton onClick={handleClickColor} color={Color.RED} isCurrentColor={currentColor === Color.RED} />
      <ColorButton onClick={handleClickColor} color={Color.ORANGE} isCurrentColor={currentColor === Color.ORANGE} />
      <ColorButton onClick={handleClickColor} color={Color.YELLOW} isCurrentColor={currentColor === Color.YELLOW} />
      <ColorButton onClick={handleClickColor} color={Color.GREEN} isCurrentColor={currentColor === Color.GREEN} />
      <ColorButton onClick={handleClickColor} color={Color.BLUE} isCurrentColor={currentColor === Color.BLUE} />
      <ColorButton onClick={handleClickColor} color={Color.PURPLE} isCurrentColor={currentColor === Color.PURPLE} />
    </Stack>
  );
};

export default ColorButtons;
