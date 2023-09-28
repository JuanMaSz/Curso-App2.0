import { FlatList, Image, StyleSheet, Text, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'

const Products = ({ category }) => {

const [categoryProd, setCategoryProd] = useState([])
const [text, setText] = useState("");

    useEffect(() => {

const categoryProducts = products.filter ((el) => el.category === category);
setCategoryProd(categoryProducts);

if (text){
    const titleProduct = products.filter((el) => el.title.toLowerCase() === text.toLowerCase());

    setCategoryProd(titleProduct);
}
    }, [categoryProd, text])
    

return (
    <View>
    <Header title="Productos"/>
    <Search text={text} setText={setText} />
    
    <FlatList
    data={categoryProd}
    keyExtractor={products.id}
    renderItem={({ item }) => <ProductItem item={item}/>}
    />
    </View>
)
}

export default Products

const styles = StyleSheet.create({})