import RestartIcon from '@mui/icons-material/RestartAlt';
import UndoIcon from '@mui/icons-material/Undo';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack, { StackProps } from '@mui/material/Stack';
import type { FC } from 'react';

export type GameActionsProps = StackProps & {
  buttonPropsUndo?: Partial<ButtonProps>;
  buttonPropsRestart?: Partial<ButtonProps>;
};

export const GameActions: FC<GameActionsProps> = ({
  buttonPropsUndo,
  buttonPropsRestart,
  ...props
}) => (
  <Stack direction="row" gap={2} justifyContent="space-between" {...props}>
    <Button
      startIcon={<UndoIcon />}
      size="large"
      {...buttonPropsUndo}
    >
      Undo
    </Button>

    <Button
      endIcon={<RestartIcon />}
      size="large"
      {...buttonPropsRestart}
    >
      Restart
    </Button>
  </Stack>
);
