import { Box, Flex, Heading, Highlight, Image, Text } from "@chakra-ui/react";
import TextHome from "../../components/TextHome/TextHome";
import { motion } from "framer-motion";
import { Balls } from "../../components/SvgMotion/Lighting";
import { AboutMe, Education } from "../../components";

const Home = () => {
  return (
    <Flex direction="column" justify="center" w="75%" maxW="80rem">
      <Flex
        display={{ base: "none", md: "flex" }}
        direction="row"
        justify="center"
        align="center"
        py="5rem"
      >
        <Balls color="#09aeba" w="1000pt" />
        {/* <Balls color="yellow" espejo="scaleX(-1)"/> */}
        <Flex
          direction="column"
          h="50%"
          w="35rem"
          gap="3.5rem"
          justify="center"
          align="center"
        >
          <Heading align="center" fontSize="50px" w="30rem">
            <Highlight
              query="Jeremy"
              styles={{
                color: "#09aeba",
                WebkitBackgroundClip: "text",
              }}
            >
              Hola! Soy Jeremy
            </Highlight>
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
            // boxShadow="0px 15px 25px rgba(0, 0, 0, 0.2)"
            borderRadius="1rem"
            maxH="35rem"
            src="https://res.cloudinary.com/dzxiqsg9i/image/upload/c_crop,h_1600,o_100/v1683000049/Portfolio/Home_-_Jeremy_rclv54.png"
            alt="Dan Abramov"
          />
        </motion.div>
      </Flex>

      {/*-MOVIL-------------------------------------------------------------*/}
      <Flex
        display={{ base: "Flex", md: "none" }}
        direction="column"
        justify="center"
        align="center"
        pt="6rem"
      >
        <Flex flexWrap="wrap" px="1.5rem" pb="1rem">
          <Heading fontSize="40px" textAlign="center">
            Hola! Soy Jeremy
          </Heading>
        </Flex>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Box pb="1rem" maxH="30rem" overflow="hidden" px="2rem">
            <Image
              // boxShadow="0px 10px 10px rgba(0, 0, 0, 0.2)"
              borderRadius="0.5rem"
              maxH="30rem"
              objectFit="cover"
              src="https://res.cloudinary.com/dzxiqsg9i/image/upload/c_crop,h_1600,o_100/v1683000049/Portfolio/Home_-_Jeremy_rclv54.png"
              alt="Dan Abramov"
            />
          </Box>
        </motion.div>
        <Box
          align="center"
          justify="center"
          px="1.5rem"
          my="0.5rem"
          h="7rem"
          w="100%"
        >
          <TextHome />
        </Box>
      </Flex>
      <AboutMe />
      <Education />
    </Flex>
  );
};

export default Home;
