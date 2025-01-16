import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [] as Array<{ id: number; name: string; quantity: number }>, 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: number; name: string; quantity: number }>) {
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
