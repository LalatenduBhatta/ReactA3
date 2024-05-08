import { createContext, useContext } from "react";

let userContext = createContext()


export function UserContextAPI({ children }) {
    let user = { username: "xyz", email: "xyz@gmail.com" }
    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

export function useUser() {//custom hook
    return useContext(userContext)

}