import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { forecastReducer } from "./pages/forecast/forecastReducer";
import forecastSaga from "./pages/forecast/forecastSaga";

const rootReducer = combineReducers({
  forecast: forecastReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(forecastSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
