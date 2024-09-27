import { useState, useEffect } from 'react';

export const useIsDesktop = (breakpoint = 991.98) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > breakpoint);
  }, [breakpoint]);

  return isDesktop;
};
