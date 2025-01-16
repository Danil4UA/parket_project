import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { cartReducer } from "@/components/Cart/model/slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
