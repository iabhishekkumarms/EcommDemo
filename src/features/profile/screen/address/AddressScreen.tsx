import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useAppTheme} from 'src/theme/useAppTheme';
import makeStyles from './style';
import {useTranslation} from 'react-i18next';
import {Button, Screen} from 'src/components';
import {useHeaderHeight} from '@react-navigation/elements';
import {TextField} from 'src/components/TextField/TextField';
import {useValidation} from 'src/utils';
import {useAppDispatch, useAppSelector} from 'src/store/reduxHook';
import {saveAddress, selectAddress} from './slice/addressSlice';
import {goBack} from 'src/navigation';
import {showSuccessToast} from 'src/utils/toast';

const AddressScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();

  // Hooks
  // Hooks
  const dispatch = useAppDispatch();
  const savedAddress = useAppSelector(selectAddress);

  const [streetAddress, setStreetAddress] = useState<string>(
    savedAddress.streetAddress,
  );
  const [city, setCity] = useState<string>(savedAddress.city);
  const [state, setState] = useState<string>(savedAddress.state);
  const [zipCode, setZipCode] = useState<string>(savedAddress.zipCode);

  const headerSpace = useHeaderHeight();

  const showSuccessMessage = useMemo(
    () => t('address.showSuccessMessage'),
    [t],
  );

  // Validate form textfields input
  const {setIsTouched, validateForm, isFormValid, getErrorsInField} =
    useValidation({
      state: {zipCode, city, state, streetAddress},
      fieldsRules: {
        streetAddress: {
          required: true,
        },
        city: {
          required: true,
        },
        state: {
          required: true,
        },
        zipCode: {
          required: true,
          minLength: 5,
          maxLength: 6,
        },
      },
      isTouchedEnabled: true,
    });

  const handleSaveAddress = async () => {
    setIsTouched(true);
    const isValid = validateForm();
    if (isValid) {
      dispatch(saveAddress({streetAddress, city, state, zipCode}));
      showSuccessToast({message: showSuccessMessage});
      goBack();
    }
  };

  const renderTextInput = () => (
    <View style={styles.textFiledContainer}>
      <TextField
        value={streetAddress}
        onChangeText={setStreetAddress}
        placeholder={t('address.placeHolderStreetAddress')}
        error={getErrorsInField('streetAddress')}
      />
      <TextField
        value={city}
        onChangeText={setCity}
        placeholder={t('address.placeHolderCity')}
        error={getErrorsInField('city')}
      />
      <TextField
        value={state}
        onChangeText={setState}
        placeholder={t('address.placeHolderState')}
        error={getErrorsInField('state')}
      />
      <TextField
        value={zipCode}
        onChangeText={setZipCode}
        keyboardType="numeric"
        placeholder={t('address.placeHolderZip')}
        error={getErrorsInField('zipCode')}
      />
    </View>
  );

  const renderButtons = () => (
    <View style={styles.buttonConatiner}>
      <Button
        btnText={t('address.btnSave')}
        onPress={handleSaveAddress}
        disabled={!isFormValid()}
      />
    </View>
  );

  return (
    <Screen
      safeAreaEdges={['top', 'bottom', 'left', 'right']}
      preset="auto"
      contentContainerStyle={[styles.container, {paddingTop: headerSpace}]}>
      {renderTextInput()}
      {renderButtons()}
    </Screen>
  );
};

export default AddressScreen;
