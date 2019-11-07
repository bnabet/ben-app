import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const FavoritesScreen = props => {
	const favMeals = useSelector(state => state.meals.favoriteMeals);

	return (
		<MealList
			listData={favMeals}
			navigation={props.navigation}
		/>
	);
};

// HEAD BAR
FavoritesScreen.navigationOptions = navData => {
	return {
		headerTitle: 'FavoritesScreen', // 'Your Favorites'
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='Menu'
					iconName='ios-menu'
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
};

export default FavoritesScreen;