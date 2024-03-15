import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default function Props({ text, fncbutton }) {


    return (


        <TouchableOpacity style={{
            height: 50,
            width: 150,
            borderColor: 'black',
            borderWidth: 2,
            shadowColor: 'black',
            shadowRadius: 15,
            backgroundColor: 'lima',
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        }} onPress={fncbutton}>
            <Text>{text}</Text>

        </TouchableOpacity>


    );

}