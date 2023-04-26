import { Box, Flex, Heading, Text } from "@chakra-ui/react";
const interests = [
  {
    title: "Viajar",
    description:
      "Disfruto de viajar y conocer nuevas culturas. He tenido la oportunidad de visitar Colombia y la experiencia ha sido enriquecedora para mí.",
  },
  {
    title: "Música",
    description: "Me encanta disfrutar de diversos estilos de música y además tengo habilidad para tocar la guitarra.",
  },
  {
    title: "Diseño / Muebles",
    description: "Me dedico al diseño y construcción de muebles desde la conceptualización del proyecto hasta su finalización.",
  },
  {
    title: "Cocinar",
    description: "Experimentar con nuevos sabores",
  },
];

const InterestsHobbies = () => {
  return (
    <Box color="white">
      <Flex direction="column" align="center" justify="center" m={4}>
        <Heading fontSize="3xl" fontWeight="bold" mb="2rem" >
          Intereses y Aficiones
        </Heading>
        <Flex flexWrap="wrap" justify="center">
          {interests.map((interest) => (
            <Box
              key={interest.title}
              boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="md"
              w={64}
              h={48}
              p={4}
              mx={2}
              my={4}
            >
              <Heading as="h3" size="md" mb='1rem'>
                {interest.title}
              </Heading>
              <Text textAlign="justify">{interest.description}</Text>
            </Box>
          ))}   
        </Flex>
      </Flex>
    </Box>
  );
};

export default InterestsHobbies;
