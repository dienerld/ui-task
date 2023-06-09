import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './modules/userSlice';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
