import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ title: 'TheMindTable' }} />
			<Stack.Screen name='camera' />
		</Stack>
	);
}
