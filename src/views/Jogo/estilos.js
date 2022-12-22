import { StyleSheet } from "react-native"

export const getEstilo = (tema) => {
    return StyleSheet.create({
      container: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: tema.corFundo,
        flex: 1,
        zIndex: 0
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