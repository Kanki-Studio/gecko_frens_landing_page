import React from "react";
import { Box, Text, Container, Flex, Image } from "@chakra-ui/react";
import bird from "src/assets/bird.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.xl" pt="250px">
      <Box
        borderRadius={"10px"}
        bg="#1A1D22"
        py="40px"
        px="30px"
        position={"relative"}
      >
        <Flex alignItems={"center"} gap="30px">
          <Box w="600px">
            <Text fontSize={"40px"} fontFamily={"Azonix"} textAlign={"left"}>
              What is Gecko Frens?
            </Text>
            <Text mb="24px">
              Gecko Frens is a blockchain game running on Binance Smart Chain,
              Collect Ultra- Rare digital Pets, Play with them, Experience an
              adventure, trade and earn.{" "}
            </Text>

            <Link
              to="/about"
              style={{ color: "#cafc01", textDecoration: "underline" }}
            >
              More
            </Link>
          </Box>
          <Image
            src={bird}
            alt="bird"
            position={"absolute"}
            height={"400px"}
            right={0}
            top={"-70%"}
            // w="100%"
          />
        </Flex>
      </Box>
    </Container>
  );
};

export default About;
