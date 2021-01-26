import React, { createContext, useState } from "react";
import { useFetch } from "../utils/fetchFromGH";

const GithubContext = createContext();

function GithubJobProvider({ children }) {
  const [searchValue, setSearchValue] = useState(null);

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
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export { GithubJobProvider, GithubContext };
