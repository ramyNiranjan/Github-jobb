import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GithubContext } from "../context/githubJobProvider";

export default function Info({ message, error }) {
  const { setSearchValue } = useContext(GithubContext);
  return (
    <Flex
      justify="center"
      direction="column"
      padding="6"
      boxShadow="lg"
      bg="white"
      align="center"
      mt="6"
    >
      <Heading fontSize="xl" color="red.300">
        {message}
      </Heading>
      {!error && (
        <Box
          _hover={{ color: "teal.400" }}
          fontSize="sm"
          color="gray.700"
          cursor="pointer"
          onClick={() => setSearchValue("")}
        >
          Go back to main page
        </Box>
      )}
    </Flex>
  );
}
