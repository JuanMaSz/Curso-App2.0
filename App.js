import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../my-app/src/components/Header.js";
import Categories from './src/components/Categories';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Home />*/}
      {/*<Search /> */}
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({

});
