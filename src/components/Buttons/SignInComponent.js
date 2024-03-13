import { View, TouchableOpacity, Text } from "react-native";
import { estilos } from "../../styles/StyleSheet";

export default function Signin() {
    return (
        <View>
            <TouchableOpacity style={estilos.btn} onPress={() => alert('Sign In')}>
                <Text style={estilos.title2}> Sign In</Text>
            </TouchableOpacity>
        </View>
    )

}