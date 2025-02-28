import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useAppTheme} from '../theme/useAppTheme';
import makeCommanStyles from '../components/styles';
import {TabNavigator} from './tabNavigator';
import ProductDetailsScreen from 'src/features/product/screen/ProductDetailsScreen';
import {Product} from 'src/shared/models/product';
import BookmarkButton from 'src/components/BookmarkButton';
import {vs} from 'src/utils';
import CartScreen from 'src/features/cart/screen/CartScreen';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 */
export type PrimaryParamList = {
  homeNav: undefined;
  productDetails: {product: Product};
  cart: undefined;
};

/**
 * This types allows TypeScript to know what navigation and routes are defined
 * for screen props.
 */
export type PrimaryScreenProps<T extends keyof PrimaryParamList> =
  NativeStackScreenProps<PrimaryParamList, T>;

const PrimaryStack = createNativeStackNavigator<PrimaryParamList>();

const BookmarkButtonComponent = () => (
  <BookmarkButton height={vs(25)} width={vs(25)} />
);

export const PrimaryNavigator = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const commonStyles = makeCommanStyles(colors, fonts);

  return (
    <PrimaryStack.Navigator
      initialRouteName="homeNav"
      screenOptions={{
        navigationBarColor: colors.background,
        headerTitleStyle: commonStyles.headerTitle,
        headerTintColor: colors.tertiary,
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: commonStyles.headerBackground,
      }}>
      <PrimaryStack.Screen name={'homeNav'} component={TabNavigator} />
      <PrimaryStack.Screen
        name={'productDetails'} // Route name
        component={ProductDetailsScreen}
        options={{
          headerShown: true,
          headerTitle: '', // Hide the title  in the header
          headerTransparent: true,
          headerRight: BookmarkButtonComponent, // Add the bookmark button to the header
        }}
      />
      <PrimaryStack.Screen
        name={'cart'} // Route name
        component={CartScreen}
      />
    </PrimaryStack.Navigator>
  );
};
