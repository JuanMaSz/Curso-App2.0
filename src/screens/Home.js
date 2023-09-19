import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Search from '../components/Search'

const Home = () => {
return (
    <View>
<Header />
<Categories />
    </View>
)
}
/*<Header />
<Categories />*/
export default Home

const styles = StyleSheet.create({})