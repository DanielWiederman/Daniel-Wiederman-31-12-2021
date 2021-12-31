import { call, put, takeEvery } from "redux-saga/effects";
import {
  completeFetchingCity,
  EnterForeCastActionPayload,
} from "./forecastActions";
import { ENTER_FORECAST_APP } from "./forecastorecastActionsConst";
import {
  currentForecastUrl,
  futureForecastUrl,
  geoLocationSearchUrl,
} from "../../utils/apiUrls";
import {
  CityCurrentForecast,
  CityFutureForecast,
  CityGeoDetails,
} from "../../utils/interfaces";
import axios from "axios";
import {
  cityFutureForecastDummyData,
  cityGeoDetailsDummyData,
  currentCityForecastDummyData,
} from "../../utils/dummyData";

export default function* forecastSaga() {
  yield call(enterPostPage);
}

const getCityDataByGeoLocation = async (lat: number, long: number) => {
  try {
    const cityGeoForecastRes = await axios.get(geoLocationSearchUrl(lat, long));
    const cityGeoForecast = cityGeoForecastRes.data as CityGeoDetails;
    const cityFutureDataRes = await axios.get(
      futureForecastUrl(cityGeoForecast.Key)
    );
    const cityFutureData = cityFutureDataRes.data as CityFutureForecast;
    const cityForecastRes = await axios.get(
      currentForecastUrl(cityGeoForecast.Key)
    );
    const cityForecast = cityForecastRes.data[0] as CityCurrentForecast;
    return convertServerDataToReducerData(
      cityForecast,
      cityFutureData,
      cityGeoForecast.EnglishName,
      cityGeoForecast.Key
    );
  } catch (err) {
    console.log(err);
  }
};

const getCityDataByKey = async (key: string, cityName: string = "Tel Aviv") => {
  try {
    const cityForecastRes = await axios.get(currentForecastUrl(key));
    const cityForecast = cityForecastRes.data as CityCurrentForecast;
    const cityFutureDataRes = await axios.get(futureForecastUrl(key));
    const cityFutureData: CityFutureForecast = cityFutureDataRes.data;
    return convertServerDataToReducerData(
      cityForecast,
      cityFutureData,
      cityName,
      key
    );
  } catch (err) {
    console.log(err);
  }
};

const convertServerDataToReducerData = (
  cityForecast: CityCurrentForecast,
  cityFutureData: CityFutureForecast,
  cityName: string,
  key: string,
  isFavorite = false
) => {
  return {
    data: {
      futureForecast: cityFutureData,
      currentForecast: cityForecast,
      isFavorite,
      cityName,
    },
    key,
  };
};

function* enterPostPage() {
  yield takeEvery(ENTER_FORECAST_APP, function* (action): Generator<any> {
    // const { lat, long } = action as EnterForeCastActionPayload;
    // //default key for Tel Aviv in case no geo params
    // const defaultCityKey = "215854";
    // let cityData: any;
    // //in case lat or long are 0
    // if (lat !== null && long !== null) {
    //   cityData = yield call(getCityDataByGeoLocation, lat, long);
    // } else {
    //   cityData = yield call(getCityDataByKey, defaultCityKey);
    // }
    // yield put(completeFetchingCity(cityData.key, cityData.data));
    const cityData = {
      data: {
        futureForecast: cityFutureForecastDummyData,
        currentForecast: currentCityForecastDummyData,
        isFavorite: false,
        cityName: cityGeoDetailsDummyData.EnglishName,
      },
      key: cityGeoDetailsDummyData.Key,
    };
    yield put(completeFetchingCity(cityData.key, cityData.data));
  });
}
