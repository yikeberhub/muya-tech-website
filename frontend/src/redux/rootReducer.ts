// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import projectsReducer from './slices/projectSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  projects:projectsReducer,
});

export default rootReducer;