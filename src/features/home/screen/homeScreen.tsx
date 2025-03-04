import React, {useEffect} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {useAppTheme} from 'src/theme/useAppTheme';
import makeStyles from './styles';
import {useTranslation} from 'react-i18next';
import {Screen, Text} from 'src/components';
import {vs} from 'src/utils';
import SvgCartIcon from 'src/assets/svgs/CartIcon';
import {useAppDispatch, useAppSelector} from 'src/store/reduxHook';
import {
  callFetchCategoriesApi,
  callFetchProductsApi,
} from '../../../shared/api/actions';
import ProductItem from 'src/components/ProductItem';
import CategoryItem from 'src/components/CategoryItem';
import {selectTotalItemsInCart} from 'src/features/cart/api/slice';
import {navigate} from 'src/navigation';

export const HomeScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();

  const dispatch = useAppDispatch();
  const count = useAppSelector(selectTotalItemsInCart);

  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useAppSelector(state => state.category);

  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(callFetchCategoriesApi());
    dispatch(callFetchProductsApi());
  }, [dispatch]);

  const navigateToCartScreen = async () => {
    try {
      navigate('cart');
    } catch (error) {}
  };

  const navigateToCategoryScreen = async () => {
    try {
      navigate('categoryList', {category: categories});
    } catch (error) {}
  };

  console.log(' categories Data from screen: ', categories);
  console.log('Products Data from screen: ', products);

  //Render Header
  const renderHeader = () => {
    return (
      <View style={styles.headerConatiner}>
        <Image
          style={styles.userImage}
          source={{
            uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
          }}
        />
        <View style={styles.cartIconContainer}>
          <TouchableOpacity onPress={navigateToCartScreen}>
            <SvgCartIcon width={vs(40)} height={vs(40)} />
            {count > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{count}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  //render category

  const renderCategories = () => {
    return (
      <View>
        <View style={styles.categoryContainer}>
          <Text size="h3" style={styles.categoryText}>
            {t('home.categories')}
          </Text>
          <TouchableOpacity onPress={navigateToCategoryScreen}>
            <Text style={styles.seeAllText}>{t('home.viewAll')}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.slug.toString()}
          renderItem={({index, item}) => (
            <TouchableOpacity>
              <CategoryItem item={item} colors={colors} fonts={fonts} />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  };

  const renderProducts = () => {
    return (
      <View>
        <View style={styles.categoryContainer}>
          <Text size="h3" style={styles.categoryText}>
            {t('home.topSelling')}
          </Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>{t('home.viewAll')}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({index, item}) => (
            <ProductItem item={item} colors={colors} fonts={fonts} />
          )}
        />
      </View>
    );
  };

  return (
    <Screen
      safeAreaEdges={['left', 'right']}
      preset="fixed"
      loading={categoriesLoading || productsLoading}
      contentContainerStyle={styles.contentContainerStyle}>
      {renderHeader()}
      {renderCategories()}
      {renderProducts()}
    </Screen>
  );
};

export default HomeScreen;
