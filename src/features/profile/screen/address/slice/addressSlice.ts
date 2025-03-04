import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'src/store/store';

interface AddressState {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

const initialState: AddressState = {
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    saveAddress(state, action: PayloadAction<AddressState>) {
      return action.payload;
    },
    clearAddress(state) {
      return initialState;
    },
  },
});

export const {saveAddress, clearAddress} = addressSlice.actions;

export const selectAddress = (state: RootState) => state.address;

export default addressSlice.reducer;
