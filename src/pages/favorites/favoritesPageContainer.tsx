import { connect, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { FavoritesCitiesBox } from "../../components/favoritesCitiesBox";
import { RootState } from "../../store";
import { toggleFavorite } from "../forecast/store/forecastActions";
import {
  getFavoritesCitiesKeys,
  getForecastState,
} from "../forecast/store/forecastSelectors";

interface MapDispatchInterface {
  toggleFavorite?: (key: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchInterface => {
  return {
    toggleFavorite: (key: string) => dispatch(toggleFavorite(key)),
  };
};

interface Props extends MapDispatchInterface {}

const FavoritesCitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FavoritesPageContainer = (props: Props) => {
  const citiesKeys = useSelector((state: RootState) =>
    getFavoritesCitiesKeys(state)
  );
  const citiesData = useSelector((state: RootState) =>
    getForecastState(state)
  ).entities;

  const items =
    !!citiesKeys.length &&
    citiesKeys.map((cityKey) => {
      const cityData = citiesData[cityKey];
      return (
        <FavoritesCitiesBox
          key={cityKey}
          cityName={cityData.cityName}
          currentForecast={cityData.currentForecast}
          cityKey={cityKey}
        />
      );
    });

  return <FavoritesCitiesContainer>{items}</FavoritesCitiesContainer>;
};

export default connect(null, mapDispatchToProps)(FavoritesPageContainer);
