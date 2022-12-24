import { createContext, useState } from "react";
import { Chances, Dificuldades } from "../types/Dificuldades";

export const DificuldadeContext = createContext({});

export function DificuldadeProvider({ children }) {
    const [dificuldade, setDificuldade] = useState(Dificuldades.facil);

    const chances = Chances[dificuldade];

    return (
        <DificuldadeContext.Provider
            value={{
                dificuldade,
                setDificuldade,
                chances,
            }}
        >
            {children}
        </DificuldadeContext.Provider>
    );
}