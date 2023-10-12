import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../theme/colors'
import CategoryItem from '../components/CategoryItem'
import { categories } from '../data/categories.js'

const Home = ({navigation}) => {
return (
    <SafeAreaView>
<Header title="Home" navigation={navigation} />
<FlatList style={styles.container}
    data = {categories}
    keyExtractor={(key) => key}
    renderItem={({ item}) => <CategoryItem navigation={navigation} item={item}/>}
    />
    </SafeAreaView>
)
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.heavyPurple,
        
    },
})