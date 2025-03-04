import {TextInput, View} from 'react-native';
import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {AuthScreenProps, navigate, resetAndNavigate} from 'src/navigation';
import {Button, Screen, Text} from 'src/components';
import makeStyles from './styles';
import {useAppTheme} from 'src/theme/useAppTheme';
import {useTranslation} from 'react-i18next';
import {TextField} from 'src/components/TextField/TextField';
import {useValidation} from 'src/utils';
import {useAppDispatch, useAppSelector} from 'src/store/reduxHook';
import {callLoginApi} from '../api/actions';
import {LoginReq} from '../api/api.types';
import {showErrorToast, showSuccessToast} from 'src/utils/toast';
import reduxStorage from 'src/store/storage';

const LoginPasswordScreen: FC<AuthScreenProps<'loginPassword'>> = ({route}) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState<string>('');

  const {colors} = useAppTheme(); // Get colors & fonts from theme

  // Textinput references
  const passwordRef = useRef<TextInput>(null);

  // Styles
  const styles = makeStyles(colors);

  const {t} = useTranslation();

  const dispatch = useAppDispatch();
  const {data, loading, error} = useAppSelector(state => state.login);

  // Memoize translation strings
  const loginSuccessMessage = useMemo(() => t('login.loginSuccess'), [t]);
  const unexpectedErrorMessage = useMemo(
    () => t('common.unexpectedError'),
    [t],
  );

  // Set username from route params
  useEffect(() => {
    if (route.params && route.params.username) {
      setusername(route.params.username);
    }
  }, [route.params]);

  useEffect(() => {
    if (data || error) {
      data
        ? (showSuccessToast({message: loginSuccessMessage}),
          // Save token to MMKV
          reduxStorage.setItem('accessToken', data.accessToken),
          resetAndNavigate('Primary'))
        : showErrorToast({message: error ?? unexpectedErrorMessage});
    }
  }, [data, error, loginSuccessMessage, unexpectedErrorMessage]);

  // Validate form textfields input
  const {setIsTouched, validateForm, isFormValid, getErrorsInField} =
    useValidation({
      state: {password},
      fieldsRules: {
        password: {
          required: true,
          password: true,
        },
      },
      isTouchedEnabled: true,
    });

  // Call login api
  const loginUser = (user: string, userPassword: string) => {
    const reqBody: LoginReq = {
      username: user,
      password: userPassword,
      expireInMins: '30',
    };
    return dispatch(callLoginApi(reqBody));
  };

  const callLoginApiFromScreen = async () => {
    setIsTouched(true);
    const isValid = validateForm();
    if (isValid) {
      loginUser(username, password);
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
      onPress={callLoginApiFromScreen}
      disabled={!isFormValid()}
    />
  );

  return (
    <Screen
      safeAreaEdges={['top', 'bottom', 'left', 'right']}
      preset="auto"
      loading={loading}>
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
