import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useAppTheme} from '../theme/useAppTheme';
import LoginScreen from '../features/auth/login/screen/loginScreen';
import SignupScreen from 'src/features/auth/signup/screen/signupScreen';
import LoginPasswordScreen from 'src/features/auth/login/screen/loginPasswordScreen';
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 */
export type AuthParamList = {
  login: undefined;
  loginPassword: {username: string};
  signup: undefined;
  forgotPassword: undefined;
};

/**
 * This types allows TypeScript to know what navigation and routes are defined
 * for screen props.
 */
export type AuthScreenProps<T extends keyof AuthParamList> =
  NativeStackScreenProps<AuthParamList, T>;

const AuthStack = createNativeStackNavigator<AuthParamList>();

export const AuthNavigator = () => {
  const {colors} = useAppTheme(); // Get colors & fonts from theme

  return (
    <AuthStack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: true,
        headerTintColor: colors.tertiary,
        headerTitle: '',
        navigationBarColor: colors.background,
        headerShadowVisible: false,
      }}>
      <AuthStack.Screen
        name={'login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={'loginPassword'}
        component={LoginPasswordScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={'signup'}
        component={SignupScreen}
        options={{headerShown: true, headerTransparent: true}}
      />
    </AuthStack.Navigator>
  );
};
