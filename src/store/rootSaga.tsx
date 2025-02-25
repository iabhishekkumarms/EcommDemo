import {all, fork} from 'redux-saga/effects';
import loginSaga from 'src/features/auth/login/api/saga';

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
}
