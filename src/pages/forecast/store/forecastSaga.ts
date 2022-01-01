import { all, call, put, select, takeEvery } from "redux-saga/effects";
import {
  changeSelectedCity,
  completeFetchingCity,
  EnterForeCastActionPayload,
  SetForecastCityActionPayload,
} from "./forecastActions";
import {
  ENTER_FORECAST_APP,
  FORECAST_CITY_SELECTED,
} from "./forecastorecastActionsConst";
import { getCityByKey } from "./forecastSelectors";
import { RootState } from "../../../store";
import {
  getCityDataByGeoLocation,
  getCityDataByKey,
} from "../../../utils/sagaUtils";

export default function* forecastSaga() {
  yield all([enterPostPage(), selectedCityGetData()]);
}

function* enterPostPage() {
  yield takeEvery(ENTER_FORECAST_APP, function* (action): Generator<any> {
    const { lat, long } = action as EnterForeCastActionPayload;
    //default key for Tel Aviv in case no geo params
    const defaultCityKey = "215854";
    let cityData: any;
    //in case lat or long are 0
    if (lat !== null && long !== null) {
      cityData = yield call(getCityDataByGeoLocation, lat, long);
    } else {
      cityData = yield call(getCityDataByKey, defaultCityKey);
    }
    yield put(completeFetchingCity(cityData.key, cityData.data));
  });
}

function* selectedCityGetData() {
  yield takeEvery(FORECAST_CITY_SELECTED, function* (action): Generator<any> {
    const { cityName, key } = action as SetForecastCityActionPayload;
    if (yield select((state: RootState) => getCityByKey(state, key))) {
      yield put(changeSelectedCity(key));
      return;
    }
    const cityData: any = yield call(getCityDataByKey, key, cityName);
    yield put(completeFetchingCity(cityData.key, cityData.data));
  });
}
