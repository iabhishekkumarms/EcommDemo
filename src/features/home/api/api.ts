import {api} from 'src/api/api';
import {Category, ProductsResponse} from './api.types';
import {endPoints} from './endPoints';
import {getTranslation} from 'src/utils/messageTranslation';

export const fetchCategoryData = async () => {
  try {
    const res = await api.get<Category[]>(endPoints.product.categories);
    console.log('Category data fetched successfully', res);
    return res; // Ensure we return the correct response format
  } catch (error: any) {
    const localErrorMessage = getTranslation('common.unexpectedError');
    // Extract error message from server response
    const errorMessage = error.message || localErrorMessage;
    throw new Error(errorMessage); // Ensure an error message string is thrown
  }
};

// For product
export const fetchProductsData = async () => {
  try {
    const res = await api.get<ProductsResponse>(endPoints.product.products);
    console.log('Products fetched successfully from API', res);
    return res; // Ensure we return the correct response format
  } catch (error: any) {
    const localErrorMessage = getTranslation('common.unexpectedError');
    // Extract error message from server response
    const errorMessage = error.message || localErrorMessage;
    throw new Error(errorMessage); // Ensure an error message string is thrown
  }
};
