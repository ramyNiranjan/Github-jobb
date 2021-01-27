import React, { createContext, useState,useEffect } from "react";
import { useFetch } from "../utils/fetchFromGH";
import { findResult } from "../utils/helper";

const GithubContext = createContext();

function GithubJobProvider({ children }) {
  const [searchValue, setSearchValue] = useState(null);
  const [savedValue, setSavedValue] = useState(null);


  const { data, isLoading, isError } = useFetch(searchValue);


  console.log(data);
  return (
    <GithubContext.Provider
      value={{
        ctxData: data,
        ctxIsLoading: isLoading,
        ctxIsError: isError,
        setSearchValue,
        searchValue,
        setSavedValue,
        savedValue,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export { GithubJobProvider, GithubContext };
