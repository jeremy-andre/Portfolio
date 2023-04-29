import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaEnvelope, DiGithubBadge, CiLinkedin } from "../../icons";
import { motion } from "framer-motion";
import { MovingComponent } from "react-moving-text";

const Contact = () => {
  return (
    <Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        direction="column"
        align="center"
        gap="2rem"
        justify="center"
        h="100vh"
      >
        <Flex direction="row" fontSize="3rem">
          {"CONTACTAME".split("").map((letter, index) => (
            <MovingComponent
              key={index}
              type="fadeIn"
              duration="2300ms"
              delay={`${index * 100}ms`}
              direction="alternate-reverse"
              timing="ease-in-out"
              iteration="infinite"
              fillMode="forwards"
            >
              {letter === " " ? <>&nbsp;</> : letter}
            </MovingComponent>
          ))}
        </Flex>
        <Text>
          Si estás interesado en trabajar conmigo, ¡no dudes en ponerte en
          contacto!
        </Text>
        <Flex align="center" justify="center" h="5rem" gap="2rem">
          <a
            href="https://www.linkedin.com/in/jeremy-andre-flores/"
            target="top"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <CiLinkedin color="#0077B5" size="3rem" />
            </motion.div>
          </a>
          <a href="mailto:jeremy.andre.99@gmail.com">
            <motion.div whileHover={{ scale: 1.3, color: "#09aeba" }}>
              <FaEnvelope size="2rem" />
            </motion.div>
          </a>
          <Box pl="2rem">
            <a href="mailto:example@example.com">jeremy.andre.99@gmail.com</a>
          </Box>
        </Flex>
      </Flex>

      {/*-MOVIL-------------------------------------------------------------*/}

      <Flex
        display={{ base: "flex", md: "none" }}
        direction="column"
        align="center"
        justify="center"
        gap="2rem"
      >
        <Flex direction="row" fontSize="2rem">
          {"CONTACTAME".split("").map((letter, index) => (
            <MovingComponent
              key={index}
              type="fadeIn"
              duration="2300ms"
              delay={`${index * 100}ms`}
              direction="alternate-reverse"
              timing="ease-in-out"
              iteration="infinite"
              fillMode="forwards"
            >
              {letter === " " ? <>&nbsp;</> : letter}
            </MovingComponent>
          ))}
        </Flex>
        <Text mx='4rem' textAlign='center'>
          Si estás interesado en trabajar conmigo, ¡no dudes en ponerte en
          contacto!
        </Text>
        <Flex align="center" justify="center" h="5rem" gap="1rem">
          <a
            href="https://www.linkedin.com/in/jeremy-andre-flores/"
            target="top"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <CiLinkedin color="#0077B5" size="3rem" />
            </motion.div>
          </a>
          <a href="mailto:jeremy.andre.99@gmail.com">
            <motion.div whileHover={{ scale: 1.3, color: "#09aeba" }}>
              <FaEnvelope size="2rem" />
            </motion.div>
          </a>
          <Box pl="1rem">
            <a href="mailto:example@example.com">jeremy.andre.99@gmail.com</a>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
