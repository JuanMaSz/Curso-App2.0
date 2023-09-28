import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Search from '../components/Search'

const Home = () => {
return (
    <View>
<Header title="Home"/>
<Categories />
    </View>
)
}

export default Home

const styles = StyleSheet.create({})