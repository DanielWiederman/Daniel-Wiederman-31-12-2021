import { useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

export const sizes = {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const sm = `@media (min-width: ${sizes.sm}px)`;
export const md = `@media (min-width: ${sizes.md}px)`;
export const lg = `@media (min-width: ${sizes.lg}px)`;
export const xl = `@media (min-width: ${sizes.xl}px)`;

export const query = {
  sm,
  md,
  lg,
  xl,
};

export const useMedia = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setWidth();
    };

    const ro = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setWidth(width);
      }
    });

    ro.observe(document.body);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    sm: sizes.sm <= width,
    md: sizes.md <= width,
    lg: sizes.lg <= width,
    xl: sizes.xl <= width,
  };
};
