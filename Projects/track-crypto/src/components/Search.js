import debounce from "lodash.debounce";
import React, { useContext } from "react";
import searchIcon from "../assets/search-icon.svg";
import { useState } from "react";
import { CryptoContext } from "../context/CryptoContext";

const SearcInput = ({ handleSearch }) => {
  const [seacrhText, setSearchText] = useState("");
  let { searchData } = useContext(CryptoContext);
  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  return (
    <>
      <form
        className="w-96  absolute top-2 right-1 flex items-center  
    
    ml-7 font-nunito

    "
      >
        <input
          type="text"
          nama="search"
          onChange={handleInput}
          value={seacrhText}
          className="w-full rounded bg-gray-200
           placeholder: text-white pl-2
           required outline-0 border border-transparent 
           focus:border-cyan "
          placeholder="search here.."
        />

        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} className="w-full h-auto" alt="search" />
        </button>
      </form>

      {seacrhText.length > 0 ? (
        <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md ">
          {searchData ? 
            searchData.map(coins => { return <li
            className="flex items-center ml-4 my-2 cursor-pointer"
            key = {coins.id}>

                  <img className="w-[1rem] h-[1rem] mx-1.5" src={coins.thumb} alt={coins.name} />
                  <span>{coins.name}</span>
                </li> })
           : 
            <h2> Loading . . .</h2>
          }
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);
  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);
  return (
    <div>
      <SearcInput handleSearch={debounceFunc} />
    </div>
  );
};
export default Search;
