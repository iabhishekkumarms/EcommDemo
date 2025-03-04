import {
  CALL_FETCH_CATEGORIES_API,
  CALL_FETCH_PRODUCTS_API,
  CALL_FETCH_PRODUCTS_BY_CATEGORY_API,
} from './constants';

export const callFetchCategoriesApi = () => {
  return {
    type: CALL_FETCH_CATEGORIES_API,
  };
};

export const callFetchProductsApi = () => {
  return {
    type: CALL_FETCH_PRODUCTS_API,
  };
};

export const callFetchProductsByCategoryApi = (categorySlug: string) => {
  return {
    type: CALL_FETCH_PRODUCTS_BY_CATEGORY_API,
    payload: categorySlug,
  };
};
