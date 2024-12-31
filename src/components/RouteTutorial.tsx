import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';
import { useNavigate } from 'react-router';
import { Route } from '../route';
import { useGameState } from '../use-game-state';

export const RouteTutorial: FC = () => {
  const { moveLimit } = useGameState();
  const navigate = useNavigate();

  return (
    <Box sx={{
      maxWidth: '60ch',
      height: '100%',
      my: 2,
      p: 2,
      pt: 6,
      mx: 'auto',
      boxSizing: 'border-box',
      position: 'relative',
      placeContent: 'center',
    }}>
      <Button
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          aspectRatio: '1/1',
        }}
        onClick={() => navigate(Route.MAIN)}
      >
        <CloseIcon />
      </Button>

      <Typography sx={{ mb: 2 }}>
        Tap colors to flood-fill the board from the top left corner. The goal
        is to make the whole board a single color within {moveLimit} moves.
        You can tap the colors on the board itself or you can use the larger
        buttons below.
      </Typography>

      <dl>
        <Box component="dt" mb={1}>
          <Typography color="initial" fontWeight={500}>
            Today's game
          </Typography>
        </Box>
        <Box component="dd" mb={4}>
          Starts the game with today's random pattern for all players so you
          can compare your score with your friends.
        </Box>

        <Box component="dt" mb={1}>
          <Typography color="initial" fontWeight={500}>
            Random game
          </Typography>
        </Box>
        <Box component="dd" mb={4}>
          Starts a new random game.
        </Box>

        <Box component="dt" mb={1}>
          <Typography color="initial" fontWeight={500}>
            Custom seed
          </Typography>
        </Box>
        <Box component="dd" mb={4}>
          Starts a custom game using the same colors each time for the same
          seed.
        </Box>

        <Box component="dt" mb={1}>
          <Typography color="initial" fontWeight={500}>
            Undo move
          </Typography>
        </Box>
        <Box component="dd" mb={4}>
          Reverses your last move.
        </Box>

        <Box component="dt" mb={1}>
          <Typography color="initial" fontWeight={500}>
            Restart
          </Typography>
        </Box>
        <Box component="dd" mb={4}>
          Starts the same game from the beginning.
        </Box>
      </dl>
    </Box>
  );
};
