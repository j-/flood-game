import { FC, PropsWithChildren } from 'react';
import { Theme } from './Theme';
import { Store } from './Store';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => (
  <Theme>
    <Store>
      {children}
    </Store>
  </Theme>
);
