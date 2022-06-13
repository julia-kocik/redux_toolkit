import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './reducers/todoSlider';

export const store = configureStore({
  reducer: {
    toDo: toDoReducer
  },
});
