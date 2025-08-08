// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import projectsReducer from './slices/projectSlice';
import themeReducer from "./slices/themeSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  projects:projectsReducer,
  theme: themeReducer,
});

export default rootReducer;