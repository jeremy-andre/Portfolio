import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import { theme } from "./Global/ConfigChakraUi";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode="light" /> */}
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
