import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Botao from "../../components/Botao";
import Logo from "../../components/Logo";
import MenuDificuldade from "../../components/MenusSelecao/MenuDificuldade";
import MenuIdioma from "../../components/MenusSelecao/MenuIdioma";
import MenuTema from "../../components/MenusSelecao/MenuTema";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { TemaContext } from "../../contexts/TemaContext";
import { escolherPalavraSecreta } from "../../service/escolherPalavraSecreta";
import getTextos from "../../service/getTextos";
import * as Animatable from 'react-native-animatable';
import Carregando from "../../components/Carregando";

export default function PaginaInicial() {
  
  const navegacao = useNavigation();
  const { temas } = useContext(TemaContext);
  const estilos = getEstilo(temas);

  const { idioma } = useContext(IdiomaContext);
  const textos = getTextos(idioma); 

  async function irParaTelaJogo() {
    setEstaCarregando(true);
    const palavraSecreta = await escolherPalavraSecreta(idioma);
    setEstaCarregando(false);
    navegacao.navigate("Jogo", {palavraSecreta: palavraSecreta});
  }

  const [estaCarregando, setEstaCarregando] = useState(false);

  return (
    <SafeAreaView style={estilos.container}>

      <Logo/>
      <Carregando ativado={estaCarregando}/>

      <Animatable.View animation={"bounce"} iterationCount={"infinite"} duration={3500}>
        <Botao tamanhoFonte={28} callback={async () => {await irParaTelaJogo()}} texto={textos.botaoJogar} corFundo={temas.corTextos} corTextos={temas.laranja}/>
      </Animatable.View>

      <Animatable.View animation={"bounceInRight"} duration={2500}>
        <MenuTema/>
      </Animatable.View>

      <Animatable.View animation={"bounceInLeft"} duration={2500}>
        <MenuIdioma />
      </Animatable.View>

      <Animatable.View animation={"bounceInRight"} duration={2500}>
        <MenuDificuldade />
      </Animatable.View>

    </SafeAreaView>
  );
}

const getEstilo = (tema) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tema.corFundo
  }
});