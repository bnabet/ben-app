import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = props => {
	const renderGridItem = itemData => {
		return (
			<CategoryGridTitle
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate(
						'CategoryMeals',
						{categoryId: itemData.item.id}
					)
				}}
			/>
		);
	};

	return (
		<View>
			<Text>(CategoriesScreen) FlatList</Text>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={CATEGORIES}
				renderItem={renderGridItem}
				numColumns={2}
			/>
		</View>
	);
};

// HEAD BAR
CategoriesScreen.navigationOptions = navData => {
	return {
		headerTitle: 'CategoriesScreen', // Meal Categories
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

export default CategoriesScreen;
