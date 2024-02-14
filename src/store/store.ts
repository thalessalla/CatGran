
import { configureStore } from '@reduxjs/toolkit';
import CartSlices from '../slices/CartSlices';
import likeReducer from "../slices/LikeSlices";
import commentReducer from "../slices/ComentarioSlice"



const store = configureStore({
  reducer: {
    cart: CartSlices,
    comments: commentReducer,
    like: likeReducer,

  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;