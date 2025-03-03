import {Image, View} from 'react-native';
import React from 'react';
import {useAppTheme} from 'src/theme/useAppTheme';
import {useTranslation} from 'react-i18next';
import {Screen, Text} from 'src/components';
import {useAppSelector} from 'src/store/reduxHook';
import {selectUserDetails} from '../../../auth/login/api/slice';
import {navigate} from 'src/navigation';
import RowBackground from '../../../checkout/components/rowBackground';
import makeStyles from './styles';

const ProfileScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();

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
          text="Address"
          themeColors={colors}
          fonts={fonts}
          onPress={navigateToAddressScreen}
        />
        <RowBackground
          text="Wishlist"
          themeColors={colors}
          fonts={fonts}
          onPress={navigateToWishlistScreen}
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
