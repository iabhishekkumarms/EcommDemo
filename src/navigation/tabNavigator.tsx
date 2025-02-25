import * as React from 'react';
import makeCommanStyles from 'src/components/styles';
import {useAppTheme} from 'src/theme/useAppTheme';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {s, vs} from 'src/utils';
import {spacing} from 'src/theme/spacing';
import {fontSize, lineHeight} from 'src/theme/fontSize';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import HomeScreen from 'src/features/home/screen/homeScreen';
import {Icon, IconTypes} from 'src/components';
import SvgIcHome from 'src/assets/svgs/IcHome';
import SvgIcNotification from 'src/assets/svgs/IcNotification';
import SvgIcOrder from 'src/assets/svgs/IcOrder';
import SvgIcProfile from 'src/assets/svgs/IcProfile';

export type TabParamList = {
  home: undefined;
  notification: undefined;
  orders: undefined;
  profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const RenderTabBarIcon = ({
  icon,
  color,
}: {
  icon: JSX.Element | IconTypes;
  color: string;
}) => <Icon icon={icon} size={vs(24)} color={color} />;

const generateScreenOptions = ({
  icon,
}: {
  icon: JSX.Element | IconTypes;
}): BottomTabNavigationOptions => ({
  tabBarIcon: props => <RenderTabBarIcon icon={icon} {...props} />,
  tabBarLabel: () => null, // Hide the label for each tab
});

export const TabNavigator = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const commonStyles = makeCommanStyles(colors, fonts);
  const styles = makeStyles(colors, fonts);
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();

  /**
   * Screen options for tab navigator
   */
  const screenOptions: BottomTabNavigationOptions = {
    tabBarStyle: [
      styles.container,
      styles.tabShadow,
      {
        height: vs(60) + insets.bottom,
        paddingBottom: insets.bottom ? insets.bottom : vs(spacing.xs),
      },
    ],
    headerStyle: commonStyles.header,
    headerTitleStyle: commonStyles.headerTitle,
    tabBarLabelStyle: styles.tabLabel,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.tertiary,
    headerTitleAlign: 'center',
    headerShown: false,
  };

  return (
    <Tab.Navigator initialRouteName="home" screenOptions={screenOptions}>
      <Tab.Screen
        name={'home'}
        component={HomeScreen}
        options={generateScreenOptions({
          icon: <SvgIcHome />,
        })}
      />
      <Tab.Screen
        name={'notification'}
        component={HomeScreen}
        options={generateScreenOptions({
          icon: <SvgIcNotification />,
        })}
      />
      <Tab.Screen
        name={'orders'}
        component={HomeScreen}
        options={generateScreenOptions({
          icon: <SvgIcOrder />,
        })}
      />
      <Tab.Screen
        name={'profile'}
        component={HomeScreen}
        options={generateScreenOptions({
          icon: <SvgIcProfile />,
        })}
      />
    </Tab.Navigator>
  );
};

/**
 * Creates styles for the component
 * @param colors - Colors: Color palette.
 */
const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      borderTopWidth: 0,
      paddingTop: vs(spacing.xs),
      paddingHorizontal: s(spacing.sm),
    } as ViewStyle,
    tabShadow: {
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 5.65,
      elevation: 6,
    } as ViewStyle,
    tabLabel: {
      fontSize: fontSize.body,
      lineHeight: lineHeight[fontSize.body],
      fontFamily: fonts.medium.fontFamily,
    } as TextStyle,
  });
