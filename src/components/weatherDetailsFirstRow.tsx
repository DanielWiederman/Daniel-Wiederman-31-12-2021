import styled from "styled-components";
import { translateWeatherCodeToIcon } from "../utils/functionalUtils";
import { CityCurrentForecast } from "../utils/interfaces";
import { lg, md } from "../utils/medias";
import { FancyIcon } from "./fancyIcon";

interface WeatherDetailsFirstRowProps {
  cityKey: string;
  toggleFavorite: (cityKey: string) => void;
  currentForecast: CityCurrentForecast;
  isFavorite: boolean;
  cityName: string;
}

const ForecastNowFavoriteRow = styled.div`
  display: block;
  margin: auto;
  & .favorite {
    text-align: center;
    padding-top: 10vh;
  }
  & .favorite > i {
    font-size: 15vw;
    color: #dd2424;
  }
  & .current-forecast {
    display: flex;
    align-items: center;
    & .weather-status-icon > i {
      font-size: 20vw;
      width: 23vw;
    }
    & .weather-info {
      display: flex;
      flex-direction: column;
      & .city-name {
        font-size: 6vw;
        padding-bottom: 5vh;
      }
      & .city-current-temp {
        font-size: 6vw;
      }
    }
  }
  ${md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: unset;
    & .favorite {
      text-align: unset;
      padding-top: unset;
    }
    & .favorite > i {
      font-size: 50px;
      cursor: pointer;
      color: #dd2424;
    }
    & .current-forecast {
      display: flex;
      align-items: center;
      & .weather-status-icon > i {
        font-size: 70px;
        width: 90px;
      }
      & .weather-info {
        display: flex;
        flex-direction: column;
        & .city-name {
          font-size: 25px;
          padding-bottom: 10px;
        }
        & .city-current-temp {
          font-size: 25px;
        }
      }
    }
  }
`;

export const WeatherDetailsFirstRow = (props: WeatherDetailsFirstRowProps) => {
  const { cityKey, toggleFavorite, currentForecast, isFavorite, cityName } =
    props;
  return (
    <ForecastNowFavoriteRow>
      <div className="current-forecast">
        <div className="weather-status-icon">
          <FancyIcon
            iconName={translateWeatherCodeToIcon(currentForecast.WeatherIcon)}
          />
        </div>
        <div className="weather-info">
          <div className="city-name">{cityName}</div>
          <div className="city-current-temp">
            {Math.ceil(currentForecast.Temperature?.Metric.Value) || "N/A"}&deg;
          </div>
        </div>
      </div>
      <div className="favorite" onClick={() => toggleFavorite(cityKey)}>
        <i className={`${isFavorite ? "fas" : "far"} fa-heart`}></i>
      </div>
    </ForecastNowFavoriteRow>
  );
};
