import React from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../../store/features/showForm/ShowFormSlice";
import { resetSingleTodo } from "../../store/features/todo/todoSlice";

export const Header = () => {
	const dispatch = useDispatch();
	const todosCount = useSelector((state) => state.todos.todos.length);

	return (
		<div className="header border text-capitalize d-flex justify-content-between ">
			<div className="d-flex justify-content-between align-items-center text-secondary fs-6  d-flex flex--grow-1 px-3">
				TASKS {todosCount}
			</div>
			<div
				className="d-flex justify-content-center align-items-center border-start add-button"
				onClick={() => {
					dispatch(resetSingleTodo());
					dispatch(toggleState());
				}}
			>
				<FiPlus className="icon text-secondary fs-6" />
			</div>
		</div>
	);
};
