import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen = () => {
  const profile = {
    name: 'Rafli Fauzan',
    email: 'rafli@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3', // contoh foto random online
  };

  const menuItems = [
    { id: '1', label: 'Edit Profile', icon: 'edit-2' },
    { id: '2', label: 'Settings', icon: 'settings' },
    { id: '3', label: 'Help Center', icon: 'help-circle' },
    { id: '4', label: 'Logout', icon: 'log-out' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.email}>{profile.email}</Text>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <Icon name={item.icon} size={20} color="#333" />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  menuLabel: {
    fontSize: 16,
    color: '#333',
  },
});


export default ProfileScreen;
