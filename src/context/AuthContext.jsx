import { createContext, useContext } from react;
import { useState } from "react"; 

export const AuthContext = createContext(null);
export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState()
    return(<AuthContext.Provider value ={{user,setUser}}>{children}</AuthContext.Provider>)
}