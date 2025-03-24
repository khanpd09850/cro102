
import { store } from "./Redux/stores";
import { Provider } from "react-redux";
import Todos from "./Todo/index";
import HomeScreen from "./Todo/home";

export default function App() {
	return (
		<Provider store={store}>
			<Todos />
		</Provider>
	);
}