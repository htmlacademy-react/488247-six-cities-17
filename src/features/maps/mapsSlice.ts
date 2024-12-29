import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';

type MapsState = {
  activeOfferId: string | null;
}

const initialState: MapsState = {
  activeOfferId: null,
};

export const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    setActiveOfferId: (state, action: PayloadAction<string | null>) => {
      state.activeOfferId = action.payload;
    },
  }
});

export const { setActiveOfferId } = mapsSlice.actions;

export const selectActiveOfferId = (state: RootState) => state.map.activeOfferId;

export default mapsSlice.reducer;
