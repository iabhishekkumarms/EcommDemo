import React, {FC, useMemo} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useAppDispatch} from 'src/store/reduxHook';
import {addItemWithQuantity} from 'src/features/cart/api/slice';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {s, vs} from 'src/utils';
import {Text} from './Text';
import {spacing} from 'src/theme/spacing';
import {showSuccessToast} from 'src/utils/toast';
import {TFunction} from 'i18next';

type Props = {
  item: any;
  quantity: number;
  colors: ThemeColors;
  fonts: ThemeFonts;
  t: TFunction;
};

const AddToBagButton: FC<Props> = ({item, quantity, colors, fonts, t}) => {
  const dispatch = useAppDispatch();
  const styles = makeStyles(colors, fonts);

  // Memoize translation strings
  const addToCartSuccessMessage = useMemo(
    () => t('product.addToCartSuccessMessage'),
    [t],
  );

  const handleAddToBag = () => {
    dispatch(addItemWithQuantity({item, quantity: quantity}));
    showSuccessToast({message: addToCartSuccessMessage});
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddToBag}>
        <Text style={styles.addButtonText}>
          ${(item.price * quantity).toFixed(2)}
        </Text>
        <Text style={styles.addButtonText}>Add to Bag</Text>
      </TouchableOpacity>
    </View>
  );
};

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.background,
      padding: vs(16),
    },
    addButton: {
      backgroundColor: colors.btnColor,
      paddingVertical: vs(16),
      borderRadius: vs(25),
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: s(spacing.lg),
    },
    addButtonText: {
      color: colors.btnTextPrimary,
      fontSize: vs(16),
      fontWeight: 'bold',
    },
  });

export default AddToBagButton;
