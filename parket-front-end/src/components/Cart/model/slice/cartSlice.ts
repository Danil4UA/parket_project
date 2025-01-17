import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItemType = {
  productId: string;
  name: string;
  quantity: number;
  price: string;
  images: string[];
  description: string;
  category: string;
  stock: number;
  discount?: number;
  isAvailable: boolean;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [] as CartItemType[],
  },
  reducers: {
    setCart(state, action: PayloadAction<CartItemType[]>) {
      state.cartItems = action.payload;
    },
    addToCart(state, action: PayloadAction<CartItemType>) {
      const item = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.productId === item.productId);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }

      // Update localStorage after adding to cart
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(item => item.productId !== action.payload);

      // Update localStorage after removing item
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    updateQuantity(state, action: PayloadAction<{ productId: string; quantity: number }>) {
      const item = state.cartItems.find(cartItem => cartItem.productId === action.payload.productId);

      if (item) {
        item.quantity = action.payload.quantity;
      }

      // Update localStorage after changing quantity
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    clearCart(state) {
      state.cartItems = [];
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
      }
    },
  },
});

export const { setCart, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
