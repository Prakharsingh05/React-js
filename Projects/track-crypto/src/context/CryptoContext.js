import {createContext,  useState} from "react";

// create context object

export const CryptoContext = createContext({});

// create the provider component


export const CryptoProvider=({children})=>{

     const [cryptoData , setCryptoData] = useState();   

        const getcryptoData = async()=>{
            try{
                
            }catch(error){
                console.log(error);
            }
        }

                
        

    return(

        <CryptoContext.Provider value={{test}}>

        {children}
        </CryptoContext.Provider>
    )


}