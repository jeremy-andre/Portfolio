import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import TextHome from "../../components/TextHome/TextHome";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        direction="row"
        p="2rem"
        w="70rem"
        // bg="blue"
        justify="space-between"
        align="center"
        h="100vh"
        color="#fafafa"
      >
        <Flex
          direction="column"
          h="50%"
          w="100%"
          m="2rem"
          gap="5rem"
          justify="center"
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
            w="50rem"
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
        h='100vh'
        w="18rem"
        p='2rem'
        justify="center"
        align="center"
        color="#fafafa"
      >
        <Flex direction="column" m="2rem" justify="center">
          <Heading
            align="center"
            fontSize="50px"
            w="15rem"
          >
            Hola! Soy Jeremy
          </Heading>
        </Flex>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <Box w="15rem" h="20rem" borderRadius="0.2rem">
            <Image
              w="100%"
              h="100%"
              objectFit='cover'
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
        </motion.div>
        <Box align="center" justify="center" h="7rem" w="15rem" m="2rem" >
          <TextHome />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
