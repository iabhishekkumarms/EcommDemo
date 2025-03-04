import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product, ProductsResponse} from 'src/shared/models/product';

interface CategoryProductsState {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  loading: boolean;
  error: string | null;
}

const initialState: CategoryProductsState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 30,
  loading: false,
  error: null,
};

const categoryProductsSlice = createSlice({
  name: 'categoryProducts',
  initialState,
  reducers: {
    fetchCategoryProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCategoryProductsSuccess(
      state,
      action: PayloadAction<ProductsResponse>,
    ) {
      state.loading = false;
      state.products = action.payload.products;
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
  fetchCategoryProductsStart,
  fetchCategoryProductsSuccess,
  fetchCategoryProductsFailure,
} = categoryProductsSlice.actions;

export default categoryProductsSlice.reducer;
