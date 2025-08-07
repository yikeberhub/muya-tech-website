// src/redux/hooks.ts
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, RootState, store } from './store'; // Import 'store' itself

export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();