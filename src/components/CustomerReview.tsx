import React from 'react';
import {View, Text, StyleSheet, TextStyle} from 'react-native';
import Star from './Star';
import {vs} from 'src/utils';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';

type Props = {
  reviewerName: string;
  comment: string;
  date: string;
  rating: number;
  colors: ThemeColors;
  fonts: ThemeFonts;
};

const CustomerReview = ({
  reviewerName,
  comment,
  date,
  rating,
  colors,
  fonts,
}: Props) => {
  const styles = makeStyles(colors, fonts);

  return (
    <View style={styles.container}>
      <View style={styles.ratingConatiner}>
        <Text style={styles.reviewerName}>{reviewerName}</Text>
        <Star stars={rating} colors={colors} fonts={fonts} />
      </View>
      <Text style={styles.comment}>{comment}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const makeStyles = (colors: ThemeColors, _fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      padding: vs(8),
      borderBottomWidth: 1,
      borderBottomColor: colors.text,
    },
    ratingConatiner: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    reviewerName: {
      color: colors.text,
      fontSize: vs(16),
      fontWeight: 'bold',
    } as TextStyle,
    date: {
      color: colors.text,
      fontSize: vs(14),
    } as TextStyle,
    comment: {
      color: colors.text,
      fontSize: vs(14),
      marginTop: vs(8),
    } as TextStyle,
  });

export default CustomerReview;
