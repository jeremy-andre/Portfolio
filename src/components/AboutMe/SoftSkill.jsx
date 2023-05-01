import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import {
  FaUsers,
  FaTasks,
  FaChalkboardTeacher,
  FaHandshake,
  FaRegSmile,
} from "react-icons/fa";

const SoftSkill = () => {
  return (
    <Box >
      <Heading fontWeight="bold" fontSize="3xl" mb="2rem">
        Habilidades Blandas
      </Heading>
      <Flex
        direction="column"
        justify="flex-start"
        w="100%"
        p="1rem"
        gap="1rem"
      >
        <Flex align="center" gap="1rem">
          <FaUsers color="#09aeba" size='1.5rem' mr={2} />
          <Text fontWeight="medium">Trabajo en equipo</Text>
        </Flex>
        <Flex align="center" gap="1rem">
          <FaChalkboardTeacher color="#09aeba" size='1.5rem' mr={2} />
          <Text fontWeight="medium">Facilidad de adaptación</Text>
        </Flex>
        <Flex align="center" gap="1rem">
          <FaTasks color="#09aeba" size='1.5rem' mr={2} />
          <Text fontWeight="medium">Gestión de proyectos</Text>
        </Flex>
        <Flex align="center" gap="1rem">
          <FaHandshake color="#09aeba" size='1.5rem' mr={2} />
          <Text fontWeight="medium">
            Negociación y resolución de conflictos
          </Text>
        </Flex>
        <Flex align="center" gap="1rem">
          <FaRegSmile color="#09aeba" size='1.5rem' mr={2} />
          <Text fontWeight="medium">Comunicación efectiva</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SoftSkill;
