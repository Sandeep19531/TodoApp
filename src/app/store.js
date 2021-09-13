import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/Tasks.js';
import searchReducer from '../features/Search.js';

export const store = configureStore({
  reducer: {
    taskState : taskReducer,
    searchState : searchReducer
  },
});
