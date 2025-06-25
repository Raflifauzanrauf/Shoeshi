import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InfoRow from './Components/infoRow';

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: any;
  quantity: number;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    title: 'Nike Air Max',
    price: 299,
    image: require('../../../../../assets/images/shoes1.png'),
    quantity: 1,
  },
  {
    id: 2,
    title: 'Adidas Run',
    price: 199,
    image: require('../../../../../assets/images/shoes2.png'),
    quantity: 2,
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const totalItem = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const increaseQty = (id: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => decreaseQty(item.id)}>
            <Icon name="minus-circle" size={15} />
          </TouchableOpacity>
          <Text style={styles.qty}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQty(item.id)}>
            <Icon name="plus-circle" size={15} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.id)}>
        <Icon name="trash-2" size={20} color="#1e1e1e" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={{padding:20,}}>
          <Text style={{textAlign:'center',fontFamily:'Roboto-Bold',marginBottom: 5,}}>Bag</Text>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{ fontSize: 14 }}>{totalItem} Items | </Text>
            <Text style={styles.totalText}>${getTotal()}</Text>
          </View>
        </View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>Cart is empty</Text>}
        ListFooterComponent={
          <>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Roboto-SemiBold',marginBottom:10, }}>Location</Text>
               <InfoRow
                iconName="map-pin"
                title="Jl. Jatisari E/59, Sumampir"
                subtitle="Purwokerto Utara | 53125"
                onPress={() => console.log('Location Pressed')}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Roboto-SemiBold',marginBottom:10, }}>Payments</Text>
               <InfoRow
                iconName="credit-card"
                title="Visa **** 1234"
                subtitle="Default Payment Method"
                onPress={() => console.log('Location Pressed')}
              />
            </View>
          </>
        }
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => Alert.alert("Checkout", "Checkout successful!")}>
          <Text style={{ color: '#fff',fontFamily:'Roboto-SemiBold',textAlign:'center'}}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    borderLeftWidth:3

  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  title: {
    fontFamily:'Roboto-SemiBold',
    fontSize: 14,
  },
  price: {
    color: '#888',
    fontSize: 12,
    marginVertical: 2,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 10,
  },
  qty: {
    marginHorizontal: 8,
    fontFamily:'Roboto-SemiBold',
    fontSize:12,
  },
  footer: {
    paddingVertical: 20,
    // borderColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
    textAlign:'center'
  },
  checkoutButton: {
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    width:200,
  },
  containerIcon:{
    backgroundColor:'#1e1e1e',
    width: 40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
    marginRight: 10,
  }
});
