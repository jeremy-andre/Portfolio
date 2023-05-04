import { useState } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router";
import { Home, Projects, Contact, About } from "./views/Index";
import { NavBar } from "./components";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Balls } from "./components/SvgMotion/Lighting";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // <motion.div>
    <Flex direction="row">
      <NavBar zIndex="0" />
      <VStack
        flex="1"
        direction="column"
        pl={{ base: "3.7rem", md: "3.7rem", lg: "10rem", xl: "14rem" }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </VStack>
    </Flex>
    // </motion.div>
  );
}

export default App;
