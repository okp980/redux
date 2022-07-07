import React from "react";
import {
	Button,
	ButtonGroup,
	Card,
	Col,
	Container,
	Row,
} from "react-bootstrap";
import { BsPencilFill, BsCheckLg } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../../store/features/showForm/ShowFormSlice";
import { getTodo, removeTodo } from "../../store/features/todo/todoSlice";

const Item = ({ id, todo, date, img }) => {
	const dispatch = useDispatch();
	const editForm = (id) => {
		dispatch(getTodo({ id }));
		dispatch(toggleState());
	};
	return (
		<Card>
			<Container className="p-2">
				<Row className="d-flex align-items-center">
					<Col className="">
						<img src={img} alt={todo} />
					</Col>
					<Col className="w-75">
						<h3 className="fs-6 text-sm-left lh-base font-weight-bold text-capitalize text-decoration-none text-reset">
							{todo}
						</h3>
						<p className="lh-base font-weight-light  text-danger">{date}</p>
					</Col>
					<Col className="d-flex flex-row w-100">
						<Button
							variant="outline-secondary"
							className="border me-2 todo"
							onClick={() => editForm(id)}
						>
							<BsPencilFill />
						</Button>
						<ButtonGroup>
							<Button variant="outline-secondary" className="border todo">
								<MdNotificationsActive />
							</Button>
							<Button
								variant="outline-secondary"
								className="border todo"
								onClick={() => dispatch(removeTodo({ id }))}
							>
								<BsCheckLg />
							</Button>
						</ButtonGroup>
					</Col>
				</Row>
			</Container>
		</Card>
	);
};

const TodoItem = () => {
	const todos = useSelector((state) => state.todos.todos);
	console.log(todos);
	return (
		<div>
			{todos.map((todo) => (
				<Item
					key={todo.id}
					user={todo.user}
					date={todo.date}
					todo={todo.todo}
					id={todo.id}
				/>
			))}
		</div>
	);
};

export default TodoItem;
