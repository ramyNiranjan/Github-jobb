import {
  Box,
  Flex,
  Heading,
  Text,
  Tag,
  chakra,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { convertToReadableDate, removeHTMLTages } from "../utils/helper";
import Company from "./Company";

export const ChakraLink = chakra(Link);
export default function JobCard({
  id,
  type,
  created_at,
  company_url,
  company,
  location,
  title,
  description,
  company_logo,
}) {
  return (
    <Flex
      h="100%"
      direction="column"
      px="3"
      py="2"
      _hover={{ boxShadow: "lg" }}
      boxShadow="md"
      justify="space-between"
      style={{ transition: "all 200ms ease" }}
      wordBreak="break-all"
    >
      <Company
        company_logo={company_logo}
        company_url={company_url}
        company={company}
        size="40px"
        fontSize="xs"
      />

      <Flex wordBreak="break-all" direction="column" align="start">
        <Heading colorScheme="gray" size="xs" as="h2" mb="1">
          {title}
        </Heading>
        <Box mb="1" fontSize="xs" as="p" noOfLines={2} color="gray.500">
          {removeHTMLTages(description)}
        </Box>
        <Flex w="100%" alignItems="start" justify="space-between" mb="1">
          <Tag as="strong" bg="gray.50" mb="2" size="sm">
            <Text fontSize="xs">{type}</Text>
          </Tag>
          <Tag size="sm" key="sm" bg="gray.50">
            <TagLeftIcon as={IoLocationOutline} />
            <TagLabel isTruncated noOfLines={1}>
              {location.split(",")[0]}
            </TagLabel>
          </Tag>
        </Flex>
      </Flex>

      <Flex mb="1" justify="space-between" fontSize="xs">
        <ChakraLink
          to={`/${id}`}
          cursor="pointer"
          _hover={{ color: "teal.400" }}
          fontSize="xs"
        >
          Read more
        </ChakraLink>
        <Box>{convertToReadableDate(created_at)}</Box>
      </Flex>
    </Flex>
  );
}
