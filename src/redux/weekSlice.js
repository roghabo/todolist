import { createSlice } from "@reduxjs/toolkit";

const weekSlice = createSlice({
  name: "weekReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = weekSlice.actions;

export default weekSlice.reducer;
