// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface ComentarioState {
//   comentarios: { [imageId: string]: string[] }; 
// }

// const initialState: ComentarioState = {
//   comentarios: {}, 
// };

// const comentarioSlice = createSlice({
//   name: 'comentarios',
//   initialState,
//   reducers: {
//     adicionarComentario(state, action: PayloadAction<{ imageId: string, comentario: string }>) {
//       const { imageId, comentario } = action.payload;
//       if (state.comentarios[imageId]) {
//         state.comentarios[imageId].push(comentario); 
//       } else {
//         state.comentarios[imageId] = [comentario]; 
//       }
//     },
//   },
// });

// export const { adicionarComentario } = comentarioSlice.actions;

// export default comentarioSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentsState {
  comments: string[];
}

const initialState: CommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<string>) {
      state.comments.push(action.payload);
    },
    removeComment(state, action: PayloadAction<number>) {
      state.comments.splice(action.payload, 1);
    },
  },
});

export const { addComment, removeComment } = commentsSlice.actions;

export default commentsSlice.reducer;