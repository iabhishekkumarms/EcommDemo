import {View} from 'react-native';
import React, {FC, useState} from 'react';
import {PrimaryScreenProps} from 'src/navigation';
import {Product} from 'src/shared/models/product';
import ProductImageSlider from 'src/components/ProductImageSlider';
import {Screen, Text} from 'src/components';
import {useAppTheme} from 'src/theme/useAppTheme';
import {useTranslation} from 'react-i18next';
import makeStyles from './styles';
import CustomerReview from 'src/components/CustomerReview';
import AddItemToCart from 'src/components/AddItemToCart';
import AddToBagButton from 'src/components/AddToBagButton';

const ProductDetailsScreen: FC<PrimaryScreenProps<'productDetails'>> = ({
  route,
}) => {
  const {product}: {product: Product} = route.params; // Type the product parameter

  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();
  const [quantity, setQuantity] = useState(1);

  const renderProductImageSlider = () => {
    return (
      product.images && (
        <ProductImageSlider
          imageList={product.images}
          colors={colors}
          fonts={fonts}
        />
      )
    );
  };

  const renderQuantity = () => {
    return (
      <View style={styles.quantityContainer}>
        <Text>{t('product.quantity')}</Text>
        <AddItemToCart
          item={product}
          colors={colors}
          fonts={fonts}
          onQuantityChange={setQuantity}
        />
      </View>
    );
  };

  const renderProductDetails = () => {
    return (
      <View style={styles.productDetailsContainer}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        {renderQuantity()}
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.boldText}>{t('product.shipping')}</Text>
        <Text style={styles.shipping}>{product.shippingInformation}</Text>
        <Text style={styles.boldText}>{t('product.reviews')}</Text>
        <Text style={styles.rating}>
          {product.rating}
          {t('product.rating')}
        </Text>
        {/* Render reviews */}
        {product.reviews.map((review, index) => (
          <CustomerReview
            key={index}
            reviewerName={review.reviewerName}
            comment={review.comment}
            date={review.date}
            rating={review.rating}
            colors={colors}
            fonts={fonts}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Screen
        safeAreaEdges={['top', 'bottom', 'left', 'right']}
        preset="scroll"
        contentContainerStyle={styles.contentContainerStyle}>
        {renderProductImageSlider()}
        {renderProductDetails()}
      </Screen>
      <AddToBagButton
        item={product}
        quantity={quantity}
        colors={colors}
        fonts={fonts}
        buttonText={t('product.addToBag')}
        toastMessage={t('product.addToCartSuccessMessage')}
      />
    </View>
  );
};

export default ProductDetailsScreen;
