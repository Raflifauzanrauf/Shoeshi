import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import ProductCategory from './Components/productCategory';
import ProductCard from './Components/productCard';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationType } from '../../navigations/BottomNavigation';

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
    title: 'Elegant Wear',
    price: 300,
    oldPrice: 400,
    image: require('../../../../../assets/images/shoes2.png'),  
    
  },
    {
    id: 4,
    title: 'Elegant Wear',
    price: 300,
    oldPrice: 400,
    image: require('../../../../../assets/images/shoes1.png'),  
    
  },
  // Tambahkan data lainnya
];
const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<BottomTabNavigationType>>();
  const cartCount = 3;

  return (
    <View style={styles.container}>
      <View style={styles.containerAppbar}>
        <View style={styles.containerAppBarTitle}>
          <Text style={styles.appBarTitle}>Shoesi</Text>
          <TouchableOpacity
        onPress={() => navigation.navigate('CartScreen')}
        style={{ position: 'relative', padding: 8 }}
      >
        <Icon name="shopping-bag" size={24} color="#333" />
        {cartCount > 0 && (
          <View
            style={{
              position: 'absolute',
              top: 2,
              right: 2,
              backgroundColor: 'red',
              borderRadius: 8,
              paddingHorizontal: 5,
              paddingVertical: 1,
              minWidth: 16,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {cartCount}
            </Text>
          </View>
        )}
      </TouchableOpacity>
        </View>
        <View style={styles.containerSearchAppbar}>
          <View style={styles.containerSeacrh}>
            <View style={styles.containerIconSearch}>
              <Icon name="search" size={15} color="#333" />
            </View>
            <TextInput placeholder="Search Here..." style={styles.searchTitle} />
          </View>
          <Icon name="message-circle" size={18} color="#333" style={styles.iconsAppBar} />
          <Icon name="bell" size={18} color="#333" />
        </View>
      </View>

      <View style={styles.containerBody}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Icon name="map-pin" color="#000" size={14} />
          <Text style={{ fontFamily: 'Roboto-Regular', color: 'grey', fontSize: 12, marginHorizontal: 5 }}>send to:</Text>
          <Text style={{ fontFamily: 'Roboto-SemiBold', color: '#333', fontSize: 12, flex: 1 }}>Jl.Jatisari E/59, Purwokerto Utara</Text>
          <Icon name="chevron-down" color="#000" size={14} />
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={styles.containerBanner}>
            <View style={{ padding: 20 }}>
              <Text style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: 16, width: 150, marginBottom: 5 }}>NEW NIKE COLLECTION</Text>
              <Text style={{ color: 'white', fontFamily: 'Roboto-Light', fontSize: 16, width: 150 }}>Discount up to 60%</Text>
            </View>
            <Image source={require('../../../../../assets/images/shoes4.png')} style={{ width: 150, height: 150 }} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            {['NIKE', 'PUMA', 'ADIDAS', 'CROCS', 'SWALLOW', 'COMPAS'].map((brand, idx) => (
              <View key={idx} style={styles.containerCategory}>
                <Text style={{ fontSize: 12, color: '#fff', fontFamily: 'Roboto-SemiBold' }}>{brand}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <Text style={{ fontFamily: 'Roboto-SemiBold', fontSize: 14 }}>Popular</Text>
          <Text style={{ fontFamily: 'Roboto-Light', fontSize: 12 }}>See all</Text>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              image={item.image}
              onPress={() =>
                navigation.navigate('DetailScreen', {
                  product: item,
                })
              }
            />
          )}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerBody:{
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  containerAppbar:{
    backgroundColor:'#fff',
    padding:20,
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
  },
  containerAppBarTitle:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20,
  },
  appBarTitle:{
    fontSize: 14,
    flex:1,
    fontFamily: 'Roboto-Bold'

  },
  containerSeacrh:{
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    marginRight:20,
  },
  containerIconSearch:{
    backgroundColor:'#fff',
    padding: 5,
    borderRadius:20,
  },
  searchTitle:{
    fontSize: 12,
    marginLeft: 5,
    fontFamily:'Roboto-Regular',
    color:'#333'
  },
  iconsAppBar:{
    marginRight: 20,
  
  },
  containerSearchAppbar:{
    flexDirection:'row',
    alignItems:'center',
  },
  containerBanner:{
    backgroundColor:'#1E1E1E',
    height: 115,
    borderRadius: 20,
    // padding:20,
    flexDirection:'row',
    alignItems:'center',
    marginBottom: 10,
  },
  containerButton:{
    backgroundColor:'#000',
    borderRadius:20,
    width: 100,
    alignItems:'center',
    justifyContent: 'center',
    height:25,
  },
  buttonTitle:{
    color:'#fff',
    fontFamily:'Roboto-Light',
    fontSize: 10,
  },
  bannerTitle:{
    fontFamily:'Roboto-SemiBold',
    fontSize: 14,
    marginBottom:5,
    color:'#fff'
  },
    gradient: {
    ...StyleSheet.absoluteFillObject,
      borderRadius: 20,
  },
  containerCategory:{
    backgroundColor:'#1e1e1e',
    borderRadius: 20,
    height: 30,
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal: 10,
    marginRight: 10,
  }
});
export default HomeScreen;
