import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

type ProductCategoryProps = {
  label: string;
  image: ImageSourcePropType; // tipe untuk require() image lokal
};

const ProductCategory: React.FC<ProductCategoryProps> = ({ label, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    alignItems: 'center',
    marginRight: 30,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 5,
  },
  text: {
    fontFamily: 'Roboto-SemiBold',
    fontSize: 12,
  },
});

export default ProductCategory;
