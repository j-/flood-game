import { type FC, useCallback, useEffect, useRef } from 'react';
import { getBoardWidth } from '../board';
import { Grid, GridProps } from './Grid';

export const GridSize: FC<GridProps> = (props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<SVGSVGElement>(null);
  const width = getBoardWidth(props.board);

  const observerCallback = useCallback<ResizeObserverCallback>((entries) => {
    const child = childRef.current;
    if (!child) return;

    const originalWidth = entries[0].contentRect.width;
    const flooredWidth = Math.floor(originalWidth / width) * width;

    child.style.width = flooredWidth / originalWidth * 100 + '%';
  }, []);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const observer = new ResizeObserver(observerCallback);
    observer.observe(parent);

    return () => {
      observer.disconnect();
    };
  }, [observerCallback]);

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
      <Grid ref={childRef} {...props} />
    </div>
  );
};
