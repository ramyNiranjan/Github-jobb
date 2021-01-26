import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import CustomImage from "./CustomImage";

export default function Company({
  company_logo,
  company_url,
  company,
  size,
  fontSize,
}) {
  return (
    <Box as="a" target="_blank" rel="noopener noreferrer" href={company_url}>
      <Flex justify="around" align="center" mb="1">
        <CustomImage url={company_logo} size={size} />
        <Box ml="2" color="gray.500" fontSize={fontSize} noOfLines={1}>
          {company}
        </Box>
      </Flex>
    </Box>
  );
}
