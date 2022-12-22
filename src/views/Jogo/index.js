import { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import Teclado from "../../components/Teclado";
import TelaFinal from "../../components/TelaFinal";
import { LetraEscolhidaContext } from "../../contexts/LetraEscolhidaContext";
import { TemaContext } from "../../contexts/TemaContext";
import { EstadosJogo } from "../../types/EstadosJogo";
import { getEstilo } from "./estilos";

export default function Jogo() {

  const {
    temas,
  } = useContext(TemaContext);  
  const estilos = getEstilo(temas);
  const [letraEscolhida, setLetraEscolhida] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);
  const errosMaximo = 5;
  const [resultadoJogo, setResultadoJogo] = useState(EstadosJogo.emAndamento)
  const palavraSecreta = "MORANGO".split("");
  const progressoAtual = palavraSecreta.map(letra => {
    if (letrasUsadas.includes(letra)) return letra;
    return "_";
  });
  
  useEffect(() => {
    if (erros >= errosMaximo)
      setResultadoJogo(EstadosJogo.perdeu);
    if (!progressoAtual.includes("_"))
      setResultadoJogo(EstadosJogo.ganhou);
    }, [letrasUsadas])
    
  function chutar() {
    if (resultadoJogo != EstadosJogo.emAndamento) return;
    if (!letrasUsadas.includes(letraEscolhida)) {
      setLetrasUsadas([...letrasUsadas, letraEscolhida]);
      setLetraEscolhida("");
    }
    if (!palavraSecreta.includes(letraEscolhida)) {
      setErros(erros + 1);
    }
  }

  function resetarJogo() {
    setErros(0);
    setLetraEscolhida("");
    setLetrasUsadas([]);
    setResultadoJogo(EstadosJogo.emAndamento);
  }

  return (
    <LetraEscolhidaContext.Provider value={{letraEscolhida, setLetraEscolhida}}>
    <SafeAreaView style={estilos.container}>

      <TelaFinal resultadoJogo={resultadoJogo} resetarJogo={resetarJogo}/>

      <Logo/>

      <Text style={estilos.subtitulo}>
        {progressoAtual.join(" ")}
      </Text>

      <View>
        <Text style={estilos.subtitulo}>Chances restantes: {errosMaximo - erros}</Text>
        <Text style={estilos.subtitulo}>Letras já escolhidas:</Text>
        <Text style={estilos.subtitulo}>{letrasUsadas.join(" ")}</Text>
      </View>
      
      <View style={estilos.chuteContainer}>
        <TouchableOpacity style={estilos.botao} onPress={chutar}>
          <Text style={estilos.subtitulo}>Chutar</Text>
        </TouchableOpacity>
        <Text style={estilos.subtitulo}>{letraEscolhida == "" ? "_" : letraEscolhida}</Text>
      </View>
      <Teclado letrasUsadas={letrasUsadas}/>
    </SafeAreaView>
    </LetraEscolhidaContext.Provider>
  );
}
