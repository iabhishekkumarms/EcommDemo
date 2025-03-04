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
import CheckoutScreen from 'src/features/checkout/screen/CheckoutScreen';
import OrderPlacedScreen from 'src/features/checkout/screen/OrderPlacedScreen';
import AddressScreen from 'src/features/profile/screen/address/AddressScreen';
import WishlistScreen from 'src/features/profile/screen/wishlist/WIshlistScreen';
import {Category} from 'src/shared/api/api.types';
import CategoryListScreen from 'src/features/category/screen/CategoryListScreen';
import ProductListScreen from 'src/features/product/screen/ProductListScreen';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 */
export type PrimaryParamList = {
  homeNav: undefined;
  productDetails: {product: Product};
  cart: undefined;
  checkout: undefined;
  orderPlaced: undefined;
  address: undefined;
  wishlist: undefined;
  categoryList: {category: Category[]};
  productList: {slug: string};
};

/**
 * This types allows TypeScript to know what navigation and routes are defined
 * for screen props.
 */
export type PrimaryScreenProps<T extends keyof PrimaryParamList> =
  NativeStackScreenProps<PrimaryParamList, T>;

const PrimaryStack = createNativeStackNavigator<PrimaryParamList>();

const BookmarkButtonComponent = ({product}: {product: Product}) => (
  <BookmarkButton product={product} height={vs(25)} width={vs(25)} />
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
        options={({route}) => ({
          headerShown: true,
          headerTitle: '', // Hide the title in the header
          headerTransparent: true,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <BookmarkButtonComponent product={route.params.product} />
          ),
        })}
      />
      <PrimaryStack.Screen
        name={'cart'} // Route name
        component={CartScreen}
        options={{
          headerShown: true,
          headerTitle: 'Cart', // Hide the title  in the header
          headerTransparent: true,
        }}
      />
      <PrimaryStack.Screen
        name={'checkout'} // Route name
        component={CheckoutScreen}
        options={{
          headerShown: true,
          headerTitle: 'Checkout', // Hide the title  in the header
          headerTransparent: true,
        }}
      />
      <PrimaryStack.Screen
        name={'orderPlaced'} // Route name
        component={OrderPlacedScreen}
        options={{
          headerShown: false,
        }}
      />
      <PrimaryStack.Screen
        name={'address'} // Route name
        component={AddressScreen}
        options={{
          headerShown: true,
          headerTitle: 'Address', // Hide the title  in the header
          headerTransparent: true,
        }}
      />
      <PrimaryStack.Screen
        name={'wishlist'} // Route name
        component={WishlistScreen}
        options={{
          headerShown: true,
          headerTitle: 'My Favourites', // Hide the title  in the header
          headerTransparent: true,
        }}
      />
      <PrimaryStack.Screen
        name={'categoryList'} // Route name
        component={CategoryListScreen}
        options={{
          headerShown: true,
          headerTitle: 'Categories', // Hide the title  in the header
          headerTransparent: true,
        }}
      />
      <PrimaryStack.Screen
        name={'productList'} // Route name
        component={ProductListScreen}
        options={{
          headerShown: true,
          headerTitle: 'Products', // Hide the title  in the header
          headerTransparent: true,
        }}
      />
    </PrimaryStack.Navigator>
  );
};
