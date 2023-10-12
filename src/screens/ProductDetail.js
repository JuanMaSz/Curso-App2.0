import { SafeAreaView, Text, StyleSheet, Image, Button, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { products } from '../data/products'
import { Ionicons } from '@expo/vector-icons';

const ProductDetail = ({ navigation }) => {


    const initialProd = products[0];




return (
    <SafeAreaView style={styles.container}>
    <Header title="Detalle" />
    <Pressable onPress={() => navigation.goBack() }>
    <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
    
    <Image style={styles.image}
    source={{
        uri: initialProd.images[2]
    }}/>
    <Text style={styles.title} > Titulo: {initialProd.title} </Text>
    <Text style={styles.description}> Descripcion: {initialProd.description} </Text>
    <Text style={styles.description}> Rating: {initialProd.rating} </Text>
    <Text style={styles.description}> Precio: {initialProd.price} </Text>
    <Button title='Agregar al carrito'/>
    
    </SafeAreaView>
)
};

export default ProductDetail

const styles = StyleSheet.create({
    image:{
        height: 350,
        width: 350,
    },

    container:{
        alignItems:"center"
    },

    title:{
        fontFamily: "Bodoni",
        fontSize: 30,
    },

    description:{
        fontSize: 20,
        fontFamily:"Bodoni",
        marginVertical:10,
    },
    }



)
