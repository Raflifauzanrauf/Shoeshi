import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { RouteProp, useRoute } from '@react-navigation/native';
import { BottomTabNavigationType } from '../../navigations/BottomNavigation';


const sizes = ['40', '41', '42', '43', '44'];
type DetailScreenRouteProp = RouteProp<BottomTabNavigationType, 'DetailScreen'>;
const DetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Details</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Image section */}
      <View style={styles.imageWrapper}>
        <Image source={product.image} style={styles.image} resizeMode="contain" />
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart" size={18} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Indicator */}
      <View style={styles.dotIndicator}>
        <View style={styles.dot} />
        <View style={[styles.dot, { opacity: 0.3 }]} />
        <View style={[styles.dot, { opacity: 0.3 }]} />
      </View>

      {/* Info */}
      <View style={styles.infoSection}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.price}>${product.price}</Text>
            {product.oldPrice && (
              <Text style={styles.oldPrice}>${product.oldPrice}</Text>
            )}
          </View>
        </View>

        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

        <Text style={styles.selectSize}>Select Size</Text>
        <View style={styles.sizeRow}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[styles.sizeButton, selectedSize === size && styles.sizeSelected]}
              onPress={() => setSelectedSize(size)}>
              <Text style={{ fontWeight: 'bold' }}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonTextLight}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.buttonTextDark}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: 20,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 16,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    elevation: 3,
  },
  dotIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
    marginHorizontal: 4,
  },
  infoSection: {
    backgroundColor:'#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 6,
  },
  oldPrice: {
    fontSize: 14,
    color: '#aaa',
    textDecorationLine: 'line-through',
  },
  subtitle: {
    color: '#555',
    marginVertical: 10,
  },
  selectSize: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  sizeRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  sizeButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
  sizeSelected: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  descriptionTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  descriptionText: {
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buyNowButton: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 12,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartButton: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 12,
    backgroundColor: '#eee',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTextLight: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonTextDark: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default DetailScreen;
