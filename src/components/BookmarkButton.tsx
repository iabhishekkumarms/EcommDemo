import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import SvgIcBookmark from 'src/assets/svgs/IcBookmark';
import {vs} from 'src/utils';
import {Product} from 'src/shared/models/product';
import {useAppDispatch, useAppSelector} from 'src/store/reduxHook';
import {
  selectWishlist,
  addToWishlist,
  removeFromWishlist,
} from 'src/features/profile/screen/wishlist/slice/wishlistSlice';

type Props = {
  product: Product;
  height?: number;
  width?: number;
  style?: ViewStyle;
};

const BookmarkButton = ({
  product,
  height = vs(25),
  width = vs(25),
  style,
}: Props) => {
  const styles = makeStyles();
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(selectWishlist);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    setIsBookmarked(isInWishlist);
  }, [wishlist, product.id]);

  const handlePress = () => {
    if (isBookmarked) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handlePress}>
        <SvgIcBookmark
          height={height}
          width={width}
          fill={isBookmarked ? 'red' : 'gray'}
        />
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
