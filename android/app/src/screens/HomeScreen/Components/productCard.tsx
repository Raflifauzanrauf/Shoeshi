import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type ProductCardProps = {
  title: string;
  price: number;
  oldPrice?: number;
  image: any;
  onPress?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, price, oldPrice, image, onPress }) => {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.infoRow}>
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>${price}</Text>
            {oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
          </View>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="arrow-up-right" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  imageWrapper: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    transform: [
      { rotate: '-20deg' },
      { translateX: -10 },
      { translateY: -5 },
    ],
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  oldPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  arrowButton: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 20,
  },
});

export default ProductCard;
