import { configureStore } from '@reduxjs/toolkit';

import cityReducer from '../features/cities/citiesSlice';
import mapsReducer from '../features/maps/mapsSlice';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    map: mapsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
