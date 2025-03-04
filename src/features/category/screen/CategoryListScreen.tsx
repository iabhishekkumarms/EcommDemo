import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {navigate, PrimaryScreenProps} from 'src/navigation';
import {Category} from 'src/shared/api/api.types';
import {useAppTheme} from 'src/theme/useAppTheme';
import makeStyles from './style';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from 'src/store/reduxHook';
import CategoryButton from '../components/categoryButton';
import {Screen} from 'src/components';
import {useHeaderHeight} from '@react-navigation/elements';

const CategoryListScreen: FC<PrimaryScreenProps<'categoryList'>> = ({
  route,
}) => {
  // const {category}: {category: Category[]} = route.params; // Type the product parameter
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();
  const headerSpace = useHeaderHeight();

  const [categories, setCategories] = useState<Category[]>([]);

  const dispatch = useAppDispatch();

  // Set categories from route params
  useEffect(() => {
    if (route.params && route.params.category) {
      setCategories(route.params.category);
    }
  }, [route.params]);

  console.log('Cateeeee', categories);

  const navigateToProductListScreen = async () => {
    try {
      navigate('productList', {slug: route.params.category});
    } catch (error) {}
  };

  //render category

  const renderCategories = () => {
    return (
      <View>
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.slug.toString()}
          renderItem={({index, item}) => (
            <TouchableOpacity>
              <CategoryButton
                text={item.name}
                themeColors={colors}
                fonts={fonts}
                onPress={() => {}}
              />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  };

  return (
    <Screen
      safeAreaEdges={['top', 'bottom', 'left', 'right']}
      preset="fixed"
      contentContainerStyle={[styles.container, {paddingTop: headerSpace}]}>
      {renderCategories()}
    </Screen>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({});
