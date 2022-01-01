import { Cities } from "../../../utils/interfaces";
import { ForeCastNowActions } from "./forecastActions";

export interface CurrentForecastState {
  currentCityKey: string;
  entities: Cities;
}

const initialState: CurrentForecastState = {
  currentCityKey: "",
  entities: {},
};

export const forecastReducer = (
  state = initialState,
  action: ForeCastNowActions
) => {
  switch (action.type) {
    case "CITY_FETCH_COMPLETE":
      return {
        ...state,
        currentCityKey: action.key,
        entities: { ...state.entities, ...{ [action.key]: action.data } },
      };
    case "CHANGE_SELECTED_CITY":
      return {
        ...state,
        currentCityKey: action.key,
      };
    case "TOGGLE_CITY_FAVORITE":
      const isFavorite = !state.entities[action.key].isFavorite;
      return {
        ...state,
        entities: {
          ...state.entities,
          ...{ [action.key]: { ...state.entities[action.key], isFavorite } },
        },
      };
    default:
      return state;
  }
};
