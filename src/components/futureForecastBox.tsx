import styled from "styled-components";
import {
  fahrenheitToCelsius,
  translateWeatherCodeToIcon,
} from "../utils/functionalUtils";
import { DailyForecast } from "../utils/interfaces";
import { lg } from "../utils/medias";
import { FancyIcon } from "./fancyIcon";

interface FutureForecastBoxProps {
  dailyForecast: DailyForecast;
}

const FutureForecastContainer = styled.div`
  width: 40vh;
  height: 40vh;
  border: 0.5vh solid black;
  box-sizing: border-box;
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  margin: 1.5vh 0vh;
  & .future-forecast-date {
    padding-bottom: 2.5vh;
    font-size: 6.5vh;
  }
  & .future-forecast-icon {
    padding-bottom: 2.5vh;
    i {
      width: 100%;
      height: 10vh;
      font-size: 15vh;
    }
  }
  & .future-forecast-temp {
    font-size: 5vh;
  }
  ${lg} {
    width: 165px;
    height: 165px;
    border: 1.5px solid black;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    margin: unset;
    & .future-forecast-date {
      padding-bottom: 15px;
      font-size: 25px;
    }
    & .future-forecast-icon {
      padding-bottom: 15px;
      i {
        width: 100%;
        height: 30px;
        font-size: 40px;
      }
    }
    & .future-forecast-temp {
      font-size: 20px;
    }
  }
`;

const translatedDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const FutureForecastBox = (props: FutureForecastBoxProps) => {
  const { Temperature, Day } = props.dailyForecast;
  const forecastDate = new Date(props.dailyForecast?.Date);
  const forecastDay = forecastDate.getDay() as number;
  return (
    <FutureForecastContainer>
      <div className="future-forecast-date">{translatedDays[forecastDay]}</div>
      <div className="future-forecast-icon">
        <FancyIcon iconName={translateWeatherCodeToIcon(Day.Icon)} />
      </div>
      <div className="future-forecast-temp">
        {Math.ceil(fahrenheitToCelsius(Temperature?.Minimum?.Value))}&deg; -{" "}
        {Math.ceil(fahrenheitToCelsius(Temperature?.Maximum?.Value))}&deg;
      </div>
    </FutureForecastContainer>
  );
};
