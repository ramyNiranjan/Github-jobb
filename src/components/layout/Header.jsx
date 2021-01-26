import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GithubContext } from "../../context/githubJobProvider";
import { ChakraLink } from "../JobbCard";

export default function Header() {
  const { setSearchValue } = useContext(GithubContext);
  return (
    <Flex px="6" py="3" bg="blue.200" w="100vw" justify="space-between">
      <ChakraLink to="/" onClick={() => setSearchValue("")}>
        Logo
      </ChakraLink>
      <ChakraLink to="">github</ChakraLink>
    </Flex>
  );
}
