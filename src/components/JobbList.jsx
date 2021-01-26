import { SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GithubContext } from "../context/githubJobProvider";
import { fetchJobs } from "../utils/fetchFromGH";
import JobCard from "./JobbCard";
import { skeletonMap } from "./Skeleton";
import { findResult } from "../utils/helper";
import Info from "./Info";

export default function JobbList() {
  const { ctxData, ctxIsLoading, ctxIsError, searchValue } = useContext(
    GithubContext
  );

  const { data, isLoading, isError } = fetchJobs();

  const checkingSearch = () => {
    return searchValue ? findResult(ctxData, searchValue) : data;
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
        searchValue &&
        findResult(ctxData, searchValue).length === 0 && (
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
      {isLoading && skeletonMap}
      {data &&
        checkingSearch().map(({ id, ...otherProps }) => (
          <JobCard {...otherProps} key={id} id={id} />
        ))}
    </SimpleGrid>
  );
}
