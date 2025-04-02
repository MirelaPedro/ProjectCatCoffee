// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Login from './Screens/login';
import Home from './Screens/home';
import Counter from '../Screens/counter';


export default function App() {

  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer> {/* Só pode haver apenas um NavigationContainer por projeto */}
      <BottomTab.Navigator 
      /* Primeira tela a aparecer quando o projeto rodar */
      initialRouteName='Login' 

      /* Style da nevegação bottomTab */
      screenOptions={{
        /* Para quando está ativado */
        tabBarActiveTintColor: '#4a4341',
        tabBarActiveBackgroundColor: '#d19f8e',
        /* Para quando está inativado */
        tabBarInactiveBackgroundColor: '#f4bfad',
        tabBarInactiveTintColor: '#ffff',
        /* Estilização do cabeçalho */
        headerStyle:{
          backgroundColor: '#f4bfad'
        },
        /* Estilização do cabeçalho */
        headerTintColor: '#4a4341',
        headerTitleAlign: 'left'
      }}>

        {/* LOGIN */}
        <BottomTab.Screen name='Login' component={Login}
        /* Colocando um ícone na opção */
        options={{
          tabBarIcon: () => (
            /* Para chamar o ícone desejado é necessário saber o nome dele no incons.expo */
            <MaterialIcons name='login' size={24} color='#ffff'/>
          )
        }}/>

        {/* HOME */}
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

