// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

/* Importando biblioteca para os icones */
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

/* ********** IMPORTs de TELAS ********** */
import Login from './Screens/login';
import Home from './Screens/home';
import Feed from './Screens/feed';
import Counter from './Screens/counter';
import Products from './Screens/products';
import SignIn from './Screens/singIn';

/* ********* NAVEGAÇÃO BOTTOM TABs */
function BottomTabs(){
  const BottomTab = createBottomTabNavigator();

  return(
    <BottomTab.Navigator
      /* Primeira tela a aparecer quando o projeto rodar */
      initialRouteName='Home' 

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

        {/* ***** HOME ***** */}
        <BottomTab.Screen name='Home' component={Home}
        /* Colocando um ícone na opção */
        options={{
          tabBarIcon: () => (
            /* Para chamar o ícone desejado é necessário saber o nome dele no incons.expo */
            <MaterialIcons name='home' size={30} color='#ffff'/>
          )
        }}/>

        {/* ***** FEED ***** */}
        <BottomTab.Screen name='Feed' component={Feed}
        options={{
          tabBarIcon: () =>(
            <MaterialIcons name='feed' size={30} color='#ffff'/>
          )
        }}/>

        {/* ***** PRODUCTS ***** */}
        <BottomTab.Screen name='Products' component={Products}
        options={{
          tabBarIcon: () => (
            <Fontisto name="shopping-bag" size={24} color='#ffff' />
          )
        }}/>

        {/* ***** COUNTER ***** */}
        <BottomTab.Screen name='Counter' component={Counter}
        options={{
          tabBarIcon: () =>(
            <MaterialCommunityIcons name="counter" size={24} color='#ffff' />
          )
        }}/>

      </BottomTab.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* LOGIN */}
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}/>
        <Stack.Screen options={{headerShown: false}} name='Sign In' component={SignIn}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

