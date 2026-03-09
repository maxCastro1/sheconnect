"use client";

import type { PropsWithChildren } from "react";
import type { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";

const lenisOptions = {
  autoRaf: true,
  smoothWheel: true,
  syncTouch: true,
  lerp: 0.08,
  wheelMultiplier: 0.9,
  touchMultiplier: 1,
  overscroll: true,
  stopInertiaOnNavigate: true,
  anchors: {
    offset: 96,
  },
} satisfies LenisOptions;

const LenisProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
