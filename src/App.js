import Todo from "./container/Todo";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App ">
				<Todo />
			</div>
		</Provider>
	);
}

export default App;
