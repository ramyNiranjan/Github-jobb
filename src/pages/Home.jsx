import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import JobbList from "../components/JobbList";
import Layout from "../components/layout/Layout";
import Search from "../components/Search";

export default function Home() {
  return (
    <Layout className="App">
      <Box>
        <Heading mt="6" align="center">
          Github Jobbs
        </Heading>

        <Search />
      </Box>

      <JobbList />
    </Layout>
  );
}
