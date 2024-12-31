import Box, { type BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { FC, ReactNode } from 'react';

export type ScoreProps = BoxProps & {
  moveCount: number;
  moveLimit: number;
  label?: ReactNode;
};

export const Score: FC<ScoreProps> = ({
  moveCount,
  moveLimit,
  label,
  ...props
}) => (
  <Box
    display="grid"
    gridTemplateAreas="'count limit' 'count label'"
    {...props}
  >
    <Typography
      gridArea="count"
      component="div"
      variant="h3"
      lineHeight={0.75}
    >
      {String(moveCount)}
    </Typography>

    <Typography
      gridArea="limit"
      component="div"
      variant="h5"
      lineHeight={0.75}
    >
      &thinsp;/&thinsp;{String(moveLimit)}
    </Typography>

    <Typography
      gridArea="label"
      component="div"
      variant="body1"
      lineHeight={0.75}
      sx={{ placeSelf: 'start end' }}
    >
      {label}
    </Typography>
  </Box>
);
