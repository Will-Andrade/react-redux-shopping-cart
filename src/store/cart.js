import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isVisible: false,
  changed: false,
  cartLength: 0,
  totalValue: 0,
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCart (state) {
      state.isVisible = !state.isVisible;
    },
    addToCart (state, action) {
      const productIndex = state.items
        .findIndex(item => item.id === action.payload.id);
      const existingCartProduct = state.items[productIndex];

      state.totalValue += action.payload.price;

      if (existingCartProduct) {
        state.items[productIndex] = {
          ...existingCartProduct,
          quantity: existingCartProduct.quantity + 1
        };

        return
      }

      state.items.push(action.payload);
      state.cartLength++;
      state.changed = true;
    },
    removeFromCart (state, action) {
      const productIndex = state.items
        .findIndex(item => item.id === action.payload.id);
      const existingCartProduct = state.items[productIndex];
      
      state.totalValue -= action.payload.price;
      state.changed = true;

      if (existingCartProduct.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.cartLength--;
        return
      }

      state.items[productIndex] = {
        ...existingCartProduct,
        quantity: existingCartProduct.quantity - 1
      };
    },
    clearCart () {
      return {
        ...initialCartState,
        isVisible: true
      }
    },
    replaceCart (state, action) {
      state.cartLength = action.payload.cartLength;
      state.items = action.payload.items;
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
