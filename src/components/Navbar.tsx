import Help from '@mui/icons-material/HelpOutlineRounded';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useGameState } from '../use-game-state';
import { useHelpDialog } from '../use-help-dialog';

export const Navbar: FC<AppBarProps> = (props) => {
  const { showDialog: handleClickHelp } = useHelpDialog();

  const {
    moves,
    moveLimit,
    canUndo,
    canRestart,
    newGame,
    todaysGame,
    undo,
    restart,
  } = useGameState();

  return (
    <AppBar {...props}>
      <Toolbar>
        <Box
          display="grid"
          gridTemplateAreas={{
            xs: '"primary score" "secondary score"',
            md: '"primary score secondary"',
          }}
          gridTemplateColumns={{ md: "1fr auto 1fr" }}
          width="100%"
        >
          <Box
            gridArea="primary"
            display="flex"
            gap={{ xs: 1, sm: 2 }}
            alignItems="center"
          >
            <Button color="primary" onClick={newGame}>
              New game
            </Button>

            <Button color="secondary" onClick={todaysGame}>
              Today's game
            </Button>
          </Box>

          <Box
            gridArea="score"
            display="flex"
            gap={{ xs: 1, sm: 2 }}
            alignItems="center"
            justifyContent={{ xs: 'flex-end', md: 'center' }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'flex-end', sm: 'center' }}
            >
              <Typography variant='h5' component="span" p={1}>
                {moves} / {moveLimit}
              </Typography>

              <IconButton color="inherit" onClick={handleClickHelp}>
                <Help />
              </IconButton>
            </Stack>
          </Box>

          <Box
            gridArea="secondary"
            display="flex"
            gap={{ xs: 1, sm: 2 }}
            alignItems="center"
            justifyContent={{ md: 'flex-end' }}
          >
            <Button color="inherit" onClick={undo} disabled={!canUndo}>
              Undo move
            </Button>

            <Button color="inherit" onClick={restart} disabled={!canRestart}>
              Restart
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
