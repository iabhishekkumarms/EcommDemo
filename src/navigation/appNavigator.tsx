import React, {FC, useEffect, useState} from 'react';
import {useAppTheme} from '../theme/useAppTheme';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {AuthNavigator, navigationRef, PrimaryNavigator} from 'navigation';
import {useToastConfig} from 'src/utils/toastConfig';
import Toast from 'react-native-toast-message';
import {vs} from 'src/utils';
import {spacing} from 'src/theme/spacing';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from 'src/store/reduxHook';
import {selectAccessToken} from 'src/features/auth/login/api/slice';

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator: FC = ({ref: _ref, ...props}: NavigationProps) => {
  const appTheme = useAppTheme();
  const insets = useSafeAreaInsets();

  const toastConfig = useToastConfig(appTheme.colors, appTheme.fonts);

  const token = useAppSelector(selectAccessToken); // Get token from Redux store
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  /** Hide boot splash screen once navigation is ready */
  const hideBootSplash = () => {
    BootSplash.hide({fade: true});
  };

  useEffect(() => {
    if (token) {
      setInitialRoute('Primary');
    } else {
      setInitialRoute('Auth');
    }
  }, [token]);

  const Stack = createNativeStackNavigator();

  if (!initialRoute) {
    return null; // Render nothing until initial route is determined
  }

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        theme={appTheme}
        onReady={hideBootSplash}
        {...props}>
        <Stack.Navigator initialRouteName={initialRoute}>
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Primary"
            component={PrimaryNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        {/* <AuthNavigator />
        <PrimaryNavigator/> */}
      </NavigationContainer>
      <Toast config={toastConfig} topOffset={vs(spacing.xl) + insets.top} />
    </>
  );
};
