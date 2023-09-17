import { configureStore } from "@reduxjs/toolkit";
import tetsReducer from "./tetsSlice";
import translateReducer from "./translateSlice";

export default configureStore({ reducer: translateReducer });
