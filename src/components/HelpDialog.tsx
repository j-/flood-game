import CloseIcon from '@mui/icons-material/Close';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { FC, useId } from 'react';
import { useGameState } from '../use-game-state';

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

      <IconButton
        aria-label="close"
        onClick={(e) => props.onClose?.(e, 'backdropClick')}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent id={descriptionId}>
        <p>
          Tap colors to flood-fill the board from the top left corner. The goal
          is to make the whole board a single color within {moveLimit} moves.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
