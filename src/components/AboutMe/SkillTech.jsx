import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import IconsTech from "./IconsTech";

const SkillTech = () => {
  return (
    <Box color="white">
      <Heading fontWeight="bold" fontSize="3xl" mb="2rem">
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
        <Flex justify="space-between" align="center" mb="1rem">
          <Heading as="h2" fontSize="xl" w="18.5rem">
            Lenguajes de Programación
          </Heading>
          <Flex flex="1" gap="0.5rem">
            <IconsTech name="Javascript" />
            <IconsTech name="HTML5" />
            <IconsTech name="CSS3" />
            <IconsTech name="Node.js" />
          </Flex>
        </Flex>

        <Flex justify="space-between" align="center" mb="1rem">
          <Heading as="h2" fontSize="xl" w="18.5rem">
            Frameworks
          </Heading>
          <Flex flex="1" gap="0.5rem">
            <IconsTech name="React" />
            <IconsTech name="Express" />
          </Flex>
        </Flex>

        <Flex justify="space-between" align="center" mb="1rem">
          <Heading as="h2" fontSize="xl" w="18.5rem">
            Librerías
          </Heading>
          <Flex flex="1" gap="0.5rem">
            <IconsTech name="React-Redux" />
            <IconsTech name="Chakra UI" />
          </Flex>
        </Flex>

        <Flex justify="space-between" align="center" mb="1rem">
          <Heading as="h2" fontSize="xl" w="18.5rem">
            Data Base
          </Heading>
          <Flex flex="1" gap="0.5rem">
            <IconsTech name="PostgreSQL" />
          </Flex>
        </Flex>

        <Flex justify="space-between" align="center" mb="1rem">
          <Heading as="h2" fontSize="xl" w="18.5rem">
            ORM
          </Heading>
          <Flex flex="1" gap="0.5rem">
            <IconsTech name="Sequelize" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SkillTech;
