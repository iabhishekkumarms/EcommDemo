/**
 * API endpoints for the product and categories.
 */

export const endPoints = {
  product: {
    /** Endpoint for categories. */
    productUsingCategory: (slug: string) => `products/category/${slug}`,
  },
};
