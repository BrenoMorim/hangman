import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Botao from "../../components/Botao";
import Logo from "../../components/Logo";
import { DificuldadeContext } from "../../contexts/DificuldadeContext";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { TemaContext } from "../../contexts/TemaContext";
import { escolherPalavraSecreta } from "../../service/escolherPalavraSecreta";

export default function PaginaInicial() {
  const navegacao = useNavigation();
  const { temas, temaAtual, trocarTema } = useContext(TemaContext);
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
      
      <Botao callback={trocarIdioma} texto={"Trocar Idioma"} corFundo={temas.corTextos} corTextos={temas.laranja}/>
      <Text style={estilos.texto}>Idioma Atual: {idioma}</Text>
      
      <Botao callback={trocarTema} texto={"Trocar Tema"} corFundo={temas.corTextos} corTextos={temas.laranja}/>
      <Text style={estilos.texto}>Tema atual: {temaAtual}</Text>

      <Botao callback={trocarDificuldade} texto={"Trocar Dificuldade"} corFundo={temas.corTextos} corTextos={temas.laranja}/>
      <Text style={estilos.texto}>Dificuldade atual: {dificuldade}</Text>
    </SafeAreaView>
  );
}

const getEstilo = (tema) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tema.corFundo
  },
  texto: {
    fontSize: 24,
    fontWeight: "400",
    textTransform: "capitalize",
    color: tema.corTextos
  }
});