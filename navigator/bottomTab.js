// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Login from './Screens/login';
import Home from './Screens/home';


export default function App() {

  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Login' component={Login}/>
        <BottomTab.Screen name='Home' component={Home}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}