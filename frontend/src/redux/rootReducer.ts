// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

// Import your slices here
// For now, let's create a placeholder authSlice
import authReducer from './slices/authSlice';
// import portfolioReducer from './slices/portfolioSlice';
// import adminReducer from './slices/adminSlice';
// import uiReducer from './slices/uiSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // portfolio: portfolioReducer,
  // admin: adminReducer,
  // ui: uiReducer,
});

export default rootReducer;