import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { publicRoutes } from './publicRoute';
import { privateRoutes } from './privateRoute';
import { useSelector } from 'react-redux';
import { userSelector } from '../reducers/userSlice';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
	return (
		<Tab.Navigator>
			{privateRoutes().map(
				(route: { name: string; component: any; options: {} }) => (
					<Tab.Screen
						name={route.name}
						component={route.component}
						options={{ ...route.options }}
					/>
				)
			)}
		</Tab.Navigator>
	);
}
const Routes = () => {
	const user = useSelector(userSelector);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Booking" options={{
					headerShown: false,
				}} component={BottomTabs} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
