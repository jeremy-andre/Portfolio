import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <Flex align="center">
      <Box >
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
            manejo de bases de datos, el desarrollo de aplicaciones web
            utilizando el stack PERN (PostgreSQL, Express.js, React.js, Node.js)
            y más.
          </Box>
        </Box>
      </Box>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to='https://certificates.soyhenry.com/new-cert?id=09ebe93359f480de9787a4d27708d2298c6846e073ee03ae84ef7fa6f82009f8' target='_blank'>
          <Flex w="25rem" h="17rem" ml="4.5rem" bg="green">
            <Image
              src="https://res.cloudinary.com/dzxiqsg9i/image/upload/v1682724198/Portfolio/Certificado_png_fcnkzs.png"
              alt="Certificado Henry"
              h="100%"
              w="100%"
            />
          </Flex>
        </Link>
      </motion.div>
    </Flex>
  );
};

export default Education;
