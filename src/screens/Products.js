import { FlatList, Image, StyleSheet, Text, SafeAreaView, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors'


const Products = ({ category, route, navigation }) => {

const [categoryProd, setCategoryProd] = useState([])
const [text, setText] = useState("");

const { item } = route.params;
    useEffect(() => {

const categoryProducts = products.filter ((el) => el.category === item);
setCategoryProd(categoryProducts);

if (text){
    const titleProduct = products.filter((el) => el.title.toLowerCase() === text.toLowerCase());

    setCategoryProd(titleProduct);
}
    }, [item, text])
    

return (
    <SafeAreaView>
    <Header title={item}/>
    <Pressable styles={styles.button} onPress={() => navigation.goBack() }>
    <Ionicons name="arrow-back-outline" size={24} color="black"/>
        </Pressable>
    <Search text={text} setText={setText} />
    
    <FlatList
    data={categoryProd}
    keyExtractor={products.id}
    renderItem={({ item }) => <ProductItem navigation={navigation} item={item}/>}
    />
    </SafeAreaView>
)
}

export default Products

const styles = StyleSheet.create({
})