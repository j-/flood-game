import type { FC, PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router';

export const Router: FC<PropsWithChildren> = ({ children }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>
);
