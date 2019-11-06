import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useScreens } from 'react-native-screens';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';

useScreens();

const fetchFonts = async () => {
	await Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

const App = () => {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
			/>
		);
	}

	return (
		<MealsNavigator />
	);
};

export default App;
