import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FormEventHandler, useCallback, useId, useMemo, useState, type FC } from 'react';
import { useNavigate } from 'react-router';
import { Route } from '../route';
import { useGameState } from '../use-game-state';

export const RouteSeeded: FC = () => {
  const id = useId();
  const {
    newGame,
    todaysGame,
    seed: defaultValue,
  } = useGameState();
  const navigate = useNavigate();
  const seedFieldId = `RouteSeeded-${id}-seed`;
  const [seed, setSeed] = useState(() => defaultValue.toString());

  const asNumber = useMemo(() => {
    return Number(seed);
  }, [seed]);

  const isNumber = useMemo(() => {
    return !isNaN(asNumber);
  }, [asNumber]);

  const handleSubmitForm = useCallback<FormEventHandler>((e) => {
    e.preventDefault();
    newGame(asNumber);
    navigate(Route.MAIN);
  }, [asNumber, navigate, newGame]);

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

      <form onSubmit={handleSubmitForm}>
        <Stack gap={4}>
          <TextField
            id={seedFieldId}
            name={seedFieldId}
            type="text"
            label="Custom seed"
            helperText="1-8 digit number between 0 and 99999999"
            variant="outlined"
            value={seed}
            onChange={(e) => setSeed(e.currentTarget.value)}
            inputProps={{
              autoCapitalize: 'off',
              autoCorrect: 'off',
              autoComplete: 'off',
              inputMode: 'numeric',
              pattern: "[0-9]{,8}",
              maxLength: 8,
            }}
          />

          <Button
            variant="contained"
            type="submit"
            disabled={seed === '' || !isNumber}
          >
            Start custom game
          </Button>

          <Divider>Or</Divider>

          <Stack direction="row" gap={2}>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                todaysGame();
                navigate(Route.MAIN);
              }}
              sx={{ flex: 1 }}
            >
              Today&apos;s game
            </Button>

            <Button
              variant="text"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                newGame();
                navigate(Route.MAIN);
              }}
              sx={{ flex: 1 }}
            >
              Random game
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};
