import List, { type ListProps } from '@mui/material/List';
import ListItemButton, { type ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import type { FC } from 'react';

export type MainMenuProps = ListProps & {
  buttonPropsTodaysGame?: Partial<ListItemButtonProps>;
  buttonPropsRandomGame?: Partial<ListItemButtonProps>;
  buttonPropsCustomSeed?: Partial<ListItemButtonProps>;
  buttonPropsHowToPlay?: Partial<ListItemButtonProps>;
  buttonPropsAbout?: Partial<ListItemButtonProps<'a'>>;
};

export const MainMenu: FC<MainMenuProps> = ({
  buttonPropsTodaysGame,
  buttonPropsRandomGame,
  buttonPropsCustomSeed,
  buttonPropsHowToPlay,
  buttonPropsAbout,
  ...props
}) => (
  <List {...props}>
    <ListItemButton {...buttonPropsTodaysGame}>
      <ListItemText>
        Today&apos;s game
      </ListItemText>
    </ListItemButton>

    <ListItemButton {...buttonPropsRandomGame}>
      <ListItemText>
        Random game
      </ListItemText>
    </ListItemButton>

    <ListItemButton {...buttonPropsCustomSeed}>
      <ListItemText>
        Custom seed
      </ListItemText>
    </ListItemButton>

    <ListItemButton {...buttonPropsHowToPlay}>
      <ListItemText>
        How to play
      </ListItemText>
    </ListItemButton>

    <ListItemButton component="a" {...buttonPropsAbout}>
      <ListItemText>
        skeoh.com &rarr;
      </ListItemText>
    </ListItemButton>
  </List>
);
