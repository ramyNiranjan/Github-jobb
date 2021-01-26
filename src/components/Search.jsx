/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { GithubContext } from "../context/githubJobProvider";

export default function Search() {
  const { setSearchValue, ctxData } = useContext(GithubContext);

  const inputRef = useRef(null);

  const checkPreviousValue = () => {
    const inputValue = inputRef.current.value.trim();
    if (ctxData.find((o) => !o.hasOwnProperty(""))) {
      setSearchValue(inputValue);
    }
    setSearchValue(inputValue);
  };

  return (
    <Flex p="4" justify="center" align="center" w="100%" h="100px">
      <Input
        focusBorderColor="teal.100"
        borderRadius="sm"
        w="50%"
        placeholder="Search jobbs"
        size="sm"
        mr="2"
        type="text"
        ref={inputRef}
      />
      <Button colorScheme="teal" size="sm" onClick={checkPreviousValue}>
        Search
      </Button>
    </Flex>
  );
}
