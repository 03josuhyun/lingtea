import { configureStore, createSlice } from '@reduxjs/toolkit';

const cart = createSlice ({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload.id);

      if(index > -1) {
        state[index].count++;
      } else {
        state.push(action.payload);
      }
    },
    deleteItem(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload);
      state.splice(index, 1);
    },
    addCount(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload);
      state[index].count++;
    },
    subCount (state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload.id);
      if(state[index].count === 0) {
        state[index].count = 0;
      } else {
        state[index].count--;
      }
    },
    
  },
});

const likeItem = createSlice({
  name: 'likeItem',
  initialState: [],
  reducers: {
    addLike(state, action) {
      state.push(action.payload);
    }
  }
});

export const { addItem, deleteItem, addCount, subCount } = cart.actions;
export const { addLike } = likeItem.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
    likeItem: likeItem.reducer,
  },
})

