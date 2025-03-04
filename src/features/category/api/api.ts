import {endPoints} from './endpoint';
import {getTranslation} from 'src/utils/messageTranslation';
import {ProductsResponse} from 'src/shared/models/product';
import {api} from 'src/api/api';

// Fetch products by category
export const fetchProductsByCategory = async (categorySlug: string) => {
  try {
    const response = await api.get<ProductsResponse>(
      endPoints.product.productUsingCategory(categorySlug),
    );
    console.log(
      `Products fetched successfully for category ${categorySlug}`,
      response,
    );
    return response;
  } catch (error: any) {
    const localErrorMessage = getTranslation('common.unexpectedError');
    // Extract error message from server response
    const errorMessage = error.message || localErrorMessage;
    console.error(
      `Error fetching products by category ${categorySlug}:`,
      errorMessage,
    );
    throw new Error(errorMessage); // Ensure an error message string is thrown
  }
};
