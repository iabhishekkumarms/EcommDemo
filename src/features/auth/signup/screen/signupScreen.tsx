import {TextInput, View} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {useAppTheme} from 'src/theme/useAppTheme';
import {AuthScreenProps, navigate} from 'src/navigation';
import {Screen} from 'src/components/Screen';
import {Button, Text} from 'src/components';

import {useTranslation} from 'react-i18next';
import {TextField} from 'src/components/TextField/TextField';
import {useValidation} from 'src/utils';
import makeStyles from './styles';
const SignupScreen: FC<AuthScreenProps<'signup'>> = () => {
  const {colors} = useAppTheme(); // Get colors & fonts from theme

  // Styles
  const styles = makeStyles(colors);
  const {t} = useTranslation();

  // Textinput references
  const passwordRef = useRef<TextInput>(null);

  // Hooks
  const [firstName, setFirstname] = useState<string>('');
  const [lastName, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onPressContinue = async () => {};

  const redirectToForgotPasswordScreen = () => {
    navigate('forgotPassword');
  };

  /**
   * Render title
   */
  const renderTitle = () => (
    <View>
      <Text size="h1">{t('signup.title')}</Text>
    </View>
  );

  const renderTextInput = () => (
    <View style={styles.textFiledContainer}>
      <TextField
        value={firstName}
        onChangeText={setFirstname}
        inputMode="text"
        placeholder={t('signup.firstName')}
      />
      <TextField
        value={lastName}
        onChangeText={setLastname}
        inputMode="text"
        placeholder={t('signup.firstName')}
      />
      <TextField
        value={email}
        onChangeText={setEmail}
        placeholder={t('login.emailPlaceholder')}
      />
      <TextField
        ref={passwordRef}
        preset="password"
        value={password}
        onChangeText={setPassword}
        placeholder={t('login.passwordPlaceholder')}
        returnKeyType="done"
        textContentType="password"
      />
    </View>
  );

  const renderButtons = () => (
    <Button btnText={t('login.btnContinue')} onPress={onPressContinue} />
  );

  const renderForgotPasswordText = () => (
    <View style={styles.signUpTextView}>
      <Text style={styles.CreateAccountText}>{t('signup.forgotPassword')}</Text>
      <Button
        textStyle={{color: colors.text}}
        preset="link"
        btnText={t('signup.reset')}
        onPress={redirectToForgotPasswordScreen}
      />
    </View>
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

export default SignupScreen;
