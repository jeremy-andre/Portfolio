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
      "::-webkit-scrollbar": {
        width: "0.4rem",
        backgroundColor: props.colorMode === "dark" ? "#1a1a1a" : "#dedede",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0.4rem",
        // backgroundColor: props.colorMode === "dark" ? "dark.background" : "#c4c4c4",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "0.4rem",
        backgroundColor: props.colorMode === "dark" ? "#dedede" : "#1a1a1a",
      },
    }),
  },
});

