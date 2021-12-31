//in real world usage the server would handle it to hide the the key
const apiKey = "SAxmf6VAm1C3A0DWr8PdcQutXY0lDGvV";

export const autoCompleteUrl = (query: string) =>
  `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`;

export const currentForecastUrl = (locationKey: string) =>
  `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;

export const futureForecastUrl = (locationKey: string) =>
  `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`;

export const geoLocationSearchUrl = (lat: number, long: number) =>
  `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${long}`;
