import {call, put, takeEvery} from 'redux-saga/effects';
import {loginFailure, loginRequest, loginSuccess} from './slice';
import {fetchLoginData} from './api';
import {CALL_LOGIN_API} from './constants';
import {LoginReq, LoginRes} from './api.types';
import {getTranslation} from 'src/utils/messageTranslation';

/**
 * Saga to handle the login API request.
 * @param action - The dispatched action containing email and password.
 */
function* fetchLoginApiDataSaga(action: {
  type: string;
  payload: LoginReq;
}): any {
  try {
    // Dispatch loginRequest action to indicate loading
    yield put(loginRequest());

    // Call the API to login
    const data: LoginRes = yield call(fetchLoginData, action.payload); // email and password passed here
    console.log('saga ressponse : ', data);
    if (data) {
      // Dispatch success action with user info if login is successful
      yield put(loginSuccess(data));
      console.log('saga ressponse 1: ', data);
    } else {
      // Dispatch failure if login fails with an error message
      yield put(
        loginFailure(data || getTranslation('errorMessage.loginRequestFailed')),
      );
    }
  } catch (error: any) {
    // Handle API call failure
    yield put(
      loginFailure(
        error?.message || getTranslation('errorMessage.loginRequestFailed'),
      ),
    );
  }
}

/**
 * Watcher saga to listen for login API call action.
 */
function* loginSaga() {
  yield takeEvery(CALL_LOGIN_API, fetchLoginApiDataSaga);
}

export default loginSaga;
