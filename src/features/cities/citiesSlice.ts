import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../store/store';
import { getOffersByCities } from '../../data/data';
import { CITIES, Sorting } from '../../const';
import type { CityName, Offers, SortingType } from '../../types';

const offersByCities = getOffersByCities();

type CitiesState = {
  city: CityName;
  offers: Offers;
  sorting: SortingType;
}

const initialState: CitiesState = {
  city: CITIES[0],
  offers: offersByCities[CITIES[0]],
  sorting: Sorting.Popular,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    setOffers: (state, action: PayloadAction<Offers>) => {
      state.offers = action.payload;
    },
    setSorting: (state, action: PayloadAction<SortingType>) => {
      state.sorting = action.payload;
    },
  }
});

export const { setCity, setOffers, setSorting } = citiesSlice.actions;

export const selectCity = (state: RootState) => state.city.city;
export const selectOffers = (state: RootState) => state.city.offers;
export const selectSorting = (state: RootState) => state.city.sorting;

export default citiesSlice.reducer;
