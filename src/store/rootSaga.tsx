import {all, fork} from 'redux-saga/effects';
import loginSaga from 'src/features/auth/login/api/saga';
import categoriesSaga from 'src/shared/api/categorySaga';
import productsSaga from 'src/shared/api/productSaga';

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(categoriesSaga), fork(productsSaga)]);
}
