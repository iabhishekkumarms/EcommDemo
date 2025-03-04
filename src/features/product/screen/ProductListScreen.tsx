import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {PrimaryScreenProps} from 'src/navigation';
import {Screen} from 'src/components';
import {useAppTheme} from 'src/theme/useAppTheme';
import makeStyles from './styles';
import {useTranslation} from 'react-i18next';
import {useHeaderHeight} from '@react-navigation/elements';
import ProductItem from 'src/components/ProductItem';
import {useAppDispatch, useAppSelector} from 'src/store/reduxHook';
import {callFetchProductsByCategoryApi} from 'src/shared/api/actions';

const ProductListScreen: FC<PrimaryScreenProps<'productList'>> = ({route}) => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();
  const headerSpace = useHeaderHeight();

  const dispatch = useAppDispatch();

  const {products, loading, error} = useAppSelector(state => state.products);

  const [slug, setSlug] = useState<string>('');

  useEffect(() => {
    if (slug) {
      dispatch(callFetchProductsByCategoryApi(slug));
    }
  }, [dispatch, slug]);

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
