import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './languages/en';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
  en: {
    translation: en,
  },
};

export const ResourcesType = typeof resources;

/**
 * How to use translations strings:
 * import { useTranslation } from 'react-i18next';
 * const { t, i18n } = useTranslation();
 * <Text>{t('login.title')}</Text>
 *
 * How to change language dynamically:
 * i18n.changeLanguage('fr');
 */
i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
export default i18n;
