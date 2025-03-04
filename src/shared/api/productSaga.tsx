import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchHomeProductsStart,
  fetchHomeProductsSuccess,
  fetchHomeProductsFailure,
  fetchCategoryProductsStart,
  fetchCategoryProductsSuccess,
  fetchCategoryProductsFailure,
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
 * Saga to handle the home products fetch API request.
 */
function* fetchHomeProductsApiDataSaga() {
  try {
    // Dispatch fetchHomeProductsStart action to indicate loading
    yield put(fetchHomeProductsStart());

    // Call the API to fetch home products
    const response: ProductsResponse = yield call(fetchProductsData);
    console.log('Saga response for home products: ', response);

    yield put(fetchHomeProductsSuccess(response));
  } catch (error: any) {
    // Handle API call failure
    const errorMessage = getTranslation(
      'errorMessage.fetchProductsRequestFailed',
    );
    yield put(fetchHomeProductsFailure(error?.message || errorMessage));
  }
}

/**
 * Saga to handle the fetch products by category API request.
 */
function* fetchProductsByCategorySaga(action: {type: string; payload: string}) {
  try {
    // Dispatch fetchCategoryProductsStart action to indicate loading
    yield put(fetchCategoryProductsStart());

    // Call the API to fetch products by category
    const response: ProductsResponse = yield call(
      fetchProductsByCategory,
      action.payload,
    );
    console.log('Saga response for category: ', response);

    yield put(fetchCategoryProductsSuccess(response));
  } catch (error: any) {
    // Handle API call failure
    const errorMessage = getTranslation(
      'errorMessage.fetchProductsRequestFailed',
    );
    yield put(fetchCategoryProductsFailure(error?.message || errorMessage));
  }
}

/**
 * Watcher saga to listen for product fetch API call action.
 */
function* productsSaga() {
  yield takeEvery(CALL_FETCH_PRODUCTS_API, fetchHomeProductsApiDataSaga);
  yield takeEvery(
    CALL_FETCH_PRODUCTS_BY_CATEGORY_API,
    fetchProductsByCategorySaga,
  );
}

export default productsSaga;
