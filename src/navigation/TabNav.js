import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '../screens/Profile';
import RootNavigation from './RootNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNav = () => {
return (
    <Tab.Navigator screenOptions={{ headerShown: false, title:"",}}>
    <Tab.Screen options={{ tabBarIcon: ({focused}) => <Feather name="shopping-bag" size={focused ? 35 : 25} color="black" /> }} name="rootNavigation" component={RootNavigation} />
    <Tab.Screen options={{ tabBarIcon: ({focused}) => <Ionicons name="person-circle" size={focused ? 35 : 25}  color="black" />}} name="profile" component={Profile} />
    </Tab.Navigator>
)
}

export default TabNav

const styles = StyleSheet.create({})