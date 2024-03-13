import { View } from "react-native";
import { estilos } from "./src/styles/StyleSheet";
import PrimeiroTxt from "./src/components/TextoOneComponent";
import SegundoTxt from "./src/components/TextoTwoComponent";
import TerceiroTxt from "./src/components/TextoThreeComponent";
import Home from "./src/pages/Page";
import Login from "./src/components/Buttons/LogInComponent";
import ImageButton from "./src/components/Buttons/ImgComponent";
import Signin from "./src/components/Buttons/SignInComponent";
import { Children } from "react";

// APP, onde será exibido os resultados dos components.  

export default function App() {

  return (

    // View principal/container, onde se agrupa todos os elementos para serem exibidos.
    <View style={estilos.container}>

      {/* children pai, onde agloba todos os components/filhos */}
      <Home>

        {/* Components de textos. */}
        <PrimeiroTxt />
        <Login />
        <SegundoTxt />

        {/* Components de botões */}
        <ImageButton />
        <TerceiroTxt />
        <Signin />

        {/* fechamento do component pai */}
      </Home>

    </View>



  )
}