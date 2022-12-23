import { createContext, useState } from "react";
import { Chances, Dificuldades } from "../types/Dificuldades";

export const DificuldadeContext = createContext({});

export function DificuldadeProvider({ children }) {
    const [dificuldade, setDificuldade] = useState(Dificuldades.facil);

    const chances = Chances[dificuldade];

    function trocarDificuldade() {
        if (dificuldade == Dificuldades.facil) {
            setDificuldade(Dificuldades.medio);
        }
        else if (dificuldade == Dificuldades.medio) {
            setDificuldade(Dificuldades.dificil);
        }
        else {
            setDificuldade(Dificuldades.facil);
        }
    }

    return (
        <DificuldadeContext.Provider
            value={{
                dificuldade,
                trocarDificuldade,
                chances,
            }}
        >
            {children}
        </DificuldadeContext.Provider>
    );
}