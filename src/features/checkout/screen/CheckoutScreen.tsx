import {Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import makeStyles from './style';
import {useTranslation} from 'react-i18next';
import {useAppTheme} from 'src/theme/useAppTheme';
import {navigate} from 'src/navigation';
import {useAppSelector} from 'src/store/reduxHook';
import {selectTotalCartPrice} from 'src/features/cart/api/slice';
import {useHeaderHeight} from '@react-navigation/elements';
import {Screen} from 'src/components';
import ShippingAddress from 'src/components/ShippingAddress';
import {selectAddress} from 'src/features/profile/screen/address/slice/addressSlice';
import {showErrorToast, showInfoToast} from 'src/utils/toast';

const CheckoutScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();
  const headerSpace = useHeaderHeight();

  const totalPrice = useAppSelector(selectTotalCartPrice); // Get total price
  const address = useAppSelector(selectAddress); // Get address from Redux store

  const showInfoMessage = useMemo(() => t('checkout.codMeassage'), [t]);

  const navigateToOrderPlacedScreen = async () => {
    if (
      !address.streetAddress ||
      !address.city ||
      !address.state ||
      !address.zipCode
    ) {
      showErrorToast({message: t('checkout.showAddressMessage')});
      return;
    }
    navigate('orderPlaced');
  };

  const navigateToAddressScreen = async () => {
    navigate('address');
  };

  const renderButtons = () => {
    return (
      <>
        <ShippingAddress
          title={t('checkout.shipping')}
          text={`${address.streetAddress} ${address.city} ${address.state} ${address.zipCode}`}
          themeColors={colors}
          fonts={fonts}
          onPress={navigateToAddressScreen}
        />
        <ShippingAddress
          title={t('checkout.paymentMethod')}
          text={t('checkout.cod')}
          themeColors={colors}
          fonts={fonts}
          onPress={() => showInfoToast({message: showInfoMessage})}
        />
      </>
    );
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
      contentContainerStyle={[styles.container, {paddingTop: headerSpace}]}>
      {renderButtons()}
      {renderPlaceOrderButton()}
    </Screen>
  );
};
export default CheckoutScreen;
