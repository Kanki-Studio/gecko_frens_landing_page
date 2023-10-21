import React from "react";
import {
  Drawer,
  DrawerBody,
  Box,
  Button,
  DrawerContent,
  DrawerOverlay,
  Center,
} from "@chakra-ui/react";
import { routes } from "./routes";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Mobile = ({ isOpen, onClose, connectWallet }) => {
  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="#1A1D22">
        <DrawerBody py="300px">
          <Center>
            <Box display={"flex"} flexDir={"column"} gap="30px">
              {routes.map((data, idx) => (
                <NavLink
                  key={idx}
                  to={data.to}
                  className={({ isActive }) =>
                    isActive ? styles.nav_active_mobile : styles.nav_mobile
                  }
                >
                  {" "}
                  {data.name}
                </NavLink>
              ))}
            </Box>
          </Center>

          <Button
            w="full"
            mt="100px"
            bg="#cafc01"
            boxShadow={"inner"}
            onClick={connectWallet}
            color={"#040305"}
            _hover={{
              bg: "#cafc01",
            }}
          >
            Connect
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Mobile;
