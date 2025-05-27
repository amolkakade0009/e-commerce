import { createContext, useState } from "react";

export const UrlContext = createContext();

export const UrlContextProvider = ({children})=>{   // this children is the destructured way of wirting of props.children we write directly {childeran}

    const [url,setUrl] = useState("http://localhost:8080")

    return(
        <UrlContext.Provider value={{url,setUrl}}>
            {children}
        </UrlContext.Provider>
    )

}