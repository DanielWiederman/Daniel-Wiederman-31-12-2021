import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import { Dispatch } from "redux";
import CurrentForecast from "./pages/forecast/currentForecastContainer";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { enterForeCast } from "./pages/forecast/store/forecastActions";
import FavoritesPageContainer from "./pages/favorites/favoritesPageContainer";
import { useMedia } from "./utils/medias";

interface MapDispatchInterface {
  enterForecast: (lat: number, long: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchInterface => {
  return {
    enterForecast: (lat: number, long: number) =>
      dispatch(enterForeCast(lat, long)),
  };
};

interface Props extends MapDispatchInterface {}

function App(props: Props) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCityLocation();
  });

  const getCityLocation = () => {
    const { enterForecast } = props;
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        enterForecast(lat, long);
      });
    } else {
      enterForecast(null, null);
    }
    setLoading(false);
  };

  useMedia();

  const route = (
    <Layout>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        {!loading && (
          <Route path="/favorites" element={<FavoritesPageContainer />} />
        )}
        <Route path="/city/:cityKey" element={<CurrentForecast />} />
        <Route path="/city" element={<CurrentForecast />} />
        <Route path="*" element={<Navigate replace to="/city" />} />
      </Routes>
    </Layout>
  );

  return <div className="App">{route}</div>;
}

export default connect(null, mapDispatchToProps)(App);
