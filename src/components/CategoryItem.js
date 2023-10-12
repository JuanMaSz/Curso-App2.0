import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';

const CategoryItem = ({ item, navigation }) => {
return (
    <Pressable onPress={() => navigation.navigate("products", { item: item}) }>
        <Text style={styles.textList}>{item}</Text>
    </Pressable>
)};

const styles = StyleSheet.create({
    textList: {
        fontSize: 20,
        margin: 4,
        color: colors.heavyBlue,
        alignItems:"center",
        justifyContent:"center",
        width: "100%",

        //BORDER STYLES
        borderColor: colors.lightBlue,
        borderWidth: 4,
        borderRadius: 16,

        //TEXT STYLES
        textAlign: "center",
        padding: 16,
    }
})

export default CategoryItem

