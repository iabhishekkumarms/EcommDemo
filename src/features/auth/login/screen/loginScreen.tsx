import {View} from 'react-native';
import React, {FC, useState} from 'react';
import {useAppTheme} from 'src/theme/useAppTheme';
import {AuthScreenProps, navigate} from 'src/navigation';
import {Screen} from 'src/components/Screen';
import {Button, Text} from 'src/components';
import makeStyles from './styles';
import {useTranslation} from 'react-i18next';
import {TextField} from 'src/components/TextField/TextField';
import {SocialButton} from 'src/components/SocialButton';
import {
  AppleDark,
  AppleLight,
  FacebookLight,
  GoogleLight,
} from 'src/assets/svgs';
import {useValidation} from 'src/utils';

const LoginScreen: FC<AuthScreenProps<'login'>> = () => {
  const {dark, colors} = useAppTheme(); // Get colors & fonts from theme

  // Styles
  const styles = makeStyles(colors);
  const {t} = useTranslation();

  // Hooks
  const [email, setEmail] = useState<string>('');

  // Validate form textfields input
  const {setIsTouched, validateForm, isFormValid, getErrorsInField} =
    useValidation({
      state: {email},
      fieldsRules: {
        email: {
          required: true,
          email: true,
        },
      },
      isTouchedEnabled: true,
    });

  const onPressContinue = async () => {
    setIsTouched(true);
    const isValid = validateForm();
    if (isValid) {
      try {
        navigate('loginPassword', {email: email});
      } catch (error) {}
    }
  };

  /**
   * Render title
   */
  const renderTitle = () => (
    <View>
      <Text size="h1">{t('login.title')}</Text>
    </View>
  );

  const renderTextInput = () => (
    <View style={styles.textFiledContainer}>
      <TextField
        value={email}
        onChangeText={setEmail}
        placeholder={t('login.emailPlaceholder')}
        error={getErrorsInField('email')}
      />
    </View>
  );

  const renderSignupText = () => (
    <View style={styles.signUpTextView}>
      <Text style={styles.CreateAccountText}>{t('login.dontHaveAccount')}</Text>
      <Button
        textStyle={{color: colors.text}}
        preset="link"
        btnText={t('login.createOne')}
        onPress={onPressContinue}
      />
    </View>
  );

  const renderButtons = () => (
    <Button
      btnText={t('login.btnContinue')}
      onPress={onPressContinue}
      disabled={!isFormValid()}
    />
  );

  const renderSocialButtons = () => (
    <View style={styles.socailLoginContainer}>
      <SocialButton
        btnText={t('login.continueWithApple')}
        btnIcon={dark ? <AppleLight /> : <AppleDark />}
        btnIconSize={24}
        onPress={onPressContinue}
      />
      <SocialButton
        btnText={t('login.continueWithGoogle')}
        btnIcon={<GoogleLight />}
        btnIconSize={24}
        onPress={onPressContinue}
      />
      <SocialButton
        btnText={t('login.continueWithFacebook')}
        btnIcon={<FacebookLight />}
        btnIconSize={24}
        onPress={onPressContinue}
      />
    </View>
  );

  return (
    <Screen safeAreaEdges={['top', 'bottom', 'left', 'right']} preset="auto">
      <View style={styles.contentContainerStyle}>
        {renderTitle()}
        {renderTextInput()}
        {renderButtons()}
        {renderSignupText()}
        {renderSocialButtons()}
      </View>
    </Screen>
  );
};

export default LoginScreen;
