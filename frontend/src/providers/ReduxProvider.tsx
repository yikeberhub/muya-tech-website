// src/providers/ReduxProvider.tsx
"use client"; // This directive is crucial for it to be a Client Component

import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Make sure this path is correct

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}