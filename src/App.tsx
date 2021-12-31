import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import { Dispatch } from "redux";
import CurrentForecast from "./pages/forecast/currentForecast";
import { enterForeCast } from "./pages/forecast/forecastActions";
import { useEffect } from "react";
import { connect } from "react-redux";

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
  };

  const route = (
    <Layout>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<CurrentForecast />} />
      </Routes>
    </Layout>
  );

  return <div className="App">{route}</div>;
}

export default connect(null, mapDispatchToProps)(App);
