import { createContext, useState } from "react";

export const IdiomaContext = createContext({});

export function IdiomaProvider({ children }) {
    const [idioma, setIdioma] = useState("português");

    return (
        <IdiomaContext.Provider
            value={{
                idioma,
                setIdioma,
            }}
        >
            {children}
        </IdiomaContext.Provider>
    );
}