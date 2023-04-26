import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { Home, Projects, Contact, About } from "./views/Index";
import { NavBar } from "./components";

function App() {


  return (
    <Flex direction="row" bg='#141414'  minH='100vh' >
      <NavBar />
      <Flex flex='1' direction='column' ml='14rem' align='center' >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Flex>
    </Flex>
  );
}

export default App;
