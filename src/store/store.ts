import { configureStore } from '@reduxjs/toolkit';

import cityReducer from '../features/cities/citiesSlice';

export const store = configureStore({
  reducer: {
    city: cityReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
