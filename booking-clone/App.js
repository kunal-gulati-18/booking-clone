import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './routes/Routes';

export default function App() {
	return (
		<Provider store={store}>
			<Routes/>
		</Provider>
	);
}
