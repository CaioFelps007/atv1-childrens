import { View, TouchableOpacity, Text, Image } from "react-native";
import { estilos } from "../../styles/StyleSheet";
import { ImageBackground } from "react-native-web";

export default function ImageButton() {
    const imagembotao = { uri: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' }
    return (

        <View>
            <TouchableOpacity style={estilos.btnIMG} onPress={() => alert('Botao Pressionado')}>

                <Image style={estilos.imagembotao} source={imagembotao} />

            </TouchableOpacity>
        </View>

    )

}