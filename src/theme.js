import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "#090909",
        fontFamily: "Red Hat Display",
        color: "#fff",
      },
    }),
  },
});
