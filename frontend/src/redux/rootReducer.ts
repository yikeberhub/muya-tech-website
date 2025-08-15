// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import themeReducer from "./slices/themeSlice";
import usersReducer from "./slices/usersSlices";
import projectsReducer from './slices/projectsSlice';
import servicesReducer from './slices/servicesSlice';
import testimonialsReducer from './slices/testimonialsSlice';
import aboutUsReducer from './slices/aboutUsSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  projects:projectsReducer,
  theme: themeReducer,
});

export default rootReducer;