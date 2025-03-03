import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import makeStyles from './style';
import {useTranslation} from 'react-i18next';
import {useAppTheme} from 'src/theme/useAppTheme';
import {navigate} from 'src/navigation';
import {useAppSelector} from 'src/store/reduxHook';
import {
  selectCartItems,
  selectTotalCartPrice,
} from 'src/features/cart/api/slice';
import {useHeaderHeight} from '@react-navigation/elements';
import {Screen} from 'src/components';

const CheckoutScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();
  const headerSpace = useHeaderHeight();

  const carts = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalCartPrice); // Get total price

  const navigateToOrderPlacedScreen = async () => {
    navigate('orderPlaced');
  };

  const renderPlaceOrderButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={navigateToOrderPlacedScreen}>
          <Text style={styles.addButtonText}>${totalPrice.toFixed(2)}</Text>
          <Text style={styles.addButtonText}>{t('cart.placeOrder')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Screen
      safeAreaEdges={['top', 'bottom', 'left', 'right']}
      preset="fixed"
      contentContainerStyle={[
        styles.contentContainerStyle,
        {paddingTop: headerSpace},
      ]}>
      {renderPlaceOrderButton()}
    </Screen>
  );
};
export default CheckoutScreen;
