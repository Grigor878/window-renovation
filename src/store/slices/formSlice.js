import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  material: "",
  glass: "",
  color: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setMaterial: (state, action) => {
      state.material = action.payload;
    },
    setGlass: (state, action) => {
      state.glass = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setMaterial, setGlass, setColor } = formSlice.actions;
export default formSlice;