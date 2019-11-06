import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
	headerTitle: 'A Screen'
};

// Meals
const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen
	},
	CategoryMeals: {
		screen: CategoryMealsScreen,
	},
	MealDetail: MealDetailsScreen
}, {
  	defaultNavigationOptions: defaultStackNavOptions
});

// Fav
const FavNavigator = createStackNavigator({
	Favorites: FavoritesScreen,
	MealDetail: MealDetailsScreen
}, {
	defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons
						name='ios-restaurant'
						size={25}
						color={tabInfo.tintColor}
					/>
				);
			},
			tabBarColor: Colors.primaryColor
		}
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			//tabBarLabel: 'Favorites !',
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons
						name='ios-star'
						size={25}
						color={tabInfo.tintColor}
					/>
				);
			},
			tabBarColor: Colors.accentColor
		}
	}
};

// MealsFavTab
const MealsFavTabNavigator = Platform.OS === 'android'
	? createMaterialBottomTabNavigator(tabScreenConfig, {
		activeColor: 'white',
		shifting: false, // transition effect
		barStyle: {
			backgroundColor: Colors.primaryColor
		}
	})
	: createBottomTabNavigator(tabScreenConfig, {
		tabBarOptions: {
			activeTintColor: Colors.accentColor
		}
	});


// Filters
const FiltersNavigator = createStackNavigator({
  	Filters: FiltersScreen
}, {
	/*navigationOptions: {
		drawerLabel: 'Filters!!!'
	},*/
	defaultNavigationOptions: defaultStackNavOptions
});


// Main
const MainNavigator = createDrawerNavigator({
	MealsFavs: {
		screen: MealsFavTabNavigator,
		navigationOptions: {
			drawerLabel: 'Meals'
		}
	},
	Filters: FiltersNavigator
}, {
	contentOptions: {
		activeTintColor: Colors.accentColor,
		labelStyle: {
			fontFamily: 'open-sans-bold'
		}
	}
});

export default createAppContainer(MainNavigator);