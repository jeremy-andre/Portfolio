import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Flex direction="row" flexWrap="wrap" justify="space-between">
      <Box
        w="20rem"
        h="25rem"
        overflow="hidden"
        textAlign="justify"
      >
        <Heading fontSize="3xl" fontWeight="bold" mb="2rem">
          Sobre Mí
        </Heading>
        <Text fontSize="lg" mb={4} pl="1rem">
          Soy un desarrollador Full Stack apasionado por la tecnología y el
          aprendizaje continuo. En este video, les contaré un poco sobre mi
          experiencia en el campo y cómo he logrado construir mi carrera en el
          mundo de la tecnología.
        </Text>
        <Text fontSize="lg" pl="1rem">
          Espero que disfruten del video y puedan conocer un poco más sobre mí y
          lo que puedo aportar a su equipo de desarrollo.
        </Text>
      </Box>
      <Flex
        w="38rem"
        h="25rem"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
        color="#fafafa"
        justify="center"
        align="center"
      >
        Video / About me
      </Flex>
    </Flex>
  );
};

export default AboutMe;
