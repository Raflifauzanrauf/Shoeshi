import React from "react";
import { View, Text,FlatList,StyleSheet } from "react-native"; 
import SearchAppBar from "../../components/SearchAppBar";
import ProductCard from "../HomeScreen/Components/productCard";

const products = [
  {
    id: 1,
    title: 'Nike Air Max 97',
    price: 300,
    oldPrice: 400,
    image: require('../../../../../assets/images/shoes1.png'),
  },
  {
    id: 2,
    title: 'Puma Speedcat',
    price: 300,
    oldPrice: 400,
    image: require('../../../../../assets/images/shoes3.png'),    
  },
    {
    id: 3,
    title: 'Nike Air Max 97',
    price: 300,
    oldPrice: 400,
    image: require('../../../../../assets/images/shoes2.png'),  
    
  },
    {
    id: 4,
    title: 'Nike Air Max 97',
    price: 300,
    oldPrice: 400,
    image: require('../../../../../assets/images/shoes4.png'),  
    
  },
  {
    id: 5,
       title: 'Nike Air Max 97',

    price: 300,
    oldPrice: 400,
    image: require('../../../../../assets/images/shoes1.png'),  
    
  },
  {
    id: 6,
        title: 'Nike Air Max 97',

    price: 300,
    oldPrice: 400,
    image: require('../../../../../assets/images/shoes1.png'),  
    
  },
];
const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <SearchAppBar/>
      <View style={{padding:20}}>
        <FlatList
                  data={products}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={2}
                  contentContainerStyle={{ paddingHorizontal: 10 }}
                  columnWrapperStyle={{ justifyContent: 'space-between' }}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <ProductCard
                      title={item.title}
                      price={item.price}
                      oldPrice={item.oldPrice}
                      image={item.image}
                    />
                  )}
                />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container:{
  backgroundColor:'#f1f1f1',
  flex:1,
}
})
export default ProductScreen;
