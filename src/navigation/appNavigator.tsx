import React, {FC} from 'react';
import {useAppTheme} from '../theme/useAppTheme';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {AuthNavigator, navigationRef} from 'navigation';

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator: FC = ({ref: _ref, ...props}: NavigationProps) => {
  const appTheme = useAppTheme();

  /** Hide boot splash screen once navigation is ready */
  const hideBootSplash = () => {
    BootSplash.hide({fade: true});
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={appTheme}
      onReady={hideBootSplash}
      {...props}>
      <AuthNavigator />
    </NavigationContainer>
  );
};
