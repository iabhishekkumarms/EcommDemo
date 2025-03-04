import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useAppSelector} from 'src/store/reduxHook';
import {selectItemCountById} from 'src/features/cart/api/slice';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {vs} from 'src/utils';
import SvgIcAdd from 'src/assets/svgs/IcAdd';
import {Text} from './Text';
import SvgIcMinus from 'src/assets/svgs/IcMinus';

// Define the props for the AddItemToCart component
interface AddItemToCartProps {
  item: any;
  colors: ThemeColors;
  fonts: ThemeFonts;
  onQuantityChange: (quantity: number) => void;
}

// AddItemToCart component to handle adding and removing items from the cart
const AddItemToCart: FC<AddItemToCartProps> = ({
  item,
  colors,
  fonts,
  onQuantityChange,
}) => {
  // Get the initial count of the item from the Redux store
  const initialCount = useAppSelector(state =>
    selectItemCountById(item.id)(state),
  );
  const [count, setCount] = useState(initialCount); // State to keep track of the item count
  const styles = makeStyles(colors, fonts); // Generate styles based on theme colors and fonts

  // Update the count state when the initial count changes
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  // Call the onQuantityChange callback whenever the count changes
  useEffect(() => {
    onQuantityChange(count);
  }, [count, onQuantityChange]);

  // Handle incrementing the item count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Handle decrementing the item count
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterConatiner}>
        <TouchableOpacity onPress={handleIncrement}>
          <SvgIcAdd height={vs(30)} width={vs(30)} />
        </TouchableOpacity>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity onPress={handleDecrement}>
          <SvgIcMinus height={vs(30)} width={vs(30)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Generate styles based on theme colors and fonts
const makeStyles = (colors: ThemeColors, _fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '50%',
    },
    add: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: vs(4),
      paddingVertical: vs(4),
    },
    addText: {
      color: colors.text,
    },
    counterConatiner: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 4,
      paddingVertical: 4,
      justifyContent: 'space-between',
    },
    text: {
      color: colors.text,
    },
  });

export default AddItemToCart;
