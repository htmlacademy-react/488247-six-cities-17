import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../store/store';
import { getOffersByCities } from '../../data/data';
import { CITIES } from '../../const';
import type { CityName, Offers } from '../../types';

const offersByCities = getOffersByCities();

type CitiesState = {
  currentCity: CityName;
  currentOffers: Offers;
}

const initialState: CitiesState = {
  currentCity: CITIES[0],
  currentOffers: offersByCities[CITIES[0]],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.currentCity = action.payload;
    },
    setOffers: (state, action: PayloadAction<Offers>) => {
      state.currentOffers = action.payload;
    }
  }
});

export const { setCity, setOffers } = citiesSlice.actions;

export const selectCity = (state: RootState) => state.city.currentCity;
export const selectOffers = (state: RootState) => state.city.currentOffers;

export default citiesSlice.reducer;
