import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Screen, Text} from 'src/components';
import {useAppTheme} from 'src/theme/useAppTheme';
import makeStyles from './style';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from 'src/store/reduxHook';
import {selectCartItems, selectTotalCartPrice} from '../api/slice';
import OrderItem from '../components/OrderItem';
import SvgEmptyCart from 'src/assets/svgs/EmptyCart';
import {vs} from 'src/utils';
import {useHeaderHeight} from '@react-navigation/elements';
import {navigate} from 'src/navigation';

const CartScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();

  const carts = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalCartPrice); // Get total price

  const onPressExplore = async () => {};

  const headerSpace = useHeaderHeight();

  const navigateToCheckoutScreen = async () => {
    navigate('checkout');
  };

  const renderItem = ({item}: any) => {
    // Render each cart item
    return <OrderItem item={item} themeColors={colors} fonts={fonts} />;
  };

  const renderCartsItems = () => {
    if (carts.length > 0) {
      return (
        <View>
          <FlatList
            data={carts}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />

          <View style={styles.totalPriceView}>
            <Text style={styles.totalText}>Total Price</Text>
            <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.emptyConatiner}>
          <SvgEmptyCart height={vs(64)} width={vs(64)} />
          <Text style={styles.emptyText}>{t('cart.cartIsEmpty')}</Text>
          <TouchableOpacity>
            <Button
              btnText={t('cart.exploreCategory')}
              onPress={onPressExplore}
              style={styles.exploreBtnStyle}
              textStyle={styles.exploreBtnStyle}
            />
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Screen
        safeAreaEdges={['top', 'bottom', 'left', 'right']}
        preset="fixed"
        contentContainerStyle={[
          styles.contentContainerStyle,
          {paddingTop: headerSpace},
        ]}>
        {renderCartsItems()}
      </Screen>
      <Button
        preset="default"
        btnText={t('cart.chekout')}
        onPress={navigateToCheckoutScreen}
      />
      ;
    </View>
  );
};
export default CartScreen;
