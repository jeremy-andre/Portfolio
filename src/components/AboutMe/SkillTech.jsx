import { Box, Heading, Flex, Text, Divider } from "@chakra-ui/react";
import IconsTech from "./IconsTech";
import { motion } from "framer-motion";

const SkillTech = () => {
  return (
    <Flex direction="column" w="100%" p="1rem">
      <Heading
        fontSize="3xl"
        fontWeight="bold"
        mb={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2rem" }}
        textAlign={{ base: "center", md: "justify" }}
      >
        Habilidades Técnicas
      </Heading>
      <Flex
        direction="column"
        justify="flex-start"
        w="100%"
        p="1rem"
        gap="0.2rem"
        flexWrap="wrap"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Heading
            as="h2"
            fontSize="xl"
            justify="space-between"
            w={{ base: "15rem", md: "13rem", lg: "18.5rem" }}
            textAlign={{ base: "center", md: "initial" }}
            mb={{ base: "1rem", md: "0rem" }}
          >
            Lenguajes de Programación
          </Heading>
          <Flex
            gap="0.5rem"
            flexWrap="wrap"
            justify={{ base: "center", md: "flex-end" }}
            flex="1"
          >
            <IconsTech name="Javascript" />
            <IconsTech name="HTML5" />
            <IconsTech name="CSS3" />
            <IconsTech name="Node.js" />
          </Flex>
        </Flex>
        <motion.div
          animate={{
            width: ["50%", "100%", "70%", "96%", "85%", "91%", "50%"],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <Divider
            my={{ base: "1rem", md: "2rem" }}
            style={{
              backgroundImage: "linear-gradient(to right, #09aeba,currentcolor, #43d99d)",
              height: "4px",
            }}
          />
        </motion.div>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Heading
            as="h2"
            fontSize="xl"
            justify="space-between"
            w={{ base: "15rem", md: "13rem", lg: "18.5rem" }}
            textAlign={{ base: "center", md: "initial" }}
            mb={{ base: "1rem", md: "0rem" }}
          >
            Frameworks
          </Heading>
          <Flex
            gap="0.5rem"
            flexWrap="wrap"
            justify={{ base: "center", md: "flex-end" }}
            flex="1"
          >
            <IconsTech name="React" />
            <IconsTech name="Express" />
          </Flex>
        </Flex>
        <motion.div
          animate={{
            width: ["40%", "100%", "73%", "85%", "71%", "96%", "40%"],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 1 }}
        >
          <Divider
            my={{ base: "1rem", md: "2rem" }}
            style={{
              backgroundImage: "linear-gradient(to right, #09aeba,currentcolor, #43d99d)",
              height: "4px",
            }}
          />
        </motion.div>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Heading
            as="h2"
            fontSize="xl"
            justify="space-between"
            w={{ base: "15rem", md: "13rem", lg: "18.5rem" }}
            textAlign={{ base: "center", md: "initial" }}
            mb={{ base: "1rem", md: "0rem" }}
          >
            Librerías
          </Heading>
          <Flex
            gap="0.5rem"
            flexWrap="wrap"
            justify={{ base: "center", md: "flex-end" }}
            flex="1"
          >
            <IconsTech name="React-Redux" />
            <IconsTech name="Chakra UI" />
          </Flex>
        </Flex>
        <motion.div
          animate={{
            width: ["30%", "100%", "79%", "97%", "82%", "99%", "30%"],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
        >
          <Divider
            my={{ base: "1rem", md: "2rem" }}
            style={{
              backgroundImage: "linear-gradient(to right, #09aeba,currentcolor, #43d99d)",
              height: "4px",
            }}
          />
        </motion.div>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Heading
            as="h2"
            fontSize="xl"
            justify="space-between"
            w={{ base: "15rem", md: "13rem", lg: "18.5rem" }}
            textAlign={{ base: "center", md: "initial" }}
            mb={{ base: "1rem", md: "0rem" }}
          >
            Data Base
          </Heading>
          <Flex
            gap="0.5rem"
            flexWrap="wrap"
            justify={{ base: "center", md: "flex-end" }}
            flex="1"
          >
            <IconsTech name="PostgreSQL" />
          </Flex>
        </Flex>
        <motion.div
          animate={{
            width: ["20%", "100%", "89%", "93%", "71%", "96%", "20%"],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 3 }}
        >
          <Divider
            my={{ base: "1rem", md: "2rem" }}
            style={{
              backgroundImage: "linear-gradient(to right, #09aeba,currentcolor, #43d99d)",
              height: "4px",
            }}
          />
        </motion.div>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Heading
            as="h2"
            fontSize="xl"
            justify="space-between"
            w={{ base: "15rem", md: "13rem", lg: "18.5rem" }}
            textAlign={{ base: "center", md: "initial" }}
            mb={{ base: "1rem", md: "0rem" }}
          >
            ORM
          </Heading>
          <Flex
            gap="0.5rem"
            flexWrap="wrap"
            justify={{ base: "center", md: "flex-end" }}
            flex="1"
          >
            <IconsTech name="Sequelize" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SkillTech;
