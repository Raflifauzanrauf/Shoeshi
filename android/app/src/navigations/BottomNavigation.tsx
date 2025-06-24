import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './StackNavigation';
import Feather from 'react-native-vector-icons/Feather';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';


export type BottomTabNavigationType = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  ProductScreen: undefined;
  CartScreen: undefined;
  DetailScreen: {
    product: {
      id: number;
      title: string;
      price: number;
      oldPrice?: number;
      image: any;
    };
  };
};


const Tab = createBottomTabNavigator<BottomTabNavigationType>();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName="HomeScreen" // ✅ pastikan ini ada
    screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 60,
      paddingBottom: 10,
      paddingTop: 10,
    },
  }}
>
   <Tab.Screen
    name="ProductScreen"
    component={ProductScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Feather name="box" color="#333" size={24} />
      ),
    }}
  />
  <Tab.Screen
    name="HomeScreen"
    component={HomeStackNavigator}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Feather name="home" color="#333" size={24} />
      ),
    }}
  />
  <Tab.Screen
    name="ProfileScreen"
    component={ProfileScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Feather name="user" color="#333" size={24} />
      ),
    }}
  />
</Tab.Navigator>

  );
};

export default BottomTabNavigation;
