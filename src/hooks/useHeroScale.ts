import { useEffect, useState } from 'react';

export const HERO_DESIGN_WIDTH = 1440;
export const HERO_DESIGN_HEIGHT = 880;
/** Floating navbar clearance (px) — compensated inside scaled artboard */
export const HERO_NAV_CLEARANCE = 88;

export interface HeroScale {
  scale: number;
  height: number;
  canvasHeight: number;
  contentTopPadding: number;
}

export function useHeroScale(
  designWidth = HERO_DESIGN_WIDTH,
  baseHeight = HERO_DESIGN_HEIGHT,
): HeroScale {
  const calc = (): HeroScale => {
    const vw = typeof window !== 'undefined' ? window.innerWidth : designWidth;
    const scale = Math.min(1, vw / designWidth);

    if (scale >= 1) {
      return {
        scale: 1,
        height: baseHeight,
        canvasHeight: baseHeight,
        contentTopPadding: 120,
      };
    }

    // Extra top inset in artboard coords so content clears the floating navbar when scaled down
    const navInset = Math.round(HERO_NAV_CLEARANCE / scale);
    const contentTopPadding = navInset;
    const canvasHeight = baseHeight + navInset;

    return {
      scale,
      height: canvasHeight * scale,
      canvasHeight,
      contentTopPadding,
    };
  };

  const [state, setState] = useState<HeroScale>(calc);

  useEffect(() => {
    const update = () => setState(calc());
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [designWidth, baseHeight]);

  return state;
}
