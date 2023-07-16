import {createContext, useLayoutEffect, useState} from "react";

// create context object

export const CryptoContext = createContext({});

// create the provider component


export const CryptoProvider=({children})=>{

     const {test , setTest} = useState("this is a test state");

                
        

    return(

        <CryptoContext.Provider value={{cryptoData}}>

        {children}
        </CryptoContext.Provider>
    )


}