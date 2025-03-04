import {Image, View} from 'react-native';
import React from 'react';
import {useAppTheme} from 'src/theme/useAppTheme';
import {useTranslation} from 'react-i18next';
import {Button, Screen, Text} from 'src/components';
import {useAppDispatch, useAppSelector} from 'src/store/reduxHook';
import {
  resetLoginState,
  selectUserDetails,
} from '../../../auth/login/api/slice';
import {navigate, resetAndNavigate} from 'src/navigation';
import RowBackground from './component/rowBackground';
import makeStyles from './styles';
import {clearCart} from 'src/features/cart/api/slice';
import {clearAddress} from '../address/slice/addressSlice';
import reduxStorage from 'src/store/storage';
import {clearWishlist} from '../wishlist/slice/wishlistSlice';

const ProfileScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();

  const dispatch = useAppDispatch();
  const userDetails = useAppSelector(selectUserDetails);

  const renderProfileImage = () => {
    return (
      <Image
        style={styles.userImage}
        source={{
          uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        }}
      />
    );
  };

  const navigateToAddressScreen = async () => {
    navigate('address');
  };

  const navigateToWishlistScreen = async () => {
    navigate('wishlist');
  };

  const handleSignOut = async () => {
    // Clear Redux store
    dispatch(resetLoginState());
    dispatch(clearCart());
    dispatch(clearWishlist());
    dispatch(clearAddress());

    // Clear MMKV storage
    reduxStorage.removeItem('accessToken');

    // Navigate to login screen
    resetAndNavigate('Auth');
  };

  const userDetailsConatiner = () => {
    if (userDetails) {
      return (
        <View style={styles.userDetailConatiner}>
          <Text style={styles.userNameTxt}>
            {userDetails.firstName} {userDetails.lastName}
          </Text>
          <Text style={styles.userEmailTxt}>{userDetails.email}</Text>
        </View>
      );
    }
  };

  const renderButtons = () => {
    return (
      <>
        <RowBackground
          text={t('profile.address')}
          themeColors={colors}
          fonts={fonts}
          onPress={navigateToAddressScreen}
        />
        <RowBackground
          text={t('profile.wishlist')}
          themeColors={colors}
          fonts={fonts}
          onPress={navigateToWishlistScreen}
        />
        <Button
          textStyle={styles.signOutBtn}
          preset="link"
          btnText={t('profile.signout')}
          onPress={handleSignOut}
        />
      </>
    );
  };

  return (
    <Screen
      safeAreaEdges={['top', 'bottom', 'left', 'right']}
      preset="fixed"
      contentContainerStyle={styles.container}>
      {renderProfileImage()}
      {userDetailsConatiner()}
      {renderButtons()}
    </Screen>
  );
};

export default ProfileScreen;
