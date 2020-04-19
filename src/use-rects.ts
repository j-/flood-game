import * as React from 'react';

export const useRects = (gridRef: React.RefObject<SVGSVGElement>) => {
  const [rects, setRects] = React.useState<SVGRectElement[]>([]);

  React.useEffect(() => {
    if (!gridRef.current) return;
    const parent = gridRef.current;
    const children = parent.querySelectorAll('rect');
    setRects(Array.from(children));
  }, [gridRef]);

  return rects;
};
