import {FlatList, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {PrimaryScreenProps} from 'src/navigation';
import {Screen} from 'src/components';
import {useAppTheme} from 'src/theme/useAppTheme';
import makeStyles from './styles';
import {useHeaderHeight} from '@react-navigation/elements';
import ProductItem from 'src/components/ProductItem';
import {useAppDispatch, useAppSelector} from 'src/store/reduxHook';
import {callFetchProductsByCategoryApi} from 'src/shared/api/actions';
import {
  selectCategoryProducts,
  selectProductsLoading,
} from 'src/shared/api/productSlice';

// Define the component type and props
const ProductListScreen: FC<PrimaryScreenProps<'productList'>> = ({route}) => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const headerSpace = useHeaderHeight();

  // Get the category slug from route params
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectCategoryProducts);
  const loading = useAppSelector(selectProductsLoading);

  const [slug] = useState<string>(route.params.slug);

  useEffect(() => {
    if (slug) {
      dispatch(callFetchProductsByCategoryApi(slug));
    }
  }, [dispatch, slug]);

  // Render a single product item
  const renderProductItem = ({item}: any) => (
    <View style={styles.productItemContainer}>
      <ProductItem item={item} colors={colors} fonts={fonts} />
    </View>
  );

  return (
    <Screen
      safeAreaEdges={['top', 'bottom', 'left', 'right']}
      preset="fixed"
      loading={loading}
      contentContainerStyle={[styles.container, {paddingTop: headerSpace}]}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </Screen>
  );
};

export default ProductListScreen;
