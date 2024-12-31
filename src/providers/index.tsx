import type { FC, PropsWithChildren } from 'react';
import { Router } from './Router';
import { Store } from './Store';
import { Theme } from './Theme';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => (
  <Theme>
    <Store>
      <Router>
        {children}
      </Router>
    </Store>
  </Theme>
);
