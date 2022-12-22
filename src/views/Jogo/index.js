import { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Teclado from "../../components/Teclado";
import { LetraEscolhidaContext } from "../../contexts/LetraEscolhidaContext";
import { TemaContext } from "../../contexts/TemaContext";

export default function Jogo() {

  const {
    temas,
  } = useContext(TemaContext);  
  const estilos = getEstilo(temas);
  
  const [letraEscolhida, setLetraEscolhida] = useState("");

  const palavraSecreta = "MORANGO".split("");
  const [letrasUsadas, setLetrasUsadas] = useState([]);

  function chutar() {
    if (!letrasUsadas.includes(letraEscolhida)) {
      setLetrasUsadas([...letrasUsadas, letraEscolhida]);
      setLetraEscolhida("");
    }
  }

  return (
    <LetraEscolhidaContext.Provider value={{letraEscolhida, setLetraEscolhida}}>
    <SafeAreaView style={estilos.container}>
      <View style={estilos.titulosContainer}>
        <Text style={estilos.tituloBold}>Hang</Text><Text style={estilos.titulo}>Man</Text>
      </View>

      <Text style={estilos.subtitulo}>
        {palavraSecreta.map(letra => {
          if (letrasUsadas.includes(letra)) return letra;
          return "_";
        }).join(" ")}
      </Text>

      <View>
        <Text style={estilos.subtitulo}>Letras já escolhidas:</Text>
        <Text style={estilos.subtitulo}>{letrasUsadas.join(" ")}</Text>
      </View>
      
      <View style={estilos.chuteContainer}>
        <TouchableOpacity style={estilos.botao} onPress={chutar}>
          <Text style={estilos.subtitulo}>Chutar</Text>
        </TouchableOpacity>
        <Text style={estilos.subtitulo}>{letraEscolhida ?? "_"}</Text>
      </View>
      <Teclado letrasUsadas={letrasUsadas}/>
    </SafeAreaView>
    </LetraEscolhidaContext.Provider>
  );
}

const getEstilo = (tema) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: tema.corFundo,
      flex: 1
    },
    titulosContainer: {
      display: "flex",
      flexDirection: "row",
      marginVertical: 24
    },
    titulo: {
      color: tema.corTextos,
      fontSize: 56,
      fontWeight: "bold"
    },
    tituloBold: {
      color: tema.laranja,
      fontWeight: "bold",
      fontSize: 56
    },
    subtitulo: {
      color: tema.corTextos,
      marginVertical: 10,
      fontSize: 24
    },
    input: {
      borderColor: tema.corTextos,
      borderWidth: 4,
      padding: 10,
      fontSize: 24,
      textAlign: "center",
      color: tema.corTextos
    },
    botao: {
      backgroundColor: tema.laranja,
      borderRadius: 12,
      paddingVertical: 4,
      paddingHorizontal: 8,
      marginRight: 24
    },
    chuteContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "baseline"
    }
  })
}