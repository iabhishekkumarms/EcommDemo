import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product, ProductsResponse} from 'src/shared/models/product';

interface HomeProductsState {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  loading: boolean;
  error: string | null;
}

const initialState: HomeProductsState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 30,
  loading: false,
  error: null,
};

const homeProductsSlice = createSlice({
  name: 'homeProducts',
  initialState,
  reducers: {
    fetchHomeProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHomeProductsSuccess(state, action: PayloadAction<ProductsResponse>) {
      state.loading = false;
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.skip = action.payload.skip;
      state.limit = action.payload.limit;
    },
    fetchHomeProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchHomeProductsStart,
  fetchHomeProductsSuccess,
  fetchHomeProductsFailure,
} = homeProductsSlice.actions;

export default homeProductsSlice.reducer;
