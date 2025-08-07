// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // We'll create this next

export const store = configureStore({
  reducer: rootReducer,
  // You can add middleware here, for example, redux-thunk is included by default
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myCustomMiddleware),
  // devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

// Define RootState and AppDispatch types based on your store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export default for consistency if other files import it like `import store from './store';`
export default store;