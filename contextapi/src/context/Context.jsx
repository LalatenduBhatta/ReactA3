import { createContext, useContext, useState } from "react";

const contextVariable = createContext();

export function ContextWrapperFunction({ children }) {
    const [count, setCount] = useState(0)
    return (
        <contextVariable.Provider value={{ count, setCount }}>
            {children}
        </contextVariable.Provider>
    )
}

export function useCount() {
    return useContext(contextVariable)
}