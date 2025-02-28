import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import SvgIcBookmark from 'src/assets/svgs/IcBookmark';
import {vs} from 'src/utils';

type Props = {
  height?: number;
  width?: number;
  style?: ViewStyle;
};

const BookmarkButton = ({height = vs(25), width = vs(25), style}: Props) => {
  const styles = makeStyles();
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => {}}>
        <SvgIcBookmark height={height} width={width} />
      </TouchableOpacity>
    </View>
  );
};

export default BookmarkButton;

const makeStyles = () =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
