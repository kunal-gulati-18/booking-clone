import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

export const publicRoutes = () => {
	return [
		{
			name: 'Login',
			component: LoginScreen,
		},
		{
			name: 'Register',
			component: RegistrationScreen,
		},
	];
};
