import { Cities } from "../../utils/interfaces";
import { ForeCastNowActions } from "./forecastActions";

interface currentForecastState {
  currentCityKey: string;
  entities: Cities;
}

const initialState: currentForecastState = {
  currentCityKey: "",
  entities: {},
};

export const forecastReducer = (
  state = initialState,
  action: ForeCastNowActions
) => {
  switch (action.type) {
    case "FORECAST_NOW_CITY_SELECTED":
      return {
        ...state,
        currentCityKey: action.key,
      };
    case "CITY_FETCH_COMPLETE":
      return {
        ...state,
        currentCityKey: action.key,
        entities: { ...state.entities, ...{ [action.key]: action.data } },
      };
    default:
      return state;
  }
};
