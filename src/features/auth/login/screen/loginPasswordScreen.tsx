import {TextInput, View} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {AuthScreenProps, navigate} from 'src/navigation';
import {Button, Screen, Text} from 'src/components';
import makeStyles from './styles';
import {useAppTheme} from 'src/theme/useAppTheme';
import {useTranslation} from 'react-i18next';
import {TextField} from 'src/components/TextField/TextField';
import {useValidation} from 'src/utils';

const LoginPasswordScreen: FC<AuthScreenProps<'loginPassword'>> = ({route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');

  const {colors} = useAppTheme(); // Get colors & fonts from theme

  // Textinput references
  const passwordRef = useRef<TextInput>(null);

  // Styles
  const styles = makeStyles(colors);

  const {t} = useTranslation();

  useEffect(() => {
    if (route.params && route.params.email) {
      setEmail(route.params.email);
    }
  }, [route.params]);

  // Validate form textfields input
  const {setIsTouched, validateForm, isFormValid, getErrorsInField} =
    useValidation({
      state: {password},
      fieldsRules: {
        password: {
          required: true,
          password: true,
          minlength: 8,
          maxlength: 16,
          hasUpperCase: true,
          hasLowerCase: true,
          hasNumber: true,
          hasSpecialCharacter: true,
        },
      },
      isTouchedEnabled: true,
    });

  const callLoginApi = () => {
    setIsTouched(true);
    const isValid = validateForm();
    if (isValid) {
    }
  };

  const redirectToForgotPasswordScreen = () => {
    navigate('forgotPassword');
  };

  /**
   * Render title
   */
  const renderTitle = () => (
    <View>
      <Text size="h1">{t('login.title')}</Text>
    </View>
  );

  const renderForgotPasswordText = () => (
    <View style={styles.signUpTextView}>
      <Text style={styles.CreateAccountText}>{t('login.forgotPassword')}</Text>
      <Button
        textStyle={{color: colors.text}}
        preset="link"
        btnText={t('login.reset')}
        onPress={redirectToForgotPasswordScreen}
      />
    </View>
  );

  const renderTextInput = () => (
    <View style={styles.textFiledContainer}>
      <TextField
        ref={passwordRef}
        preset="password"
        value={password}
        onChangeText={setPassword}
        placeholder={t('login.passwordPlaceholder')}
        returnKeyType="done"
        textContentType="password"
        error={getErrorsInField('password')}
      />
    </View>
  );

  const renderButtons = () => (
    <Button
      btnText={t('login.btnContinue')}
      onPress={callLoginApi}
      disabled={!isFormValid()}
    />
  );

  return (
    <Screen safeAreaEdges={['top', 'bottom', 'left', 'right']} preset="auto">
      <View style={styles.contentContainerStyle}>
        {renderTitle()}
        {renderTextInput()}
        {renderButtons()}
        {renderForgotPasswordText()}
      </View>
    </Screen>
  );
};

export default LoginPasswordScreen;
