import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'src/store/store';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
  images: string[];
  description: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Clears all items from the cart.
     * @param state - The current state of the cart.
     */
    clearCart: state => {
      state.items = [];
    },
    /**
     * Adds an item to the cart. If the item already exists, it increments the quantity and updates the total price.
     * @param state - The current state of the cart.
     * @param action - The action payload containing the item to be added.
     */
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        // existingItem.totalPrice += newItem.price * existingItem.quantity;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    /**
     * Removes an item from the cart. If the quantity is greater than 1, it decrements the quantity and updates the total price.
     * If the quantity is 1, it removes the item from the cart.
     * @param state - The current state of the cart.
     * @param action - The action payload containing the item to be removed.
     */
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        } else {
          state.items = state.items.filter(item => item.id !== newItem.id);
        }
      }
    },

    /**
     * Adds a specified quantity of an item to the cart.
     * @param state - The current state of the cart.
     * @param action - The action payload containing the item and quantity to be added.
     */
    addItemWithQuantity: (
      state,
      action: PayloadAction<{item: CartItem; quantity: number}>,
    ) => {
      const {item, quantity} = action.payload;
      const existingItem = state.items.find(
        cartItem => cartItem.id === item.id,
      );
      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.totalPrice = item.price * quantity;
      } else {
        state.items.push({
          ...item,
          quantity,
          totalPrice: item.price * quantity,
        });
      }
    },
    /**
     * Increments the quantity of an item without adding it to the cart.
     * @param state - The current state of the cart.
     * @param action - The action payload containing the item to be incremented.
     */
    incrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    /**
     * Decrements the quantity of an item without removing it from the cart.
     * @param state - The current state of the cart.
     * @param action - The action payload containing the item to be decremented.
     */
    decrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= newItem.price;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  addItemWithQuantity,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

/**
 * Selector to get all items in the cart.
 * @param state - The root state of the application.
 * @returns An array of cart items.
 */
export const selectCartItems = (state: RootState) => state.cart.items;

/**
 * Selector to get the quantity of a specific item in the cart by its ID.
 * @param id - The ID of the item.
 * @returns The quantity of the item in the cart.
 */
export const selectItemCountById = (__id: string) =>
  createSelector(selectCartItems, items => {
    const item = items.find((item: any) => item.id === __id);
    return item ? item?.quantity : 1;
  });

/**
 * Selector to get the total number of items in the cart.
 * @returns The total number of items in the cart.
 */
export const selectTotalItemsInCart = createSelector(selectCartItems, items => {
  return items.reduce((total, item) => total + item?.quantity, 0);
});

/**
 * Selector to get the total price of all items in the cart.
 * @returns The total price of all items in the cart.
 */
export const selectTotalCartPrice = createSelector(selectCartItems, items => {
  return items?.reduce((total, item) => total + item.totalPrice, 0);
});

export default cartSlice.reducer;
