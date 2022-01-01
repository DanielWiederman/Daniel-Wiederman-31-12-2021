import { RootState } from "../../../store";

export const getForecastState = (state: RootState) => state.forecast;

export const getCityByKey = (state: RootState, key: string) =>
  getForecastState(state).entities[key];

export const getFavoritesCitiesKeys = (state: RootState) => {
  const cities = getForecastState(state).entities;
  const citiesKeys: string[] = [];
  Object.keys(cities).forEach((key) => {
    if (cities[key]?.isFavorite) {
      citiesKeys.push(key);
    }
  });
  return citiesKeys;
};
