import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Botao({texto, callback, corTextos, corFundo, bold=false, selecionado=false, tamanhoFonte=18}) {

  const estilos = getEstilo(corTextos, corFundo, selecionado, tamanhoFonte, bold);

  return (
    <TouchableOpacity style={estilos.botao} onPress={callback}>
      <Text style={estilos.botaoTexto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const getEstilo = (corTextos, corFundo, selecionado, tamanhoFonte, bold) => StyleSheet.create({
  botao: {
    marginVertical: 16,
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
    fontSize: tamanhoFonte,
    fontWeight: bold ? "600" : (selecionado ? "500" : "400"),
    textAlign: "center"
},
});