import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from '../theme/colors.js'


const Header = ({ title }) => {
return (
    <View style = {styles.container}>
<Text style = {styles.text}> {title} </Text>
    </View>
);
};

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightPurple,
        marginTop: 25,
        height: 55,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 25,
        marginVertical: 10,
        fontWeight: "600",
        color: colors.heavyPurple,
        fontFamily: "Bodoni",
    }

})