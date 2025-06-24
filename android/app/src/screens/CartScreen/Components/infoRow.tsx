import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
  iconName: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

const InfoRow: React.FC<Props> = ({ iconName, title, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.containerIcon}>
        <Icon name={iconName} size={18} color="#fff" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Icon name="chevron-right" size={18} />
    </TouchableOpacity>
  );
};

export default InfoRow;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  containerIcon: {
    backgroundColor: '#1e1e1e',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  title: {
    fontFamily: 'Roboto-SemiBold',
    fontSize: 12,
  },
  subtitle: {
    fontFamily: 'Roboto-Light',
    fontSize: 10,
  },
});
