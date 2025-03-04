import {combineReducers} from 'redux';
import loginReducer from 'src/features/auth/login/api/slice';
import categoryReducer from 'src/shared/api/categorySlice';
import productsReducer from 'src/shared/api/productSlice';
import cartReducer from 'src/features/cart/api/slice';
import wishlistReducer from 'src/features/profile/screen/wishlist/slice/wishlistSlice';
import addressReducer from 'src/features/profile/screen/address/slice/addressSlice';

// Combine all reducers
export default combineReducers({
  login: loginReducer,
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  address: addressReducer,
});
