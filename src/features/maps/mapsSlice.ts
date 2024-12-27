import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getOffersByCities, getPoints } from '../../data/data';
import { CITIES } from '../../const';
import type { Location, Point } from '../../types';
import { RootState } from '../../store/store';

const offersByCities = getOffersByCities();

type MapsState = {
  location: Location;
  points: Point[];
  activeOfferId: string | null;
}

const initialState: MapsState = {
  location: offersByCities[CITIES[0]][0]?.city.location,
  points: getPoints(offersByCities[CITIES[0]]),
  activeOfferId: null,
};

export const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    setPoints: (state, action: PayloadAction<Point[]>) => {
      state.points = action.payload;
    },
    setActiveOfferId: (state, action: PayloadAction<string | null>) => {
      state.activeOfferId = action.payload;
    },
  }
});

export const { setLocation, setPoints, setActiveOfferId } = mapsSlice.actions;

export const selectLocation = (state: RootState) => state.map.location;
export const selectPoints = (state: RootState) => state.map.points;
export const selectActiveOfferId = (state: RootState) => state.map.activeOfferId;

export default mapsSlice.reducer;
