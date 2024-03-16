import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FC, useId } from 'react';
import { useGameState } from '../use-game-state';
import CloseButton from './CloseButton';

const GameOverDialog: FC<DialogProps> = (props) => {
  const id = useId();
  const labelId = `GameOverDialog-${id}`;
  const descriptionId = `GameOverDialog-${id}`;

  const { gameWon, moves, moveLimit, newGame, restart } = useGameState();

  return (
    <Dialog
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      {...props}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id={labelId}>
        {gameWon ? <>You win</> : <>You lose</>}
      </DialogTitle>

      <CloseButton onClick={(e) => props.onClose?.(e, 'backdropClick')} />

      <DialogContent id={descriptionId} sx={{ p: 2 }}>
        {gameWon ? (
          <>You beat the game in {moves} moves.</>
        ) : (
          <>You failed to beat the game in {moveLimit} moves.</>
        )}
      </DialogContent>

      <List disablePadding>
        <ListItem disableGutters disablePadding>
          <ListItemButton>
            <ListItemText
              primary="New game"
              primaryTypographyProps={{ fontWeight: 500, color: 'primary' }}
              onClick={(e) => {
                props.onClose?.(e, 'backdropClick');
                newGame();
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemButton>
            <ListItemText
              primary="Try again"
              primaryTypographyProps={{ fontWeight: 500, color: 'secondary' }}
              onClick={(e) => {
                props.onClose?.(e, 'backdropClick');
                restart();
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default GameOverDialog;
