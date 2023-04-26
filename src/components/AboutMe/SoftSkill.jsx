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
    <Box color="white">
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
        <Flex align="center" gap='1rem'>
          <FaUsers color="gray.500" boxSize={5} mr={2} />
          <Text fontWeight="medium">Trabajo en equipo</Text>
        </Flex>
        <Flex align="center" gap='1rem'>
          <FaTasks color="gray.500" boxSize={5} mr={2} />
          <Text fontWeight="medium">Gestión de proyectos</Text>
        </Flex>
        <Flex align="center" gap='1rem'>
          <FaChalkboardTeacher color="gray.500" boxSize={5} mr={2} />
          <Text fontWeight="medium">Mentoría y formación de equipos</Text>
        </Flex>
        <Flex align="center" gap='1rem'>
          <FaHandshake color="gray.500" boxSize={5} mr={2} />
          <Text fontWeight="medium">
            Negociación y resolución de conflictos
          </Text>
        </Flex>
        <Flex align="center" gap='1rem'>
          <FaRegSmile color="gray.500" boxSize={5} mr={2} />
          <Text fontWeight="medium">Comunicación efectiva</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SoftSkill;
