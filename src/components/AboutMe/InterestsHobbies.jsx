import { Box, Flex, Heading, Text } from "@chakra-ui/react";
const interests = [
  {
    title: "Viajar",
    bgGradient: "linear(to-b, #1f7780, #0f7c7f, #0d5257)",
    description:
      "Disfruto de viajar y conocer nuevas culturas. He tenido la oportunidad de visitar Colombia y la experiencia ha sido enriquecedora para mí.",
  },
  {
    title: "Música",
    description:
      "Me encanta disfrutar de diversos estilos de música y además tengo habilidad para tocar la guitarra.",
  },
  {
    title: "Tecnología",
    description:
      "Me gusta explorar nuevas herramientas y tecnologías para mejorar mi trabajo como desarrollador web.",
  },
  {
    title: "Deportes",
    bgGradient: "linear(to-b, #1f7780, #0f7c7f, #0d5257)",
    description:
      "Me encanta ver y practicar diferentes disciplinas. Entre mis favoritas se encuentran el fútbol y el baloncesto",
  },
];

const InterestsHobbies = () => {
  return (
    <Box color="white">
      <Flex direction="column" align="center" justify="center" m={4}>
        <Heading fontSize="3xl" fontWeight="bold" mb="2rem">
          Intereses y Aficiones
        </Heading>
        <Flex justify="space-between">
          <Flex flexWrap="wrap" justify="center" w="35rem">
            {interests.map((interest) => (
              <Box
                key={interest.title}
                bgGradient={interest.bgGradient}
                boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
                borderRadius="md"
                w={64}
                h={48}
                p={4}
                mx={2}
                my={4}
              >
                <Heading as="h3" size="md" mb="1rem">
                  {interest.title}
                </Heading>
                <Text textAlign="justify">{interest.description}</Text>
              </Box>
            ))}
          </Flex>
          <Box
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
            bgGradient="linear(to-b, #e0b37f, #c79465, #a3754b)"
            borderRadius="md"
            w={64}
            h="26rem"
            p={4}
            mx={2}
            my={4}
          >
            <Heading as="h3" size="md" mb="1rem" color="#bd7742">
              Diseño y construcción de Muebles
            </Heading>
            <Text textAlign="justify">
              Me dedico al diseño y construcción de muebles desde la
              conceptualización del proyecto hasta su finalización. Me enfoco en
              crear piezas únicas y personalizadas que reflejen la personalidad
              y estilo de quien las adquiere, disfruto cada etapa del proceso y
              me esfuerzo por crear muebles que sean tanto funcionales como
              hermosos.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default InterestsHobbies;
