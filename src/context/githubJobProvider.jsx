import React, { createContext, useState } from "react";
import { useFetch } from "../utils/fetchFromGH";
import { manipulateUserValue } from "../utils/helper";

const GithubContext = createContext();

function GithubJobProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [savedValue, setSavedValue] = useState("");

  const { data, isLoading, isError } = useFetch(
    manipulateUserValue(searchValue)
  );

  return (
    <GithubContext.Provider
      value={{
        ctxData: data || [],
        ctxIsLoading: isLoading,
        ctxIsError: isError,
        setSearchValue,
        searchValue,
        savedValue,
        setSavedValue,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export { GithubJobProvider, GithubContext };
