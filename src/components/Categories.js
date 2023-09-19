import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories } from '../data/categories.js'
import CategoryItem from './CategoryItem'
import { colors } from '../theme/colors.js'

const Categories = () => {
return (
    <View style={styles.container}>
    <FlatList style={styles.container}
    data = {categories}
    keyExtractor={(key) => key}
    renderItem={({ item}) => <CategoryItem item={item}/>}
    />
    </View>
)
}

export default Categories

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.heavyPurple,
        
    },

})