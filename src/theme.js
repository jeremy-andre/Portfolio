import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    dark: {
      bg: "#1a1a1a",
    },
    light: {
      bg: "#dedede",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark.bg" : "light.bg",
      },
      "::-webkit-scrollbar": {
        width: "0.4rem",
        height: "0.4rem",
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

export default theme;
