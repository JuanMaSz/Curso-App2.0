import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../my-app/src/components/Header.js";
import Categories from './src/components/Categories';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products.js';
import { useFonts } from 'expo-font';
import ProductDetail from './src/screens/ProductDetail.js';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation.js';
import TabNav from './src/navigation/TabNav.js';

export default function App() {

  const [fontsLoaded] = useFonts ({
    Bodoni: require("./assets/Fonts/LibreBodoni-VariableFont_wght.ttf")
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
