// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import projectsReducer from './slices/projectSlice';
import themeReducer from "./slices/themeSlice";
import usersReducer from "./slices/userSlices";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  projects:projectsReducer,
  theme: themeReducer,
});

export default rootReducer;