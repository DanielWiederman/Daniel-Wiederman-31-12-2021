import { Link } from "react-router-dom";
import styled from "styled-components";
import { CityCurrentForecast } from "../utils/interfaces";
import { md } from "../utils/medias";

interface FavoritesCitiesBoxContainerProps {
  currentForecast: CityCurrentForecast;
  cityKey: string;
  cityName: string;
}

const FavoritesCitiesBoxContainer = styled.div`
  width: 80vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
  margin: 35px 30px;
  & .city-detail-block {
    padding-top: 50px;
    padding-bottom: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    & .city-title {
      padding-bottom: 15px;
      font-size: 35px;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
      a {
        color: unset;
        text-decoration: none;
      }
    }
    & .city-current-temp {
      font-size: 30px;
    }
  }
  & .city-current-forecast {
    font-size: 40px;
  }

  ${md} {
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid black;
    text-align: center;
    margin: 35px 30px;
    & .city-detail-block {
      padding-top: 50px;
      padding-bottom: 100px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      & .city-title {
        padding-bottom: 15px;
        font-size: 35px;
        a {
          color: unset;
          text-decoration: none;
        }
      }
      & .city-current-temp {
        font-size: 30px;
      }
    }
    & .city-current-forecast {
      font-size: 40px;
    }
  }
`;

export const FavoritesCitiesBox = (props: FavoritesCitiesBoxContainerProps) => {
  const { cityKey, currentForecast, cityName } = props;
  return (
    <FavoritesCitiesBoxContainer>
      <div className="city-detail-block">
        <div className="city-title">
          <Link to={`/city/${cityKey}`}>{cityName}</Link>
        </div>
        <div className="city-current-temp">
          {Math.ceil(currentForecast.Temperature?.Metric.Value) || "N/A"}&deg;
        </div>
      </div>
      <div className="city-current-forecast">{currentForecast.WeatherText}</div>
    </FavoritesCitiesBoxContainer>
  );
};
