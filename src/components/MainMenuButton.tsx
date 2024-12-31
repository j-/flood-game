import MenuIcon from '@mui/icons-material/Menu';
import Backdrop from '@mui/material/Backdrop';
import Button, { type ButtonProps } from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { useCallback, useRef, useState, type FC } from 'react';
import { MainMenu, type MainMenuProps } from './MainMenu';

export type MainMenuButtonProps = ButtonProps & {
  propsMainMenu?: MainMenuProps;
};

export const MainMenuButton: FC<MainMenuButtonProps> = ({
  propsMainMenu,
  ...props
}) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const open = useCallback(() => setIsPopperOpen(true), []);
  const close = useCallback(() => setIsPopperOpen(false), []);

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={open}
        startIcon={<MenuIcon />}
        color="inherit"
        sx={{
          fontSize: 24,
          fontWeight: 600,
        }}
        {...props}
      >
        FLOOD
      </Button>

      <Backdrop open={isPopperOpen} onClick={close} />

      <Popper
        open={isPopperOpen}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={close}>
            <Fade {...TransitionProps} timeout={350}>
              <Paper onClickCapture={close}>
                <MainMenu {...propsMainMenu} />
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};
