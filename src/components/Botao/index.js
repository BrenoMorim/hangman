import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Botao({texto, callback, corTextos, corFundo}) {

  const estilos = getEstilo(corTextos, corFundo);

  return (
    <TouchableOpacity style={estilos.botao} onPress={callback}>
      <Text style={estilos.botaoTexto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const getEstilo = (corTextos, corFundo) => StyleSheet.create({
  botao: {
    marginVertical: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: corFundo,
    borderRadius: 12
},
botaoTexto: {
    color: corTextos,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center"
},
});