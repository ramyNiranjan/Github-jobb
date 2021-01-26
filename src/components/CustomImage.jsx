import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function CustomImage({ url, size }) {
  return (
    <Box borderRadius="full">
      <Image
        name="Dan Abrahmov"
        borderRadius="full"
        boxSize={size}
        src={url}
        alt="image"
        objectFit="contain"
        objectPosition="center center"
        fallbackSrc="https://via.placeholder.com/150"
      />
    </Box>
  );
}
