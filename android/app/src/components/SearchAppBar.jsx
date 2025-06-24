// components/SearchAppBar.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchAppBar = () => {
  return (
    <View style={styles.containerAppbar}>
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
  );
};

const styles = StyleSheet.create({
  containerAppbar: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  containerAppBarTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  appBarTitle: {
    fontSize: 14,
    flex: 1,
    fontFamily: 'Roboto-Bold',
  },
  containerSeacrh: {
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 20,
  },
  containerIconSearch: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
  },
  searchTitle: {
    fontSize: 12,
    marginLeft: 5,
    fontFamily: 'Roboto-Regular',
    color: '#333',
  },
  iconsAppBar: {
    marginRight: 20,
  },
  containerSearchAppbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchAppBar;
