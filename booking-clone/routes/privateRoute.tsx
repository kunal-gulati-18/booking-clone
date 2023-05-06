// import React from 'react';
import BookingScreen from '../screens/BookingScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedScreen from '../screens/SavedScreen';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

export const privateRoutes = () => {
	return [
		{
			name: 'HomeScreen',
			component: HomeScreen,
			options: {
				title: 'Booking.com',
				headerTitleStyle: {
					color: 'white',
				},
				headerStyle: {
					backgroundColor: '#003580',
					height: 110,
					borderBottomColor: "transparent",
					shadowColor: "transparent"
				},
				tabBarIcon: ({ focused }) =>
					focused ? (
						<Entypo name="home" size={24} color="#003580" />
					) : (
						<AntDesign name="home" size={24} color="black" />
					),

				headerRight: () => (
					<Ionicons style={{ marginRight: 12 }} name="ios-notifications-outline" size={24} color="white" />
				),
			},
		},
		{
			name: 'SavedScreen',
			component: SavedScreen,
			options: {
				tabBarLabel: 'Saved',
				headerShown: false,
				tabBarIcon: ({ focused }) =>
					focused ? (
						<AntDesign name="heart" size={24} color="#003580" />
					) : (
						<AntDesign name="hearto" size={24} color="black" />
					),
			},
		},
		{
			name: 'BookingScreen',
			component: BookingScreen,
			options: {
				tabBarLabel: 'Bookings',
				headerShown: false,
				tabBarIcon: ({ focused }) =>
					focused ? (
						<Ionicons name="notifications" size={24} color="#003580" />
					) : (
						<Ionicons name="notifications-outline" size={24} color="black" />
					),
			},
		},
		{
			name: 'ProfileScreen',
			component: ProfileScreen,
			options: {
				tabBarLabel: 'Profile',
				headerShown: false,
				tabBarIcon: ({ focused }) =>
					focused ? (
						<Ionicons name="person" size={24} color="#003580" />
					) : (
						<Ionicons name="person-outline" size={24} color="black" />
					),
			},
		},
	];
};
