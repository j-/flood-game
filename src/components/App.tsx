import type { FC } from 'react';
import { Route, Routes } from 'react-router';
import { Route as RouteEnum } from '../route';
import { RouteMain } from './RouteMain';
import { RouteSeeded } from './RouteSeeded';
import { RouteTutorial } from './RouteTutorial';

export const App: FC = () => (
  <Routes>
    <Route path={RouteEnum.HOW_TO_PLAY} Component={RouteTutorial} />
    <Route path={RouteEnum.CUSTOM_SEED} Component={RouteSeeded} />
    <Route path={RouteEnum.MAIN} Component={RouteMain} />
  </Routes>
);
