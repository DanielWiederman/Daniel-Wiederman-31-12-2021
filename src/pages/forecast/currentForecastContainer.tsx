import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import styled from "styled-components";
import { FancySearchResultsInput } from "../../components/facnySearchResultsInput";
import { RootState } from "../../store";
import { autoCompleteUrl } from "../../utils/apiUrls";

import {
  useDebouncedEffect,
  useOutsideClick,
} from "../../utils/functionalUtils";
import { SearchQueryResponse } from "../../utils/interfaces";
import { md } from "../../utils/medias";
import { changeSelectedCity, setForecastCity } from "./store/forecastActions";
import WeatherDetailsDisplay from "./weatherDetailsDisplay";

interface MapDispatchInterface {
  selectCity?: (key: string, cityName: string) => void;
  setSelectedCity?: (key: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchInterface => {
  return {
    selectCity: (key: string, cityName: string) =>
      dispatch(setForecastCity(key, cityName)),
    setSelectedCity: (key: string) => dispatch(changeSelectedCity(key)),
  };
};

interface Props extends MapDispatchInterface {}

const InputContainer = styled.div`
  width: 100%;
  display: block;
  padding-top: 4vh;
  ${md} {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
`;

const CurrentForecast = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchQueryResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const ref = useRef();
  const selectedCityKey = useSelector(
    (state: RootState) => state.forecast.currentCityKey
  );

  useEffect(() => {}, [selectedCityKey]);

  useDebouncedEffect(() => getSearchResult(), [searchQuery], 350);

  let { cityKey } = useParams();

  if (cityKey && cityKey !== selectedCityKey) {
    const { setSelectedCity } = props;
    setSelectedCity(cityKey);
  }

  const getSearchResult = async () => {
    if (searchQuery.length > 2) {
      setLoading(true);
      try {
        const res = await axios.get(autoCompleteUrl(searchQuery));
        setSearchResults(res.data);
        setLoading(false);
      } catch (err) {
        toast.error("error fetching auto complete list", {
          toastId: "autoComplete",
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2500,
        });
        console.log(err);
      }
    } else {
      setSearchResults([]);
    }
  };

  const onCitySelect = (key: string, cityName: string) => {
    const { selectCity } = props;
    selectCity(key, cityName);
    setSearchQuery("");
    setSearchResults([]);
  };

  useOutsideClick(ref, () => {
    if (searchResults) {
      setSearchResults([]);
    }
  });

  return (
    <div>
      <InputContainer ref={ref}>
        <FancySearchResultsInput
          value={searchQuery}
          onChange={setSearchQuery}
          loading={loading}
          options={searchResults}
          onCitySelect={onCitySelect}
        />
      </InputContainer>
      {selectedCityKey && <WeatherDetailsDisplay cityKey={selectedCityKey} />}
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CurrentForecast);
