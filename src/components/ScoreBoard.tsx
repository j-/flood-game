import Paper from '@mui/material/Paper';
import Stack, { type StackProps } from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';
import { Score } from './Score';

export type ScoreBoardProps = StackProps & {
  currentScore: number;
  highScore: number | null;
  moveLimit: number;
};

export const ScoreBoard: FC<ScoreBoardProps> = ({
  currentScore,
  highScore,
  moveLimit,
  ...props
}) => {
  return (
    <Stack gap={1} sx={{ width: 'fit-content', userSelect: 'none' }} {...props}>
      <Paper
        elevation={0}
        sx={{
          padding: ({ spacing }) => spacing(1),
          bgcolor: ({ palette }) => palette.common.white,
          boxShadow: 'var(--box-shadow)',
        }}
      >
        <Score moveCount={currentScore} moveLimit={moveLimit} />
      </Paper>

      {highScore == null ? null : (
        <Typography
          sx={{
            p: 1,
            borderRadius: 1,
            textAlign: 'center',
            bgcolor: ({ palette }) => alpha(palette.primary.light, 0.1),
          }}
        >
          Best: {highScore}
        </Typography>
      )}
    </Stack>
  );
};
