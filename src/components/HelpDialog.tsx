import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
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
        <Typography sx={{ mb: 2 }}>
          Tap colors to flood-fill the board from the top left corner. The goal
          is to make the whole board a single color within {moveLimit} moves.
          You can tap the colors on the board itself or you can use the larger
          buttons below it.
        </Typography>

        <dl>
          <dt>
            <Typography color="primary" fontWeight={500}>
              New game
            </Typography>
          </dt>
          <dd>
            Starts a new random game.
          </dd>

          <dt>
            <Typography color="secondary" fontWeight={500}>
              Today's game
            </Typography>
          </dt>
          <dd>
            Starts the game with today's random pattern for all players so you
            can compare your score with your friends.
          </dd>

          <dt>
            <Typography color="initial" fontWeight={500}>
              Undo move
            </Typography>
          </dt>
          <dd>
            Reverses your last move.
          </dd>

          <dt>
            <Typography color="initial" fontWeight={500}>
              Restart
            </Typography>
          </dt>
          <dd>
            Starts the same game from the beginning.
          </dd>
        </dl>
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
