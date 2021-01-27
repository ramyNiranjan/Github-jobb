import { SimpleGrid } from "@chakra-ui/react";
import React, { useContext, useEffect,useState } from "react";
import { GithubContext } from "../context/githubJobProvider";
import { fetchJobs } from "../utils/fetchFromGH";
import JobCard from "./JobbCard";
import { skeletonMap } from "./Skeleton";
import { findResult } from "../utils/helper";
import Info from "./Info";

export default function JobbList() {
  const {
    ctxData,
    ctxIsLoading,
    ctxIsError,
    searchValue,
    savedValue,
       disSearch,
        disSaved
  } = useContext(GithubContext);

  const { data, isLoading, isError } = fetchJobs();
  

 
  const checkingSearch = (ctxData,searchValue,savedValue) => {
    if (!searchValue) {
      return data;
    } else if (ctxData.find((o) => o.hasOwnProperty([searchValue]))) {
      return findResult(ctxData, savedValue);
    
    } else {
     
      return findResult(ctxData, searchValue);
    }
  };



  return (
    <SimpleGrid minChildWidth="250px" spacing="20px" mx="4" mb="4">
      {/* Search load status */}
      {!ctxIsError && isError && (
        <Info
          message="Something went wrong, please refresh the page or try again later"
          error
        />
      )}
      {!ctxIsError &&
        !ctxIsLoading &&
        findResult(ctxData, searchValue).length === 0 &&
        findResult(ctxData, savedValue).length === 0 && (
          <Info message="Nothing found" />
        )}
      {ctxIsLoading && !isLoading && skeletonMap}

      {/* Initail page load status */}
      {isError && (
        <Info
          message="Something went wrong, please refresh the page or try again later"
          error
        />
      )}
      {isLoading  && skeletonMap}
      {data && 
       checkingSearch(ctxData,searchValue,savedValue).map(({ id, ...otherProps }) => (
          <JobCard {...otherProps} key={id} id={id} />
        ))}
    </SimpleGrid>
  );
}








 // useEffect(() => {
  //  checkingSearch(ctxData,searchValue,savedValue)
  // }, [ctxData,searchValue,savedValue])

  // const checkingSearch = (ctxData,searchValue,savedValue) => {
  //   if (!searchValue) {
  //     setDisplayValue(data)
  //     // return data;
  //   } else if (ctxData.find((o) => o.hasOwnProperty([searchValue]))) {
  //        setDisplayValue(findResult(ctxData, savedValue))
  //     // return findResult(ctxData, savedValue);
  //   } else {
  //     console.log('find me')
  //     console.log('what happen here',findResult(ctxData, searchValue))
  //     setDisplayValue(findResult(ctxData, searchValue))
  //     // return findResult(ctxData, searchValue);
  //   }
  // };