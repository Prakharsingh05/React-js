import React from 'react'
import searchIcon from "../assets/search-icon.svg";
import { useState } from 'react';

function Search() {

  const [seacrhText, setSearchText] = useState("");

  let handleInput = (e) =>{
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
  }


  return (
    <>
    <form className='w-96  absolute top-2 right-1 flex items-center  
    
    ml-7 font-nunito

    '>
        <input type='text' nama="search"
        onChange={handleInput}
        value={seacrhText}
        className='w-full rounded bg-gray-200
           placeholder: text-white pl-2
           required outline-0 border border-transparent 
           focus:border-cyan '

        placeholder="search here.."
        />

        <button type='submit'
        className='absolute right-1 cursor-pointer'
        >

        <img src ={searchIcon} className='w-full h-auto' alt="search"/>
         </button>
      
    </form>

    {
      seacrhText.length>0 ?

      <ul>
        <li>bitcoin</li>
        <li>ethereum</li>
        <li>dogecoin</li>
        <li>bob</li>

      </ul>

      :

      null

    }
    
    
    </>
  )
}

export default Search
