import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagemForca from "../../components/ImagemForca";
import Logo from "../../components/Logo";
import Teclado from "../../components/Teclado";
import TelaFinal from "../../components/TelaFinal";
import { DificuldadeContext } from "../../contexts/DificuldadeContext";
import { LetraEscolhidaContext } from "../../contexts/LetraEscolhidaContext";
import { TemaContext } from "../../contexts/TemaContext";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { escolherPalavraSecreta } from "../../service/escolherPalavraSecreta";
import { EstadosJogo } from "../../types/EstadosJogo";
import Botao from '../../components/Botao';
import { getEstilo } from "./estilos";
import getTextos from "../../service/getTextos";

export default function Jogo({route}) {

  const [palavraSecreta, setPalavraSecreta] = useState(route.params?.palavraSecreta);
  const { temas } = useContext(TemaContext);  
  const estilos = getEstilo(temas);
  const [letraEscolhida, setLetraEscolhida] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);
  const { chances } = useContext(DificuldadeContext);
  const [resultadoJogo, setResultadoJogo] = useState(EstadosJogo.emAndamento);
  const { idioma } = useContext(IdiomaContext);
  const textos = getTextos(idioma);

  const progressoAtual = palavraSecreta.map(letra => {
    if (letrasUsadas.includes(letra)) return letra;
    return "_";
  });

  useEffect(() => {
    if (erros >= chances)
      setResultadoJogo(EstadosJogo.perdeu);
    if (!progressoAtual.includes("_"))
      setResultadoJogo(EstadosJogo.ganhou);
    }, [letrasUsadas])
    
  function chutar() {
    if (resultadoJogo != EstadosJogo.emAndamento || letraEscolhida == "") return;
    if (!letrasUsadas.includes(letraEscolhida)) {
      setLetrasUsadas([...letrasUsadas, letraEscolhida]);
      setLetraEscolhida("");
    }
    if (!palavraSecreta.includes(letraEscolhida)) {
      setErros(erros + 1);
    }
  }

  async function resetarJogo() {
    const novaPalavraSecreta = await escolherPalavraSecreta(idioma);
    setPalavraSecreta(novaPalavraSecreta);
    setErros(0);
    setLetraEscolhida("");
    setLetrasUsadas([]);
    setResultadoJogo(EstadosJogo.emAndamento);
  }

  return (
    <LetraEscolhidaContext.Provider value={{letraEscolhida, setLetraEscolhida}}>
    <SafeAreaView style={estilos.container}>

      <TelaFinal palavraSecreta={palavraSecreta} resultadoJogo={resultadoJogo} resetarJogo={resetarJogo}/>

      <Logo/>

      <View style={estilos.progresso}>
        <ImagemForca style={estilos.ImagemForca} numeroErros={erros} width={120} height={200}/>
        <Text style={estilos.progressoAtual}>
          {progressoAtual.join(" ")}
        </Text>
      </View>


      <View>
        <Text style={estilos.subtitulo}>{`${textos.chancesRestantes} ${chances - erros}`}</Text>
        <Text style={estilos.subtitulo}>{letrasUsadas.length > 0 && textos.letrasJaEscolhidas}</Text>
        <Text style={estilos.subtitulo}>{letrasUsadas.join(" ")}</Text>
      </View>
      
      <View style={estilos.chuteContainer}>
        <Botao callback={chutar} texto={textos.botaoChutar} corFundo={temas.laranja} corTextos={temas.corTextos}/>
        <Text style={estilos.subtitulo}>{letraEscolhida == "" ? "_" : letraEscolhida}</Text>
      </View>
      <Teclado letrasUsadas={letrasUsadas}/>
    </SafeAreaView>
    </LetraEscolhidaContext.Provider>
  );
}
