import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Botao({texto, callback, corTextos, corFundo, selecionado=false}) {

  const estilos = getEstilo(corTextos, corFundo, selecionado);

  return (
    <TouchableOpacity style={estilos.botao} onPress={callback}>
      <Text style={estilos.botaoTexto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const getEstilo = (corTextos, corFundo, selecionado) => StyleSheet.create({
  botao: {
    marginVertical: 24,
    marginHorizontal: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: corFundo,
    borderRadius: 12,
    borderColor: corTextos,
    borderWidth: selecionado ? 4 : 0
},
botaoTexto: {
    color: corTextos,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center"
},
});