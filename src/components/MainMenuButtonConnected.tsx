import type { FC } from 'react';
import { useNavigate } from 'react-router';
import { Route } from '../route';
import { useGameState } from '../use-game-state';
import { MainMenuButton } from './MainMenuButton';

export const MainMenuButtonConnected: FC = () => {
  const { todaysGame, newGame } = useGameState();
  const navigate = useNavigate();

  return (
    <MainMenuButton
      propsMainMenu={{
        buttonPropsTodaysGame: {
          onClick: () => todaysGame(),
        },
        buttonPropsRandomGame: {
          onClick: () => newGame(),
        },
        buttonPropsCustomSeed: {
          onClick: () => navigate(Route.CUSTOM_SEED),
        },
        buttonPropsHowToPlay: {
          onClick: () => navigate(Route.HOW_TO_PLAY),
        },
        buttonPropsAbout: {
          component: 'a',
          href: 'https://skeoh.com',
          target: '_blank',
        },
      }}
    />
  );
};
