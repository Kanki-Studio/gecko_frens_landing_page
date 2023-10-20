import React from "react";
import Layout from "src/layout";
import { Text, Container, Image, Center, Box, Button } from "@chakra-ui/react";
import character from "src/assets/character.png";
import Stats from "./components/stats";

const Character = () => {
  return (
    <Layout>
      <Container maxW="container.xl" py="100px">
        <Text
          position={"absolute"}
          fontSize={"150px"}
          fontFamily={"Azonix"}
          opacity={"0.1"}
          zIndex={"-1"}
        >
          Gecko frens
        </Text>
        <Box className="grid">
          <Box>
            <Center>
              <Image src={character} alt="character" />
            </Center>
          </Box>
          <Box>
            <Text fontFamily={"Azonix"} fontSize={"40px"} mb="10px">
              Kraven
            </Text>

            <Box display="flex" flexDir="column" gap="10px">
              <Stats title={"attack"} stat={85} />
              <Stats title={"defense"} stat={70} />
              <Stats title={"HP"} stat={80} />
            </Box>

            <Text fontFamily={"Azonix"} fontSize="16px" mt="50px">
              Biography
            </Text>
            <Text>
              Kraven the Hunter is a formidable character. As a skilled big game
              hunter, players take on the role of Sergei Kravinoff, equipped
              with enhanced physical abilities that include superhuman strength,
              agility, and combat skills. Kraven's signature lion's head vest
              and his obsession with hunting Spider-Man make him a unique and
              complex character to control. In the game, you'll navigate
              challenging missions and face off against iconic adversaries like
              Spider-Man, using Kraven's unique skills and his unwavering code
              of honor to achieve your goals.
            </Text>

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
      </Container>
    </Layout>
  );
};

export default Character;
