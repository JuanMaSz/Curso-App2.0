import { Pressable, StyleSheet, Text, TextInput, View, } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const Search = ({ text, setText }) => {

    const clearText = () =>{
        setText(null);
    };


return (
    <View style={styles.container}>
    <TextInput 
    onChangeText={(value) => setText(value)}
    value={text}
    style={styles.inputText}
    placeholder='Busca un producto aquí..'/>
    <Pressable onPress={() => clearText()}>
    <AntDesign name="closesquareo" size={30} color="black" />
    </Pressable>
    </View>
)
}

export default Search

const styles = StyleSheet.create({
    container:{
        height: 100,
        backgroundColor: colors.lightPurple,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    inputText:{
        width: "80%",
        borderWidth: 3,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        marginRight: 15,
        backgroundColor: "white",
    }



})