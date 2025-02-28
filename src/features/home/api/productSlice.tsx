import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product, ProductsResponse} from './api.types';

interface ProductsState {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 30,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<ProductsResponse>) {
      state.loading = false;
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.skip = action.payload.skip;
      state.limit = action.payload.limit;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchProductsStart, fetchProductsSuccess, fetchProductsFailure} =
  productsSlice.actions;

export default productsSlice.reducer;
