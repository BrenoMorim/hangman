import { createContext, useState } from "react";
import { Chances, Dificuldades } from "../types/Dificuldades";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const DificuldadeContext = createContext({});
DificuldadeContext.displayName = "dificuldade";

export function DificuldadeProvider({ children }) {

    const [dificuldade, setDificuldade] = useState(Dificuldades.facil);

    async function pegaDificuldadeArmazenada() {        
        const dificuldadeArmazenada = await AsyncStorage.getItem("dificuldade");
        if (dificuldadeArmazenada) setDificuldade(dificuldadeArmazenada);
    }

    pegaDificuldadeArmazenada();

    async function atualizaDificuldade(novaDificuldade) {
        setDificuldade(novaDificuldade);
        await AsyncStorage.setItem("dificuldade", novaDificuldade);
    }

    const chances = Chances[dificuldade];

    return (
        <DificuldadeContext.Provider
            value={{
                dificuldade,
                atualizaDificuldade,
                chances,
            }}
        >
            {children}
        </DificuldadeContext.Provider>
    );
}