import Stack from '@mui/material/Stack';
import { type FC, type MouseEventHandler, useCallback } from 'react';
import { Color } from '../color';
import { ColorButton } from './ColorButton';

export type ColorButtonsProps = {
  currentColor: Color | null;
  onClickColor: (color: Color) => void;
};

export const ColorButtons: FC<ColorButtonsProps> = ({
  currentColor,
  onClickColor,
}) => {
  const handleClickColor = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      const color = parseInt(e.currentTarget.value, 10);
      onClickColor(color);
    },
    [onClickColor]
  );

  return (
    <Stack direction="row" gap={1} justifyContent="space-between">
      <ColorButton
        onClick={handleClickColor}
        color={Color.RED}
        isCurrentColor={currentColor === Color.RED}
      />

      <ColorButton
        onClick={handleClickColor}
        color={Color.ORANGE}
        isCurrentColor={currentColor === Color.ORANGE}
      />

      <ColorButton
        onClick={handleClickColor}
        color={Color.YELLOW}
        isCurrentColor={currentColor === Color.YELLOW}
      />

      <ColorButton
        onClick={handleClickColor}
        color={Color.GREEN}
        isCurrentColor={currentColor === Color.GREEN}
      />

      <ColorButton
        onClick={handleClickColor}
        color={Color.BLUE}
        isCurrentColor={currentColor === Color.BLUE}
      />

      <ColorButton
        onClick={handleClickColor}
        color={Color.PURPLE}
        isCurrentColor={currentColor === Color.PURPLE}
      />
    </Stack>
  );
};
