import React from "react";
import Badge from "src/components/badge";
import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";

const CharacterCards = ({ name, image, price, type, number }) => {
  return (
    <Box
      position={"relative"}
      borderRadius={"20px"}
      bg="#1A1D22"
      pt="24px"
      cursor={"pointer"}
    >
      <Box position={"absolute"} left="5%">
        <Badge type={type} />
      </Box>
      <Image
        src={image}
        alt={name}
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
        <Text>{`#${number}`}</Text>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text fontFamily={"Azonix"} fontSize={"16px"}>
            {name}
          </Text>
          <Text fontFamily={"Azonix"} fontSize={"16px"}>
            ETH {price}
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

export default CharacterCards;
