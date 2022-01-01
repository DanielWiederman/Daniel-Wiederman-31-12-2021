import axios from "axios";
import { toast, TypeOptions } from "react-toastify";
import {
  currentForecastUrl,
  futureForecastUrl,
  geoLocationSearchUrl,
} from "./apiUrls";
import {
  CityCurrentForecast,
  CityFutureForecast,
  CityGeoDetails,
} from "./interfaces";

export const handleAsyncToast = (
  toastId: React.ReactText,
  errorMsg: string,
  errorId: string,
  type: TypeOptions
) => {
  toast.update(toastId, {
    render: errorMsg,
    type,
    isLoading: false,
    toastId: errorId,
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2500,
  });
};

export const convertServerDataToReducerData = (
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

export const getCityDataByGeoLocation = async (lat: number, long: number) => {
  const toastId = toast.loading("Fetching data...", {
    position: toast.POSITION.TOP_CENTER,
  });
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
    handleAsyncToast(toastId, "successfully fetched data!", "geo", "success");
    return convertServerDataToReducerData(
      cityForecast,
      cityFutureData,
      cityGeoForecast.EnglishName,
      cityGeoForecast.Key
    );
  } catch (err) {
    handleAsyncToast(toastId, "Error fetching by geo location", "geo", "error");
    console.log(err);
  }
};

export const getCityDataByKey = async (
  key: string,
  cityName: string = "Tel Aviv"
) => {
  const toastId = toast.loading("Fetching data", {
    position: toast.POSITION.TOP_CENTER,
  });
  try {
    const cityForecastRes = await axios.get(currentForecastUrl(key));
    const cityForecast = cityForecastRes.data[0] as CityCurrentForecast;
    const cityFutureDataRes = await axios.get(futureForecastUrl(key));
    const cityFutureData: CityFutureForecast = cityFutureDataRes.data;
    handleAsyncToast(toastId, "successfully fetched data!", "geo", "success");
    return convertServerDataToReducerData(
      cityForecast,
      cityFutureData,
      cityName,
      key
    );
  } catch (err) {
    handleAsyncToast(toastId, "Error fetching by key", "key", "error");
    console.log(err);
  }
};
