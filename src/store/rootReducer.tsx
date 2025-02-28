import {combineReducers} from 'redux';
import loginReducer from 'src/features/auth/login/api/slice';
import categoryReducer from 'src/features/home/api/categorySlice';
import productsReducer from 'src/features/home/api/productSlice';
import cartReducer from 'src/features/cart/api/slice';

export default combineReducers({
  login: loginReducer,
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
});
