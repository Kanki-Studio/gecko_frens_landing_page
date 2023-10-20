import React from "react";
import { Container, Box, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { routes } from "./routes";
import styles from "./styles.module.css";

const Navbar = () => {
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box py="24px">
      <Container
        maxW="container.xl"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text fontFamily={"Azonix"} fontSize={"20px"}>
            Gecko Frens
          </Text>
        </Box>

        <Box display="flex" gap="100px">
          {routes.map((data, idx) => (
            <NavLink
              to={data.to}
              key={idx + 1}
              className={({ isActive }) =>
                isActive ? styles.nav_active : styles.nav
              }
            >
              {data.name}
            </NavLink>
          ))}
        </Box>

        <Button
          bg="#cafc01"
          boxShadow={"inner"}
          w="auto"
          color={"#040305"}
          _hover={{
            bg: "#cafc01",
          }}
          onClick={connectWallet}
        >
          Connect Wallet
        </Button>
      </Container>
    </Box>
  );
};

export default Navbar;
