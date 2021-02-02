/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { GithubContext } from "../context/githubJobProvider";

export default function Search() {
  const { setSearchValue, ctxData, setSavedValue } = useContext(GithubContext);

  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const typedValue = inputRef.current.value.trim();
    if (!ctxData.find((o) => o.hasOwnProperty([typedValue]))) {
      setSearchValue(typedValue);
      setSavedValue("");
    } else {
      setSavedValue(typedValue);
    }
  };

  return (
    <Flex
      onSubmit={onSubmit}
      as="form"
      p="4"
      justify="center"
      align="center"
      w="100%"
      h="100px"
    >
      <Input
        focusBorderColor="teal.100"
        borderRadius="sm"
        w="50%"
        placeholder="Search jobbs"
        size="sm"
        mr="2"
        type="text"
        name="search"
        ref={inputRef}
      />
      <Button colorScheme="teal" size="sm" type="submit">
        Search
      </Button>
    </Flex>
  );
}
