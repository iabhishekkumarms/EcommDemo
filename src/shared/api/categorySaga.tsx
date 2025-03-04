import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categorySlice';
import {CALL_FETCH_CATEGORIES_API} from './constants';
import {Category} from './api.types';
import {fetchCategoryData} from './api';
import {getTranslation} from 'src/utils/messageTranslation';

/**
 * Saga to handle the category fetch API request.
 */
function* fetchCategoriesApiDataSaga() {
  try {
    // Dispatch fetchCategoriesStart action to indicate loading
    yield put(fetchCategoriesStart());

    // Call the API to fetch categories
    const response: Category[] = yield call(fetchCategoryData);
    console.log('Saga response: ', response);

    // Dispatch success action with categories data if fetch is successful
    yield put(fetchCategoriesSuccess(response));
    console.log('Saga response 1: ', response);
  } catch (error: any) {
    // Handle API call failure
    const errorMessage = getTranslation(
      'category.fetchCategoriesRequestFailed',
    );
    yield put(fetchCategoriesFailure(error?.message || errorMessage));
  }
}

/**
 * Watcher saga to listen for category fetch API call action.
 */
function* categoriesSaga() {
  yield takeEvery(CALL_FETCH_CATEGORIES_API, fetchCategoriesApiDataSaga);
}

export default categoriesSaga;
