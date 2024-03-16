import CloseIcon from '@mui/icons-material/Close';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { FC } from 'react';

const CloseButton: FC<IconButtonProps> = (props) => (
  <IconButton
    aria-label="close"
    sx={{
      position: 'absolute',
      right: 8,
      top: 8,
      color: (theme) => theme.palette.grey[500],
    }}
    {...props}
  >
    <CloseIcon />
  </IconButton>
);

export default CloseButton;
