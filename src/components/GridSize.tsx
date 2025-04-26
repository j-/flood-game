import { type FC, useEffect, useRef } from 'react';
import { getBoardWidth } from '../board';
import { Grid, GridProps } from './Grid';

export const GridSize: FC<GridProps> = (props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<SVGSVGElement>(null);
  const width = getBoardWidth(props.board);

  useEffect(() => {
    const parent = parentRef.current;
    const child = childRef.current;
    if (!parent || !child) return;

    const callback = (entries: ResizeObserverEntry[]) => {
      const originalWidth = entries[0].contentRect.width;
      const flooredWidth = Math.floor(originalWidth / width) * width;
      child.style.width = flooredWidth / originalWidth * 100 + '%';
    };

    const observer = new ResizeObserver(callback);
    observer.observe(parent);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={parentRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Grid
        ref={childRef}
        {...props}
      />
    </div>
  );
};
