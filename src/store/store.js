import { configureStore } from "@reduxjs/toolkit";
import formShowReducer from "./features/showForm/ShowFormSlice";
import todoReducer from "./features/todo/todoSlice";

export default configureStore({
	reducer: {
		formShow: formShowReducer,
		todos: todoReducer,
	},
});
