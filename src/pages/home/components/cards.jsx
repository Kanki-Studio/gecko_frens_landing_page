import React from "react";
import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import character from "src/assets/gecko_art.png";
import Badge from "src/components/badge";

const Cards = () => {
  return (
    <Box
      position={"relative"}
      borderRadius={"20px"}
      bg="#1A1D22"
      pt="24px"
      cursor={"pointer"}
    >
      <Box position={"absolute"} left="5%">
        <Badge type="legendary" />
      </Box>
      <Image
        src={character}
        alt="gecko art"
        w="100%"
        height={"400px"}
        objectFit={"contain"}
      />
      <Box
        bg="#1A1D221A"
        py="30px"
        px="24px"
        borderBottomRadius={"20px"}
        w="100%"
        position={"absolute"}
        zIndex={1}
        bottom={0}
        backdropFilter={"auto"}
        backdropBlur={"20px"}
      >
        <Text>{`#${100 + 1}`}</Text>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text fontFamily={"Azonix"} fontSize={"16px"}>
            Kraven
          </Text>
          <Text fontFamily={"Azonix"} fontSize={"16px"}>
            ETH 0.0002
          </Text>
        </Flex>

        <Button
          bg="#cafc01"
          boxShadow={"inner"}
          w="100%"
          color={"#040305"}
          mt="24px"
          _hover={{
            bg: "#cafc01",
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default Cards;
