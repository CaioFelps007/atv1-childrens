import { View, TouchableOpacity, Text } from "react-native";
import { estilos } from "../../styles/StyleSheet";

export default function Login() {
    return (
        <View>
            <TouchableOpacity style={estilos.btn2} onPress={() => alert('Log In')}>
                <Text style={estilos.title}> Log In</Text>
            </TouchableOpacity>
        </View>
    )

}