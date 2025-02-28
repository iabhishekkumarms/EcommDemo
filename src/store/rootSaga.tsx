import {all, fork} from 'redux-saga/effects';
import loginSaga from 'src/features/auth/login/api/saga';
import categoriesSaga from 'src/features/home/api/categorySaga';
import productsSaga from 'src/features/home/api/productSaga';

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(categoriesSaga), fork(productsSaga)]);
}
