import { useState } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router";
import { Home, Projects, Contact, About } from "./views/Index";
import { NavBar, Footer } from "./components";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Balls } from "./components/SvgMotion/Lighting";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Flex direction="column" minHeight="100vh">
      {<NavBar />}
      <Flex direction="column" align="center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
