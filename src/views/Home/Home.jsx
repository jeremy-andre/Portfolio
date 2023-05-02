import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import TextHome from "../../components/TextHome/TextHome";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Flex justify="center">
      <Flex
        display={{ base: "none", md: "flex" }}
        direction="row"
        w="70rem"
        justify="space-around"
        align="center"
        h="100vh"
      >
        <Flex
          direction="column"
          h="50%"
          w="35rem"
          gap="3.5rem"
          justify="center"
          align="center"
        >
          <Heading align="center" fontSize="50px" w="30rem">
            Hola! Soy Jeremy
          </Heading>
          <Box align="center" h="15rem" w="30rem">
            <TextHome />
          </Box>
        </Flex>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            mr="2rem"
            w="30rem"
            h="40rem"
            borderRadius="1rem"
            // align="center"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </motion.div>
      </Flex>

      {/*-MOVIL-------------------------------------------------------------*/}

      <Flex
        display={{ base: "Flex", md: "none" }}
        direction="column"
        h="100vh"
        justify="center"
        align="center"
        pb="5rem"
        position="fixed"
      >
        <Flex flexWrap='wrap' p='1rem' pb='1rem'>
          <Heading  fontSize="40px" textAlign='center'>
            Hola! Soy Jeremy
          </Heading>
        </Flex>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <Box borderRadius="0.2rem" py="1rem">
            <Image
              px="1.5rem"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
        </motion.div>
        <Box
          align="center"
          justify="center"
          h="8.5rem"
          py="1rem"
          px='1rem'
        >
          <TextHome />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
