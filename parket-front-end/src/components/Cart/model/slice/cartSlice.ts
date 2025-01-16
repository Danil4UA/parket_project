import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItemType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  images: string[];
  description: string;
  category: string;
  stock: number;
  discount?: number;
  isAvailable: boolean;
};

const initialState = {
  cartItems: [] as CartItemType[],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItemType>) {

      const item = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.cartItems.find(cartItem => cartItem.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
