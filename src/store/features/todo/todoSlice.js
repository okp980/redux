import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: "todos",
	initialState: {
		todos: [],
		singleTodo: null,
	},
	reducers: {
		addTodo: (state, action) => {
			return (state = {
				...state,
				todos: [...state.todos, action.payload],
			});
		},
		removeTodo: (state, action) => {
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload.id),
			};
		},
		getTodo: (state, action) => {
			return {
				...state,
				singleTodo: state.todos.find((todo) => todo.id === action.payload.id),
			};
		},
		editTodo: (state, action) => {
			const newTodos = state.todos.filter(
				(todo) => todo.id !== action.payload.todo.id
			);
			return {
				...state,
				todos: [...newTodos, action.payload.todo],
				singleTodo: action.payload.todo,
			};
		},
		resetSingleTodo: (state) => {
			return {
				...state,
				singleTodo: null,
			};
		},
	},
});

export const { addTodo, removeTodo, getTodo, editTodo, resetSingleTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
