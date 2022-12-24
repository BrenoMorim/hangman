import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Botao from "../../components/Botao";
import Logo from "../../components/Logo";
import MenuDificuldade from "../../components/MenusSelecao/MenuDificuldade";
import MenuIdioma from "../../components/MenusSelecao/MenuIdioma";
import MenuTema from "../../components/MenusSelecao/MenuTema";
import { DificuldadeContext } from "../../contexts/DificuldadeContext";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { TemaContext } from "../../contexts/TemaContext";
import { escolherPalavraSecreta } from "../../service/escolherPalavraSecreta";

export default function PaginaInicial() {
  const navegacao = useNavigation();
  const { temas } = useContext(TemaContext);
  const { idioma, trocarIdioma } = useContext(IdiomaContext);
  const { dificuldade, trocarDificuldade } = useContext(DificuldadeContext);
  const estilos = getEstilo(temas);

  async function irParaTelaJogo() {
    const palavraSecreta = await escolherPalavraSecreta();
    navegacao.navigate("Jogo", {palavraSecreta: palavraSecreta});
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Logo/>
      <Botao callback={async () => {await irParaTelaJogo()}} texto={"Jogar"} corFundo={temas.corTextos} corTextos={temas.laranja}/>
      <MenuTema/>
      <MenuIdioma />
      <MenuDificuldade />
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