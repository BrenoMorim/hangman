import { createContext, useState } from "react";
import { Topicos } from "../types/Topicos";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TopicoContext = createContext({});
TopicoContext.displayName = "topico";

export function TopicoProvider({ children }) {

    const [topico, setTopico] = useState(Topicos.todos);

    async function pegaTopicoArmazenado() {
        const topicoArmazenado = await AsyncStorage.getItem("topico");
        if (topicoArmazenado) setTopico(topicoArmazenado);
    }

    pegaTopicoArmazenado();

    async function atualizaTopico(novoTopico) {
				setTopico(novoTopico);
        await AsyncStorage.setItem("topico", novoTopico);
    }

    return (
        <TopicoContext.Provider
            value={{
                topico,
                atualizaTopico,
            }}
        >
            {children}
        </TopicoContext.Provider>
    );
}