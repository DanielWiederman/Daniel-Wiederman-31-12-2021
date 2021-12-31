import { Action } from "redux";
import { CityData } from "../../utils/interfaces";
import {
  ENTER_FORECAST_APP,
  FORECAST_NOW_CITY_SELECTED,
  CITY_FETCH_COMPLETE,
} from "./forecastorecastActionsConst";

export type ForeCastNowActions =
  | {
      type: "ENTER_FORECAST_APP";
      lat: number;
      long: number;
    }
  | {
      type: "FORECAST_NOW_CITY_SELECTED";
      key: string;
    }
  | {
      type: "CITY_FETCH_COMPLETE";
      data: CityData;
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
}

export const setForecastCity = (key: string): SetForecastCityActionPayload => {
  return {
    type: FORECAST_NOW_CITY_SELECTED,
    key,
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
