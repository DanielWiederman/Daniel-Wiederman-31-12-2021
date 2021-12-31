import axios from "axios";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { FancyIcon } from "../../components/fancyIcon";
import { FancyInput } from "../../components/fancyInput";
import { RootState } from "../../store";
import { autoCompleteUrl } from "../../utils/apiUrls";
import {
  translateWeatherCodeToIcon,
  useDebouncedEffect,
} from "../../utils/functionalUtils";
import { SearchQueryResponse } from "../../utils/interfaces";
import { setForecastCity } from "./forecastActions";

interface MapDispatchInterface {
  insertCityKey?: (key: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchInterface => {
  return {
    insertCityKey: (key: string) => dispatch(setForecastCity(key)),
  };
};

interface Props extends MapDispatchInterface {}

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const CurrentForecast = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchQueryResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const selectedCity = useSelector(
    (state: RootState) =>
      state.forecast.currentCityKey &&
      state.forecast.entities[state.forecast.currentCityKey]
  );
  useDebouncedEffect(() => getSearchResult(), [searchQuery], 350);

  const getSearchResult = async () => {
    const { insertCityKey } = props;
    if (searchQuery.length > 2) {
      // setLoading(true);
      // const res: SearchQueryResponse[] = await axios.get(
      //   autoCompleteUrl(searchQuery)
      // );
      // setSearchResults(res);
      // setLoading(false);
    }
  };

  return (
    <div>
      <InputContainer>
        <FancyInput
          value={searchQuery}
          onChange={setSearchQuery}
          loading={loading}
        />
      </InputContainer>
      {selectedCity && (
        <div>
          <div>{selectedCity.cityName}</div>
          <div>
            {Math.ceil(selectedCity.currentForecast.Temperature.Metric.Value)}
          </div>
          <FancyIcon
            iconName={translateWeatherCodeToIcon(
              selectedCity.currentForecast.WeatherIcon
            )}
          />
          <div>{selectedCity.currentForecast.WeatherText}</div>
        </div>
      )}
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CurrentForecast);
