import { Box, Heading } from "@chakra-ui/react";

const Education = () => {
  return (
    <Box color="white">
      <Heading fontSize="3xl" fontWeight="bold" mb="2rem">
        Educación
      </Heading>
      <Box
        boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
        borderRadius="lg"
        overflow="hidden"
        p="1rem"
        m="1rem"
        w={{ base: "100%", md: "30rem" }}
        color="white"
      >
        <Box as="h3" fontWeight="semibold" lineHeight="tight" isTruncated>
          Bootcamp en Desarrollo Web Full Stack
        </Box>
        <Box as="p" color="gray.500" fontSize="sm">
          Henry - Buenos Aires, Argentina | Noviembre 2022 - Abril 2023
        </Box>
        <Box as="p" mt={4} textAlign="justify">
          En el bootcamp de Desarrollo Web Full Stack en Henry, aprendí los
          fundamentos de programación, la arquitectura cliente-servidor, el
          manejo de bases de datos, el desarrollo de aplicaciones web utilizando
          el stack PERN (PostgreSQL, Express.js, React.js, Node.js) y más.
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
