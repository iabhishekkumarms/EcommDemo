import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {vs} from 'src/utils';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';

type Props = {
  stars: number;
  colors: ThemeColors;
  fonts: ThemeFonts;
};

const Star = ({stars, colors, fonts}: Props) => {
  const styles = makeStyles(colors, fonts);
  const ratingStar = Array.from({length: 5}, (elem, index) => {
    let number = index + 0.5;
    return (
      <View key={index}>
        {stars >= index + 1 ? (
          <FontAwesome name="star" style={styles.icon} />
        ) : stars >= number ? (
          <FontAwesome name="star-half-full" style={styles.icon} />
        ) : (
          <AntDesign name="staro" style={styles.icon} />
        )}
      </View>
    );
  });

  return <View style={styles.iconStyle}>{ratingStar}</View>;
};

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    iconStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: vs(4),
    },
    icon: {
      fontSize: 20,
      color: colors.primary,
    },
  });

export default Star;
