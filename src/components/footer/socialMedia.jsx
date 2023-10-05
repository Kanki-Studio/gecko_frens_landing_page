import React from "react";
import { Box } from "@chakra-ui/react";

const SocialMedia = ({ item }) => {
  return (
    <Box
      w="48px"
      h="48px"
      bg={item.color}
      display={"grid"}
      placeItems={"center"}
      borderRadius={"100%"}
      fontSize={"20"}
      cursor={"pointer"}
      boxShadow={
        "2px 3px 10px 0px rgba(0, 0, 0, 0.50) inset, -3px -2px 10px 0px rgba(255, 255, 255, 0.50) inset"
      }
    >
      {item.icon}
    </Box>
  );
};

export default SocialMedia;
