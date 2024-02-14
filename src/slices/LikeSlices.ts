
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikeState {
  likedImages: string[];
}

const initialState: LikeState = {
  likedImages: [],
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    likeImage(state, action: PayloadAction<string>) {
      state.likedImages.push(action.payload);
    },
    unlikeImage(state, action: PayloadAction<string>) {
      state.likedImages = state.likedImages.filter((imageUrl) => imageUrl !== action.payload);
    },
  },
});

export const { likeImage, unlikeImage } = likeSlice.actions;

export default likeSlice.reducer;