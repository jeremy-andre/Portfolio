import { useState } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { Home, Projects, Contact, About } from "./views/Index";
import { NavBar } from "./components";

function App() {


  return (
    <Flex direction="row" >
      <NavBar />
        <VStack flex='1' direction='column' ml={{base:'4rem', md:'14rem'}} align='center' >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </VStack>
    </Flex>
  );
}

export default App;
