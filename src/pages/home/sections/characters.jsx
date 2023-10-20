import React from "react";
import {
  Box,
  Text,
  Container,
  Grid,
  GridItem,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import Cards from "../components/cards";
import bowman from "src/assets/character.png";

const Characters = () => {
  return (
    <Container maxW={"container.xl"} py="250px">
      <Text fontFamily={"Azonix"} fontSize={"30px"}>
        Meet Our <br /> Popular Characters
      </Text>
      <Text>Gecko Frens</Text>

      <Box mt="30px">
        <Grid templateColumns={"repeat(3, 1fr)"} gap="24px">
          {[...new Array(6)].map((_, idx) => (
            <GridItem key={idx + 1}>
              <Cards />
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box
        mt="250px"
        position={"relative"}
        borderRadius={"10px"}
        bg="#1A1D22"
        px="30px"
        py="40px"
      >
        <Grid templateColumns={"repeat(2, 1fr)"} alignItems={"center"}>
          <GridItem>
            <Text fontFamily={"Azonix"} fontSize={"30px"}>
              Characters
            </Text>
            <Box w="400px">
              <Text>
                Each character has their own power, choose the good gecko and
                engage in battle with friends in a winner takes all style.
              </Text>

              <Button
                bg="#cafc01"
                boxShadow={"inner"}
                w="auto"
                color={"#040305"}
                mt="24px"
                _hover={{
                  bg: "#cafc01",
                }}
              >
                Check Characters
              </Button>
            </Box>
          </GridItem>
          <GridItem>
            <Center>
              <Image
                src={bowman}
                alt="bowman"
                position={"absolute"}
                right={"10%"}
                h="400px"
                transition={"transform 0.3s ease"}
                _hover={{ transform: "scale(1.1)" }}
                cursor={"pointer"}
              />
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default Characters;
