import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  Button,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { routes } from "./routes";
import styles from "./styles.module.css";
import { FiMenu } from "react-icons/fi";
import Mobile from "./mobile";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [show, setShow] = useState(false);

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
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
    >
      <Box py="24px">
        <Mobile
          isOpen={show}
          onClose={() => setShow(!show)}
          connectWallet={connectWallet}
        />
        <Container
          maxW="container.xl"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display="flex"
            gap="10px"
            alignContent={"center"}
            alignItems={"center"}
          >
            <IconButton
              icon={<FiMenu />}
              onClick={() => setShow(!show)}
              display={isLargerThan800 ? "none" : "block"}
              bg="transparent"
              color="#fff"
              fontSize={"30px"}
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
            />
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
            display={isLargerThan800 ? "block" : "none"}
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
    </motion.div>
  );
};

export default Navbar;
