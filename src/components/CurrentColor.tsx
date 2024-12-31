import { memo, useEffect } from 'react';

export type CurrentColorProps = {
  color: string;
};

export const CurrentColor = memo<CurrentColorProps>(({ color }) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--color-current', color);
  }, [color]);

  return null;
});
