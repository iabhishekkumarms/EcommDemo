// Note: Add new translations to the common object
const en = {
  common: {
    appName: 'QuickLaunchReactNativeKit',
    success: 'Success',
    error: 'Error',
    info: 'Information',
    warning: 'Warning',
    unexpectedError: 'An unexpected error occurred. Please try again.',
  },
  errorMessage: {
    fetchProductsRequestFailed: 'Failed to fetch products. Please try again.',
    loginRequestFailed: 'Failed to login. Please try again.',
  },
  login: {
    title: 'Sign in',
    passwordPlaceholder: 'Password',
    passwordHint:
      'Your password should be between 8 and 16 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
    usernamePlaceholder: 'Username',
    btnContinue: 'Continue',
    continueWithApple: 'Continue With Apple',
    continueWithGoogle: 'Continue With Google',
    continueWithFacebook: 'Continue With Facebook',
    dontHaveAccount: 'Dont have an account ?',
    createOne: 'Create One',
    forgotPassword: 'Forgot Password?',
    reset: 'Reset',
    loginSuccess: 'Login successful!',
    emailPlaceholder: 'Email',
  },
  signup: {
    title: 'Create Account',
    firstName: 'First Name',
    lastName: 'Last Name',
    emailAddress: 'Email Address',
    password: 'Password',
    btnContinue: 'Continue',
    forgotPassword: 'Forgot Password?',
    reset: 'Reset',
  },
  apiErrors: {
    requestTimeout:
      'Request timed out. Please check your internet connection or try again later.',
    networkError: 'Network error. Please check your internet connection.',
    requestCanceled: 'Request canceled. Please try again or contact support.',
    unauthorizedAccess: 'Unauthorized access. Please log in again.',
    forbiddenAccess:
      'Forbidden. You do not have permission to access this resource.',
    resourceNotFound: 'Resource not found.',
    internalServerError:
      'Internal server error. Please try again later or contact support.',
    unexpectedError: 'Unexpected error occurred. Please try again.',
    badRequest: 'Bad request. Please check your request parameters.',
    appleSignInError: 'Apple Sign in failed!',
    appleSignInCancel: 'User canceled Apple Sign in.',
  },
  home: {
    title: 'Home',
    categories: 'Categories',
    viewAll: 'View All',
    topSelling: 'Top Selling',
  },
  searchBar: {
    placeholder: 'Search...',
  },
  category: {
    fetchCategoriesRequestFailed:
      'Failed to fetch categories. Please try again.',
  },
  product: {
    shipping: 'Shipping & Returns',
    reviews: 'Reviews',
    rating: ' Ratings',
    addToBag: 'Add to Bag',
    quantity: 'Quantity',
    addToCartSuccessMessage: 'Item added to bag.',
  },
  cart: {
    cartIsEmpty: 'Your cart is empty',
    exploreCategory: 'Explore Category',
    totalPirce: 'Total Price',
    chekout: 'Checkout',
    placeOrder: ' Place Order',
    totalPrice: 'Total Price',
  },
  order: {
    orderPlacedSuccess: 'Order placed successfully!',
    orderPlacedEmailText: 'You will recieve an email confirmation',
    navigateToHome: 'Navigate To Home',
  },
  address: {
    placeHolderStreetAddress: 'Street Address',
    placeHolderCity: 'City',
    placeHolderState: 'State',
    placeHolderZip: 'Zip Code',
    btnSave: 'Save',
    showSuccessMessage: 'Address Saved Successfuly',
  },
  profile: {
    title: 'Profile',
    address: 'Address',
    checkout: 'Checkout',
    wishlist: 'Wishlist',
    signout: 'Sign Out',
  },
  checkout: {
    address: 'Address',
    shipping: 'Shipping Address',
    paymentMethod: 'Payment Method',
    cod: 'Cash On Delivery',
    codMeassage: 'Now we only have COD option',
    showAddressMessage: 'Please enter a valid address',
  },
};

export default en;
