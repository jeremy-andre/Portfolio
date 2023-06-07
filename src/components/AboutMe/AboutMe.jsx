import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      flexWrap="wrap"
      justify={{ base: "center", md: "space-between" }}
      align="center"
      py="2rem"
      gap={{ base: "2rem", md: "3rem" }}
    >
      <Flex
        direction="column"
        flex="1"
        textAlign={{ base: "center", md: "justify" }}
        h={{ base: "14rem", md: "19.5rem", lg: "21.5rem", xl: "24rem" }}
      >
        <Heading
          textAlign={{ base: "center", md: "justify" }}
          fontSize="3xl"
          fontWeight="bold"
          mb={{ base: "2rem", md: "2rem", lg: "2rem", xl: "2rem" }}
        >
          Sobre Mí
        </Heading>
        <Text fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }} mb={4}>
          Soy un desarrollador Full Stack apasionado por la tecnología y el
          aprendizaje continuo. En este video, les contaré un poco sobre mi
          experiencia en el campo y cómo he logrado construir mi carrera en el
          mundo de la tecnología.
        </Text>
        <Text fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}>
          Espero que disfruten del video y puedan conocer un poco más sobre mí y
          lo que puedo aportar a su equipo de desarrollo.
        </Text>
      </Flex>
      <Flex
        w={{ base: "100%", md: "55%", lg: "60%", xl: "60%" }}
        h={{ base: "14rem", md: "19.5rem", lg: "21.5rem", xl: "24rem" }}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
        justify="center"
        align="center"
      >
        <iframe
          id="inlineFrameExample"
          title="About me Upcomming"
          width="100%"
          height="100%"
          src=""
          allowFullScreen
        />
      </Flex>
    </Flex>
  );
};

export default AboutMe;
