import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice";

const store = configureStore({
    reducer: {
      form: formSlice.reducer,
    },
  });

export default store;
