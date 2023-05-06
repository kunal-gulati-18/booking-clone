import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* <Stack.Screen name="Home" component={HomeScreen} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
