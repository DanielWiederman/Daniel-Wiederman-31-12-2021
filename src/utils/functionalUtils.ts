import { useEffect } from "react";

export const useDebouncedEffect = (effect: any, deps: any, delay: number) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};

export const translateWeatherCodeToIcon = (weatherCode: number) => {
  if (weatherCode > 0 && weatherCode < 8) {
    return "sun";
  } else if (weatherCode > 8 && weatherCode < 12) {
    return "cloud";
  } else if (weatherCode >= 12 && weatherCode < 19) {
    return "cloud-showers-heavy";
  } else if (weatherCode >= 12 && weatherCode < 20) {
    return "cloud-showers-heavy";
  } else if (weatherCode >= 20 && weatherCode < 22) {
    return "cloud-sun";
  } else if (weatherCode >= 22 && weatherCode < 30) {
    return "snowflake";
  } else if (weatherCode >= 32 && weatherCode < 37) {
    return "moon";
  } else if (weatherCode >= 37 && weatherCode < 39) {
    return "cloud-moon";
  } else if (weatherCode > 39 && weatherCode < 43) {
    return "cloud-moon-rain";
  } else {
    return "sun";
  }
};
