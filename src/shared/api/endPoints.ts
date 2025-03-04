/**
 * API endpoints for the product and categories.
 */

export const endPoints = {
  product: {
    /** Endpoint for categories. */
    categories: 'products/categories',
    products: 'products',
    productUsingCategory: (slug: string) => `products/category/${slug}`,
  },
};
