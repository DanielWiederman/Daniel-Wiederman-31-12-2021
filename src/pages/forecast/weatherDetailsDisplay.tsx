import { connect, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { FutureForecastBox } from "../../components/futureForecastBox";
import { WeatherDetailsFirstRow } from "../../components/weatherDetailsFirstRow";
import { RootState } from "../../store";
import { md } from "../../utils/medias";
import { toggleFavorite } from "./store/forecastActions";

interface MapDispatchInterface {
  toggleFavorite?: (key: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchInterface => {
  return {
    toggleFavorite: (key: string) => dispatch(toggleFavorite(key)),
  };
};

interface WeatherDetailsDisplayProps extends MapDispatchInterface {
  cityKey: string;
}

const WeatherDetailsDisplayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  padding: 0vh 5vw;
  box-sizing: border-box;

  .forecast-now-text-row {
    font-size: 10vw;
    text-align: center;
    padding: 10vh 0vh;
  }

  .future-forecast {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  ${md} {
    width: 1000px;
    height: 800px;
    border: 5px solid black;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    padding: 20px 25px;
    border-radius: 50px;
    box-sizing: border-box;
    justify-content: space-between;

    .forecast-now-text-row {
      font-size: 70px;
      text-align: center;
      padding: unset;
    }

    .future-forecast {
      display: flex;
      justify-content: space-between;
      padding-bottom: 50px;
      flex-wrap: nowrap;
    }
  }
`;

const WeatherDetailsDisplay = (props: WeatherDetailsDisplayProps) => {
  const { toggleFavorite, cityKey } = props;
  const selectedCity = useSelector(
    (state: RootState) => cityKey && state.forecast.entities[cityKey]
  );
  const { futureForecast, currentForecast, isFavorite, cityName } =
    selectedCity;

  const futureForecastItems =
    !!futureForecast.DailyForecasts.length &&
    futureForecast.DailyForecasts.map((item) => {
      return (
        <FutureForecastBox key={cityKey + item.Date} dailyForecast={item} />
      );
    });

  return (
    <WeatherDetailsDisplayContainer>
      <WeatherDetailsFirstRow
        currentForecast={currentForecast}
        cityKey={cityKey}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        cityName={cityName}
      />
      <div className="forecast-now-text-row">{currentForecast.WeatherText}</div>
      <div className="future-forecast">{futureForecastItems}</div>
    </WeatherDetailsDisplayContainer>
  );
};

export default connect(null, mapDispatchToProps)(WeatherDetailsDisplay);
