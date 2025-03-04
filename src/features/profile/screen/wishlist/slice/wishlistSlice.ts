import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from 'src/shared/models/product';
import {RootState} from 'src/store/store';

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setWishlist(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const {addToWishlist, removeFromWishlist, setWishlist, clearWishlist} =
  wishlistSlice.actions;

export const selectWishlist = (state: RootState) => state.wishlist.items;

export default wishlistSlice.reducer;
