import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'src/store/reduxHook';
import {
  addItem,
  removeItem,
  selectItemCountById,
} from 'src/features/cart/api/slice';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {vs} from 'src/utils';
import SvgIcAdd from 'src/assets/svgs/IcAdd';
import {Text} from './Text';
import SvgIcMinus from 'src/assets/svgs/IcMinus';

const ItemeIncrementButton: FC<{
  item: any;
  colors: ThemeColors;
  fonts: ThemeFonts;
  onQuantityChange?: (quantity: number) => void; // Make onQuantityChange optional
}> = ({item, colors, fonts, onQuantityChange}) => {
  const initialCount = useAppSelector(state =>
    selectItemCountById(item.id)(state),
  );
  const [count, setCount] = useState(initialCount);
  const styles = makeStyles(colors, fonts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(count);
    }
  }, [count, onQuantityChange]);

  const handleIncrement = () => {
    dispatch(addItem(item));
    // setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      dispatch(removeItem(item));
      //   setCount(count - 1);
    } else {
      dispatch(removeItem(item)); // This will remove the item if count becomes 0
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
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

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
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
    counterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: vs(4),
      paddingVertical: vs(4),
      justifyContent: 'space-between',
    },
    text: {
      color: colors.text,
    },
  });

export default ItemeIncrementButton;
