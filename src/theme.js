import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "#040305",
        fontFamily: "Neue Haas Grotesk Display Pro",
        color: "#fff",
      },
    }),
  },
});
