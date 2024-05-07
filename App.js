import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './redux/store';
import ToDoList from './src/ToDoList.jsx';

const App = () => {
	return (
		<Provider store={store}>
			<ToDoList></ToDoList>
		</Provider>
	);
};

export default App;
