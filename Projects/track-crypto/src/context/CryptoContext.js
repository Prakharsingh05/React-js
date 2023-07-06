import {createContext, useState} from "react";

// create context object

export const CryptoContext = createContext({});

// create the provider component

export const CryptoProvider=({children})=>{
                
         

    return(

        <CryptoContext.Provider value={{}}>

        {children}
        </CryptoContext.Provider>
    )


}