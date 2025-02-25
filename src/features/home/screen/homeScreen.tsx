import React from 'react';
import {useAppTheme} from 'src/theme/useAppTheme';
import makeStyles from './styles';
import {useTranslation} from 'react-i18next';
import {Screen, Text} from 'src/components';

export const HomeScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();

  return (
    <Screen
      safeAreaEdges={['left', 'right']}
      preset="auto"
      contentContainerStyle={styles.contentContainerStyle}>
      <Text>Home</Text>
    </Screen>
  );
};

export default HomeScreen;
