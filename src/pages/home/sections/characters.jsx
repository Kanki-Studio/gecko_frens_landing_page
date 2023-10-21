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
  useMediaQuery,
} from "@chakra-ui/react";
import Cards from "../components/cards";
import bowman from "src/assets/gecko_art.png";
import { characters } from "src/utils/enums";
import CharacterCards from "src/components/card/cards";
import { Link } from "react-router-dom";

const Characters = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Container maxW={"container.xl"} py="250px">
      <Text fontFamily={"Azonix"} fontSize={"30px"}>
        Meet Our <br /> Popular Characters
      </Text>
      <Text>Gecko Frens</Text>

      <Box mt="30px">
        <Box className="grid_3">
          {characters.slice(6).map((data, idx) => (
            <Link key={idx + 1} to={`/gecko/${data.name}`}>
              <CharacterCards
                name={data.name}
                price={data.price}
                number={data.number}
                image={data.image}
              />
            </Link>
          ))}
        </Box>
      </Box>

      <Box
        mt="250px"
        position={"relative"}
        borderRadius={"10px"}
        bg="#1A1D22"
        px="30px"
        py="40px"
      >
        <Grid
          templateColumns={isLargerThan800 ? "repeat(2, 1fr)" : "auto"}
          alignItems={"center"}
        >
          <GridItem>
            <Text fontFamily={"Azonix"} fontSize={"30px"}>
              Characters
            </Text>
            <Box w={isLargerThan800 ? "400px" : "auto"}>
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
                zIndex={isLargerThan800 ? 1 : "-1"}
                top={isLargerThan800 ? "-30%" : "-60%"}
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
