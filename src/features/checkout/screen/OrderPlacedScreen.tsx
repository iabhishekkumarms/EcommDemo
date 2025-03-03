import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {resetAndNavigate} from 'src/navigation';
import makeStyles from './style';
import {useTranslation} from 'react-i18next';
import {Button, Screen} from 'src/components';
import {useAppTheme} from 'src/theme/useAppTheme';

const OrderPlacedScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();

  const orderPlacedImage = require('src/assets/icons/orderPlaced.png');

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
