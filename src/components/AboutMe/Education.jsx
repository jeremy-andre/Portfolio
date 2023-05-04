import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-between" }}
      align="center"
      gap="2rem"
      p="1rem"
    >
      <Box flex="1">
        <Heading
          fontSize="3xl"
          fontWeight="bold"
          textAlign={{ base: "center", md: "justify" }}
          mb={{ base: "3rem", md: "2rem", lg: "2rem", xl: "2rem" }}
        >
          Educación
        </Heading>
        <Box
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
          borderRadius="lg"
          overflow="hidden"
          p="1rem"
        >
          <Text
            as="h3"
            fontWeight="semibold"
            lineHeight="tight"
            fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
          >
            Bootcamp en Desarrollo Web Full Stack
          </Text>
          <Text
            as="p"
            color="gray.500"
            fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
          >
            Henry - Buenos Aires, Argentina | Noviembre 2022 - Abril 2023
          </Text>
          <Text
            as="p"
            mt={4}
            textAlign="justify"
            fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
          >
            En el bootcamp de Desarrollo Web Full Stack en Henry, aprendí los
            fundamentos de programación, la arquitectura cliente-servidor, el
            manejo de bases de datos, el desarrollo de aplicaciones web
            utilizando el stack PERN (PostgreSQL, Express.js, React.js, Node.js)
            y más.
          </Text>
        </Box>
      </Box>

      <Flex w={{ base: "100%", md: "40%", lg: "40%", xl: "40%" }}>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="https://certificates.soyhenry.com/new-cert?id=09ebe93359f480de9787a4d27708d2298c6846e073ee03ae84ef7fa6f82009f8"
            target="_blank"
          >
            <Image
              src="https://res.cloudinary.com/dzxiqsg9i/image/upload/v1682724198/Portfolio/Certificado_png_fcnkzs.png"
              alt="Certificado Henry"
              w="100rem "
            />
          </Link>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Education;
