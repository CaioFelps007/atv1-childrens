import { View, TouchableOpacity, Text } from "react-native";
import { estilos } from "../../styles/StyleSheet";
import Props from "./Propriedades/props";

export default function Login() {
    btnfunction = () => {
        alert("BOTAO CLICADO");
    };
    return (
        <View>
            <Props text="Login" fncbutton={btnfunction} />
        </View>
    )

}