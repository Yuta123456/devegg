import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "yellow.100",
      },
    },
  },
  fonts: {
    heading: "Comic Sans MS",
    body: "Comic Sans MS",
  },
});
