import React, { useState } from "react";
import Layout from "src/layout";
import { Box, Container, Text, Grid, GridItem } from "@chakra-ui/react";
import Filters from "./components/filter";
import { characters } from "src/utils/enums";
import Cards from "../home/components/cards";
import CharacterCards from "src/components/card/cards";
import { Link } from "react-router-dom";

const filters = ["common", "uncommon", "rare", "legendary"];

const Market = () => {
  const [active, setActive] = useState("");
  return (
    <Layout>
      <Box>
        <Container maxW="container.xl" py="100px">
          <Text textAlign={"center"} fontFamily={"Azonix"} fontSize="30px">
            Explore Our Market
          </Text>

          <Box mt="50px" display={"flex"} gap="30px">
            {filters.map((data, idx) => (
              <Filters
                key={idx + 1}
                children={data}
                handleActive={() => setActive(data)}
                active={active}
              />
            ))}
          </Box>

          <Box mt="50px">
            <Grid templateColumns={"repeat(4, 1fr)"} gap="30px">
              {characters.map((data, idx) => (
                <Link key={idx + 1} to={`/${data.name}`}>
                  <CharacterCards
                    name={data.name}
                    price={data.price}
                    type={data.type}
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
