import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product, ProductsResponse} from 'src/shared/models/product';
import {RootState} from 'src/store/store';

interface ProductsState {
  homeProducts: Product[];
  categoryProducts: Product[];
  total: number;
  skip: number;
  limit: number;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  homeProducts: [],
  categoryProducts: [],
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
    fetchHomeProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHomeProductsSuccess(state, action: PayloadAction<ProductsResponse>) {
      state.loading = false;
      state.homeProducts = action.payload.products;
      state.total = action.payload.total;
      state.skip = action.payload.skip;
      state.limit = action.payload.limit;
    },
    fetchHomeProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchCategoryProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCategoryProductsSuccess(
      state,
      action: PayloadAction<ProductsResponse>,
    ) {
      state.loading = false;
      state.categoryProducts = action.payload.products;
      state.total = action.payload.total;
      state.skip = action.payload.skip;
      state.limit = action.payload.limit;
    },
    fetchCategoryProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchHomeProductsStart,
  fetchHomeProductsSuccess,
  fetchHomeProductsFailure,
  fetchCategoryProductsStart,
  fetchCategoryProductsSuccess,
  fetchCategoryProductsFailure,
} = productsSlice.actions;

export const selectHomeProducts = (state: RootState) =>
  state.products.homeProducts;
export const selectCategoryProducts = (state: RootState) =>
  state.products.categoryProducts;
export const selectProductsLoading = (state: RootState) =>
  state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;

export default productsSlice.reducer;
