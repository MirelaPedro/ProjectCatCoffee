// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Login from './Screens/login';
import Home from './Screens/home';


export default function App() {

  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator 
      initialRouteName='Login' 
      screenOptions={{
        tabBarActiveTintColor: '#4a4341',
        tabBarActiveBackgroundColor: '#d19f8e',
        tabBarInactiveBackgroundColor: '#f4bfad',
        tabBarInactiveTintColor: '#ffff',

        headerStyle:{
          backgroundColor: '#f4bfad'
        },

        headerTintColor: '#4a4341',
        headerTitleAlign: 'left'

      }}>

        <BottomTab.Screen name='Login' component={Login}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name='login' size={24} color='#ffff'/>
          )
        }}/>

        <BottomTab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name='home' size={24} color='#ffff'/>
          )
        }}/>

      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

