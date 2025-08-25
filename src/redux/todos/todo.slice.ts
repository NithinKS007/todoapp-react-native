import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoInitialState } from './todo.type';
import { v4 as uuidv4 } from 'uuid';

const initialState: TodoInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: uuidv4(),
        title: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
