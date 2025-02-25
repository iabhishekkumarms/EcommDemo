import {combineReducers} from 'redux';
import loginReducer from 'src/features/auth/login/api/slice';

export default combineReducers({
  login: loginReducer,
});
