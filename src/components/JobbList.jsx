import { SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GithubContext } from "../context/githubJobProvider";

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
  } = useContext(GithubContext);

  const gettingFromCTX = () => {
    if (savedValue) {
      return findResult(ctxData, savedValue);
    } else {
      return findResult(ctxData, searchValue);
    }
  };

  return (
    <SimpleGrid minChildWidth="250px" spacing="20px" mx="4" mb="4">
      {/* Search load status */}

      {!ctxIsError && !ctxIsLoading && gettingFromCTX().length === 0 && (
        <Info message="Nothing found" />
      )}

      {ctxIsError && (
        <Info
          message="Something went wrong, please refresh the page or try again later"
          error
        />
      )}
      {ctxIsLoading && skeletonMap}
      {gettingFromCTX() &&
        gettingFromCTX().map(({ id, ...otherProps }) => (
          <JobCard {...otherProps} key={id} id={id} />
        ))}
    </SimpleGrid>
  );
}
