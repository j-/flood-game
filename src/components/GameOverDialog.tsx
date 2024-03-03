import CloseIcon from '@mui/icons-material/Close';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FC, useId } from 'react';
import { useGameState } from '../use-game-state';

const GameOverDialog: FC<DialogProps> = (props) => {
  const id = useId();
  const labelId = `HelpDialog-${id}`;
  const descriptionId = `HelpDialog-${id}`;

  const { gameWon, moves, newGame, restart } = useGameState();

  return (
    <Dialog
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      {...props}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id={labelId}>
        {gameWon ? <>You win</> : <>You lose</>}
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

      <DialogContent sx={{ p: 2 }}>
        {gameWon ? (
          <>You beat the game in {moves} moves.</>
        ) : (
          <>You failed to beat the game in {moves} moves.</>
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
