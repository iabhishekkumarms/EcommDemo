import {useColorScheme} from 'react-native';
import {LightTheme} from './lightTheme';
import {DarkTheme} from './darkTheme';
import {AppTheme} from './theme';

/**
 * Custom Hook to Get Theme Based on System Preference
 */
export const useAppTheme = (): AppTheme => {
  const scheme = useColorScheme(); // 'light' or 'dark'
  return scheme === 'dark' ? DarkTheme : LightTheme;
};
