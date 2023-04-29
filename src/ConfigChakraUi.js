import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
      dark: {
        background: "#1a1a1a",
      },
      light: {
        background: "#dedede",
      },
    },
    styles: {
      global: (props) => ({
        body: {
          bg: props.colorMode === "dark" ? "dark.background" : "light.background",
        },
      }),
    },
  });