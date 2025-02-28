import {View, StyleSheet, TextStyle, TextInput, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {vs} from 'src/utils';
import SvgSearchnormal from 'src/assets/svgs/Searchnormal';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {useAppTheme} from 'src/theme/useAppTheme';
import {useTranslation} from 'react-i18next';

type Props = {};

const SearchBar = (props: Props) => {
  const {colors, fonts} = useAppTheme();
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SvgSearchnormal
          width={vs(20)}
          height={vs(20)}
          color={colors.btnTextSecondary}
        />
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder={t('searchBar.placeholder')}
          placeholderTextColor={colors.btnTextSecondary}
          style={styles.searchText}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default SearchBar;

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    searchBar: {
      backgroundColor: colors.btnColorSecondary,
      paddingHorizontal: vs(10),
      borderColor: colors.btnColorSecondary,
      borderRadius: vs(10),
      borderWidth: 1,
      flexDirection: 'row',
      gap: vs(10),
      alignItems: 'center',
      width: '100%', // Ensure the search bar has a width
      height: vs(40),
      flex: 1,
    } as ViewStyle,
    searchText: {
      color: colors.btnTextSecondary,
      fontFamily: fonts.regular.fontFamily,
      flex: 1,
      height: '100%',
    } as TextStyle,
  });
