import {BackHandler, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {resetAndNavigate} from 'src/navigation';
import makeStyles from './style';
import {useTranslation} from 'react-i18next';
import {Button, Screen} from 'src/components';
import {useAppTheme} from 'src/theme/useAppTheme';
import {useAppDispatch} from 'src/store/reduxHook';
import {clearCart} from 'src/features/cart/api/slice';

const OrderPlacedScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const orderPlacedImage = require('src/assets/icons/orderPlaced.png');

  useEffect(() => {
    // Clear the cart when the component mounts
    dispatch(clearCart());

    // Handle hardware back button press
    const backAction = () => {
      resetAndNavigate('homeNav');
      return true; // Prevent default behavior (going back to the previous screen)
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove(); // Clean up the event listener
  }, [dispatch]);

  const navigateToHome = async () => {
    resetAndNavigate('homeNav');
  };

  const renderOrderPlacedImage = () => {
    return (
      <Image
        source={orderPlacedImage}
        style={styles.orderPlacedImage}
        resizeMode="contain"
      />
    );
  };

  const renderOrderPlacedText = () => {
    return (
      <View style={styles.orderPlacedTextConatiner}>
        <Text style={styles.orderPlacedText}>
          {t('order.orderPlacedSuccess')}
        </Text>
        <Text style={styles.orderPlacedEmailText}>
          {t('order.orderPlacedEmailText')}
        </Text>
        <View style={styles.orderPlacedButtonContainer}>
          {renderOrderPlacedButton()}
        </View>
      </View>
    );
  };

  const renderOrderPlacedButton = () => {
    return (
      <Button
        textStyle={{color: colors.btnTextPrimary}}
        preset="default"
        btnText={t('order.navigateToHome')}
        onPress={navigateToHome}
      />
    );
  };

  return (
    <Screen
      safeAreaEdges={['top', 'bottom', 'left', 'right']}
      preset="auto"
      contentContainerStyle={styles.oderPlacedConatiner}>
      {renderOrderPlacedImage()}
      {renderOrderPlacedText()}
    </Screen>
  );
};

export default OrderPlacedScreen;
