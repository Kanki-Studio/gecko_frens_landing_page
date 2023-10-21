import React from "react";
import Layout from "src/layout";
import { Box, Container, Text, Grid, useMediaQuery } from "@chakra-ui/react";
import { characters } from "src/utils/enums";
import CharacterCards from "src/components/card/cards";
import { Link } from "react-router-dom";

const Market = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Layout>
      <Box>
        <Container maxW="container.xl" py="100px">
          <Text textAlign={"center"} fontFamily={"Azonix"} fontSize="30px">
            Explore Our Market
          </Text>

          <Box mt="50px">
            <Grid
              templateColumns={isLargerThan800 ? "repeat(4, 1fr)" : "auto"}
              gap="30px"
            >
              {characters.map((data, idx) => (
                <Link key={idx + 1} to={`/gecko/${data.name}`}>
                  <CharacterCards
                    name={data.name}
                    price={data.price}
                    number={data.number}
                    image={data.image}
                  />
                </Link>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Market;
