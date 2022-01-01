import { Action } from "redux";
import { CityData } from "../../../utils/interfaces";
import {
  ENTER_FORECAST_APP,
  FORECAST_CITY_SELECTED,
  CITY_FETCH_COMPLETE,
  CHANGE_SELECTED_CITY,
  TOGGLE_CITY_FAVORITE,
  FETCH_FAILED_ERROR,
} from "./forecastorecastActionsConst";

export type ForeCastNowActions =
  | {
      type: "ENTER_FORECAST_APP";
      lat: number;
      long: number;
    }
  | {
      type: "FORECAST_CITY_SELECTED";
      key: string;
      cityName: string;
    }
  | {
      type: "CITY_FETCH_COMPLETE";
      data: CityData;
      key: string;
    }
  | {
      type: "CHANGE_SELECTED_CITY";
      key: string;
    }
  | {
      type: "TOGGLE_CITY_FAVORITE";
      key: string;
    };

export interface EnterForeCastActionPayload extends Action {
  lat: number;
  long: number;
}

export const enterForeCast = (
  lat: number,
  long: number
): EnterForeCastActionPayload => {
  return {
    type: ENTER_FORECAST_APP,
    lat,
    long,
  };
};

export interface SetForecastCityActionPayload extends Action {
  key: string;
  cityName: string;
}

export const setForecastCity = (
  key: string,
  cityName: string
): SetForecastCityActionPayload => {
  return {
    type: FORECAST_CITY_SELECTED,
    key,
    cityName,
  };
};

export interface CompleteFetchCityActionPayload extends Action {
  key: string;
  data: CityData;
}

export const completeFetchingCity = (
  key: string,
  data: CityData
): CompleteFetchCityActionPayload => {
  return {
    type: CITY_FETCH_COMPLETE,
    key,
    data,
  };
};

export interface ChangeSelectedCityActionPayload extends Action {
  key: string;
}

export const changeSelectedCity = (
  key: string
): ChangeSelectedCityActionPayload => {
  return {
    type: CHANGE_SELECTED_CITY,
    key,
  };
};

export interface toggleFavoriteActionPayload extends Action {
  key: string;
}

export const toggleFavorite = (key: string): toggleFavoriteActionPayload => {
  return {
    type: TOGGLE_CITY_FAVORITE,
    key,
  };
};

export const fetchFailed = (key: string): toggleFavoriteActionPayload => {
  return {
    type: FETCH_FAILED_ERROR,
    key,
  };
};
