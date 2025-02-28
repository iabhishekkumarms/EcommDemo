import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './productSlice';
import {CALL_FETCH_PRODUCTS_API} from './constants';
import {ProductsResponse} from './api.types';
import {fetchProductsData} from './api';
import {getTranslation} from 'src/utils/messageTranslation';

/**
 * Saga to handle the product fetch API request.
 */
function* fetchProductsApiDataSaga() {
  try {
    // Dispatch fetchProductsStart action to indicate loading
    yield put(fetchProductsStart());

    // Call the API to fetch products
    const response: ProductsResponse = yield call(fetchProductsData);
    console.log('Saga response: ', response);

    yield put(fetchProductsSuccess(response));
  } catch (error: any) {
    // Handle API call failure
    const errorMessage = getTranslation(
      'errorMessage.fetchProductsRequestFailed',
    );
    yield put(fetchProductsFailure(error?.message || errorMessage));
  }
}

/**
 * Watcher saga to listen for product fetch API call action.
 */
function* productsSaga() {
  yield takeEvery(CALL_FETCH_PRODUCTS_API, fetchProductsApiDataSaga);
}

export default productsSaga;
