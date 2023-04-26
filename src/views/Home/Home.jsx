import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import TextHome from "../../components/TextHome/TextHome";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box w="70rem" h="100vh">
      <Flex
        direction="row"
        p="2rem"
        // bg="blue"
        justify="space-between"
        align="center"
        h="100%"
        color="#fafafa"
      >
        <Flex direction="column" h="50%" w="100%" m="2rem" gap="5rem" justify='center'>
          <Heading align="center" fontSize="50px" w='30rem'>
            Hola! Soy Jeremy
          </Heading>
          <Box align="center" h='15rem' w='30rem' >
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
    </Box>
  );
};

export default Home;
