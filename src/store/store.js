import { configureStore } from "@reduxjs/toolkit";
import filterReducer from '../store/filter/filterSlice'


export const store = configureStore({
  reducer: {
    filter: filterReducer},
  devTools: true,
})