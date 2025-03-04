import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductsByCategoryStart,
  fetchProductsByCategorySuccess,
  fetchProductsByCategoryFailure,
} from './productSlice';
import {
  CALL_FETCH_PRODUCTS_API,
  CALL_FETCH_PRODUCTS_BY_CATEGORY_API,
} from './constants';
import {fetchProductsData} from './api';
import {getTranslation} from 'src/utils/messageTranslation';
import {ProductsResponse} from 'src/shared/models/product';
import {fetchProductsByCategory} from 'src/features/category/api/api';

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
 * Saga to handle the fetch products by category API request.
 */
function* fetchProductsByCategorySaga(action: {type: string; payload: string}) {
  try {
    // Dispatch fetchProductsByCategoryStart action to indicate loading
    yield put(fetchProductsByCategoryStart());

    // Call the API to fetch products by category
    const response: ProductsResponse = yield call(
      fetchProductsByCategory,
      action.payload,
    );
    console.log('Saga response for category: ', response);

    yield put(fetchProductsByCategorySuccess(response));
  } catch (error: any) {
    // Handle API call failure
    const errorMessage = getTranslation(
      'errorMessage.fetchProductsRequestFailed',
    );
    yield put(fetchProductsByCategoryFailure(error?.message || errorMessage));
  }
}

/**
 * Watcher saga to listen for product fetch API call action.
 */
function* productsSaga() {
  yield takeEvery(CALL_FETCH_PRODUCTS_API, fetchProductsApiDataSaga);
  yield takeEvery(
    CALL_FETCH_PRODUCTS_BY_CATEGORY_API,
    fetchProductsByCategorySaga,
  );
}

export default productsSaga;
