import { useContext, useEffect, useState } from "react";
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
import * as Animatable from 'react-native-animatable';
import Texto from "../../components/Texto";

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
    const letraNormalizada = letra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (letrasUsadas.includes(letraNormalizada)) return letra;
    return "_";
  });

  useEffect(() => {
    if (erros >= chances)
      setResultadoJogo(EstadosJogo.perdeu);
    if (!progressoAtual.includes("_"))
      setResultadoJogo(EstadosJogo.ganhou);
    }, [letrasUsadas]);
    
  function chutar() {
    if (resultadoJogo != EstadosJogo.emAndamento || letraEscolhida == "") return;
    if (!letrasUsadas.includes(letraEscolhida)) {
      setLetrasUsadas([...letrasUsadas, letraEscolhida]);
      setLetraEscolhida("");
    }
    const palavraNormalizada = palavraSecreta.join("").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (!palavraNormalizada.includes(letraEscolhida)) {
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

      <Animatable.View animation={"bounceIn"} duration={2000} style={estilos.progresso}>
        <ImagemForca style={estilos.ImagemForca} numeroErros={erros} width={120} height={200}/>
        <Texto cor={temas.laranja} tamanho={22} peso={"600"} margemHorizontal={16}>
          {progressoAtual.join(" ")}
        </Texto>
      </Animatable.View>

      <Animatable.View animation={"bounceInLeft"} duration={2000}>
        <Texto cor={temas.corTextos}>{`${textos.chancesRestantes} ${chances - erros}`}</Texto>
        <Texto cor={temas.corTextos}>{letrasUsadas.length > 0 && textos.letrasJaEscolhidas}</Texto>
        <Texto cor={temas.corTextos}>{letrasUsadas.join(" ")}</Texto>
      </Animatable.View>
      
      <Animatable.View animation={"bounceInRight"} duration={2000} style={estilos.chuteContainer}>
        <Botao tamanhoFonte={24} callback={chutar} texto={textos.botaoChutar} corFundo={temas.laranja} corTextos={temas.corTextos}/>
        <Texto cor={temas.corTextos}>{letraEscolhida == "" ? "_" : letraEscolhida}</Texto>
      </Animatable.View>

      <Animatable.View animation={"bounceInUp"} duration={2000}>
        <Teclado letrasUsadas={letrasUsadas}/>
      </Animatable.View>
    </SafeAreaView>
    </LetraEscolhidaContext.Provider>
  );
}
