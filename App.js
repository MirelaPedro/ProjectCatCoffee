/* import {Profile, Favorites} from "./components/gallery"; */
import { View, StyleSheet} from "react-native";
import MariDoida, {Adeus} from "./components/MariDoida";
import Home from "./Screens/home";
import Login from "./Screens/login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

