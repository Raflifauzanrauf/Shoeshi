import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type SettingItemProps = {
  icon: string;
  title: string;
  subtitle: string;
  titleColor?: string;
};
const ProfileScreen = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(true);


  return (
    <ScrollView style={styles.container}>
          <Text style={styles.headerText}>PROFILE SETTING</Text>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../../../../../assets/images/man.png')} // ganti sesuai path foto kamu
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Scarlett Davis</Text>
          <Text style={styles.profileEmail}>Scarlettdavis@gmail.com</Text>
        </View>
      </View>

      {/* General Section */}
      <Text style={styles.sectionTitle}>General</Text>
      <View style={styles.card}>
        <SettingItem icon="user" title="Edit Profile" subtitle="Change profile picture, number, E-mail" />
        <SettingItem icon="lock" title="Change Password" subtitle="Update and strengthen account security" />
        <SettingItem icon="shield" title="Terms of Use" subtitle="Protect your account now" />
        <SettingItem icon="credit-card" title="Add Card" subtitle="Securely add payment method" />
      </View>

      {/* Preferences Section */}
      <Text style={styles.sectionTitle}>Preferences</Text>
      <View style={styles.card}>
        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingTitle}>Notification</Text>
            <Text style={styles.settingSubtitle}>Customize your notification preferences</Text>
          </View>
          <Switch
            value={notificationEnabled}
            onValueChange={() => setNotificationEnabled(prev => !prev)}
            trackColor={{ false: '#ccc', true: '#333' }}
            thumbColor={notificationEnabled ? '#1e1e1e' : '#ccc'}
          />
        </View>
        <SettingItem icon="help-circle" title="FAQ" subtitle="Securely add payment method" />
        <SettingItem icon="log-out" title="Log Out" subtitle="Securely log out of Account" titleColor="red" />
      </View>
    </ScrollView>
  );
};

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  subtitle,
  titleColor = '#1e1e1e',
}) => (
  <TouchableOpacity style={styles.settingRow}>
    <View style={styles.iconContainer}>
      <Icon name={icon} size={16} color="#1e1e1e" />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={[styles.settingTitle, { color: titleColor }]}>{title}</Text>
      <Text style={styles.settingSubtitle}>{subtitle}</Text>
    </View>
    <Icon name="chevron-right" size={18} color="#1e1e1e" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
  fontFamily: 'Roboto-Bold',
  fontSize: 16,
  color: '#1e1e1e',
  textAlign: 'center',
  marginBottom: 15,
},
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  profileName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#1e1e1e',
  },
  profileEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#999',
  },
  sectionTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#1e1e1e',
    marginBottom: 8,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    gap: 15,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  settingTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#1e1e1e',
  },
  settingSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: '#888',
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
  },
});

export default ProfileScreen;
