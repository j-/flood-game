import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FC, useId } from 'react';
import { useGameState } from '../use-game-state';
import CloseButton from './CloseButton';

const HelpDialog: FC<DialogProps> = (props) => {
  const id = useId();
  const labelId = `HelpDialog-${id}`;
  const descriptionId = `HelpDialog-${id}`;
  const { moveLimit } = useGameState();

  return (
    <Dialog
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      {...props}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id={labelId}>
        How to play
      </DialogTitle>

      <CloseButton onClick={(e) => props.onClose?.(e, 'backdropClick')} />

      <DialogContent id={descriptionId} sx={{ p: 2 }}>
        Tap colors to flood-fill the board from the top left corner. The goal is
        to make the whole board a single color within {moveLimit} moves.
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
