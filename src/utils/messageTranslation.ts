import i18n from 'i18next';

type TranslationKeys =
  | 'common.appName'
  | 'category.fetchCategoriesRequestFailed'
  | 'common.unexpectedError'
  | 'errorMessage.fetchProductsRequestFailed'
  | 'errorMessage.loginRequestFailed';
// Add other keys as needed

export const getTranslation = (key: TranslationKeys) => {
  return i18n.t(key);
};
