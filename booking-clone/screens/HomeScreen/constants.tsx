import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import StaysPage from './components/StaysPage';
import FlightsPage from './components/FlightsPage';
import RentalsPage from './components/RentalsPage';
import TaxiPage from './components/TaxiPage';

export const SCREEN_TYPES = [
	{
		title: 'Stays',
		key: 'stays',
		icon: <Ionicons name="bed-outline" size={22} color="white" />,
        component: <StaysPage/>
	},
	{
		title: 'Flights',
		key: 'flights',
		icon: <Ionicons name="airplane-outline" size={22} color="white" />,
        component: <FlightsPage/>
	},
	{
		title: 'Car rentals',
		key: 'rentals',
		icon: <AntDesign name="car" size={22} color="white" />,
        component: <RentalsPage/>
	},
	{
		title: 'Taxi',
		key: 'taxi',
		icon: <FontAwesome name="taxi" size={22} color="white" />,
        component: <TaxiPage/>
	},
];
