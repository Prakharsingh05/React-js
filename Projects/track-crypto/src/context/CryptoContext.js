import {createContext, useState} from "react";

// create context object

export const CryptoContext = createContext({});

// create the provider component


export const CryptoProvider=({children})=>{
     const {cryptoData , setCryptoData} = useState();
                
        const getCryptoData = async () =>{

            try{
                const data =await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`)


            }catch(error){
                console.log("Error getting crypto data", error);
            }

        } 

    return(

        <CryptoContext.Provider value={{}}>

        {children}
        </CryptoContext.Provider>
    )


}