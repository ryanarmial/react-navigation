import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './containers/Home'
import About from './containers/About'
import Blog from './containers/Blog'
import Detail from './containers/Detail'
import Login from './containers/Login'

const blogStackNav = createStackNavigator({
	Blog,
	Detail
})

const mainNavigator = createBottomTabNavigator({
	Home,
	Uzai: {
		screen: About,
		//dibawah ini versi singkat function me return Object
		navigationOptions: () => ({
			title: 'Halo Joyful'
		})
	},
	Blog: {
		screen: blogStackNav
	}
}, {
	initialRouteName: 'Blog'
})

const loginStack = createStackNavigator({
	Login
})

const rootNavigator = createSwitchNavigator({
	loginStack,
	mainNavigator
})

export default createAppContainer(rootNavigator)