import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

export function SkeletonCard() {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={3} spacing="4" />
    </Box>
  );
}
export function SkeletonItem() {
  return (
    <Flex direction="column" m="6">
      <Skeleton height="20px" mb="4" />
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={15} spacing="4" />
      <SkeletonText mt="4" noOfLines={1} spacing="4" />
    </Flex>
  );
}

export const skeletonMap = Array(10)
  .fill("")
  .map((_, idx) => <SkeletonCard key={idx} />);
