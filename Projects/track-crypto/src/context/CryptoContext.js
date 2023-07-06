import {createContext, useState} from "react";

// create context object

export const CryptoContext = createContext({});

// create the provider component

export const CryptoProvider=({children})=>{
                
            const [first , setfirst] = useState("this is test state");

    return(

        <CryptoContext.Provider value={{test}}>


        </CryptoContext.Provider>
    )


}