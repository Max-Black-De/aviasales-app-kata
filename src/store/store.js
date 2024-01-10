import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sortBtsReducer from './slices/sortBtnsSlice'
import ticketsReducer from "./slices/ticketsSlice";
import checkBoxReducer from "./slices/checkBoxSlice";
const rootReducer = combineReducers({
  filter: sortBtsReducer,
  check: checkBoxReducer,
  tickets: ticketsReducer
})
export const store = configureStore({
  reducer: rootReducer,
})

