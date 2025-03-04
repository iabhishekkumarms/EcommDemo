import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useAppDispatch} from 'src/store/reduxHook';
import {addItemWithQuantity} from 'src/features/cart/api/slice';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {s, vs} from 'src/utils';
import {Text} from './Text';
import {spacing} from 'src/theme/spacing';
import {showSuccessToast} from 'src/utils/toast';

// Define the props for the AddToBagButton component
type Props = {
  item: any;
  quantity: number;
  colors: ThemeColors;
  fonts: ThemeFonts;
  buttonText: string; // Add buttonText prop
  toastMessage: string; // Add toastMessage prop
};

// AddToBagButton component to handle adding items to the cart
const AddToBagButton: FC<Props> = ({
  item,
  quantity,
  colors,
  fonts,
  buttonText,
  toastMessage,
}) => {
  const dispatch = useAppDispatch();
  const styles = makeStyles(colors, fonts);

  const handleAddToBag = () => {
    dispatch(addItemWithQuantity({item, quantity: quantity}));
    showSuccessToast({message: toastMessage});
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddToBag}>
        <Text style={styles.addButtonText}>
          ${(item.price * quantity).toFixed(2)}
        </Text>
        <Text style={styles.addButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const makeStyles = (colors: ThemeColors, _fonts: ThemeFonts) =>
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
