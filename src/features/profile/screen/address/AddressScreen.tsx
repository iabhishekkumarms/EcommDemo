import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppTheme} from 'src/theme/useAppTheme';
import makeStyles from './style';
import {useTranslation} from 'react-i18next';
import {Screen} from 'src/components';
import {useHeaderHeight} from '@react-navigation/elements';

const AddressScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();

  const headerSpace = useHeaderHeight();

  return (
    <Screen
      safeAreaEdges={['top', 'bottom', 'left', 'right']}
      preset="fixed"
      contentContainerStyle={[
        styles.contentContainerStyle,
        {paddingTop: headerSpace},
      ]}></Screen>
  );
};

export default AddressScreen;
