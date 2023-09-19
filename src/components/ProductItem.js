import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const ProductItem = ({ item }) => {
return (
    <View style={styles.container}>
    <Text style={styles.text}> {item.title} </Text>
    <Image style={styles.image} height={70} width={70}source={{uri: item.images [0]}}/>
    </View>
)
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
        marginVertical: 10,
        borderColor: colors.heavyBlue,
        borderRadius: 10,
        borderWidth: 1,
        height: 100,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },

    text:{
        fontSize: 20,
        fontWeight: "900",
        marginLeft: 20,
    },

    image:{
        marginRight: 10,

    }
})