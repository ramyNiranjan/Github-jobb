import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Company from "../components/Company";
import Info from "../components/Info";
import Layout from "../components/layout/Layout";
import { SkeletonItem } from "../components/Skeleton";
import { fetchJobById } from "../utils/fetchFromGH";

export default function JobbItem() {
  const { id } = useParams();
  const { data, isLoading, isError } = fetchJobById(id);
  return (
    <Layout>
      {isError && (
        <Info
          message="Something went wrong, please refresh the page or try again later"
          error
        />
      )}
      {isLoading && <SkeletonItem />}
      {data && (
        <Flex direction="column" m="4">
          <Flex direction="column">
            <Box color="gray.500">{`${data?.type}/${data?.location}`}</Box>
            <Heading size="lg">{data?.title}</Heading>
          </Flex>

          <Company
            company_logo={data?.company_logo}
            company_url={data?.company_url}
            company={data?.company}
            size="75px"
            fontSize="xl"
          />

          <Box
            color="gray.600"
            m="3"
            as="p"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
          <Box
            color="gray.900"
            m="3"
            as="p"
            fontWeight="bold"
            dangerouslySetInnerHTML={{ __html: data?.how_to_apply }}
          />
        </Flex>
      )}
    </Layout>
  );
}
