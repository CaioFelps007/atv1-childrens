
import { View, Text } from "react-native";
import { estilos } from "../styles/StyleSheet";


export default function Home({ children }) {
  return (
    <View style={estilos.container}>
      {children}
    </View>



  )

}