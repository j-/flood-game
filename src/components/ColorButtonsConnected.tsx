import { type FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from '../color';
import { getCurrentColor } from '../store';
import { flood } from '../store/actions';
import { ColorButtons } from './ColorButtons';

export const ColorButtonsConnected: FC = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector(getCurrentColor);

  const handleClickColor = useCallback((color: Color) => {
    dispatch(flood(color));
  }, [dispatch]);

  return (
    <ColorButtons
      currentColor={currentColor}
      onClickColor={handleClickColor}
    />
  );
};
