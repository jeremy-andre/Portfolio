import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import HobbiesCard from "./HobbiesCard";

const interests = [
  {
    title: "Viajar",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1682731125/Portfolio/foto_medellin_gm1p5n.png",
    description:
      "Disfruto de viajar y conocer nuevas culturas. He tenido la oportunidad de visitar Colombia y la experiencia ha sido enriquecedora para mí.",
  },
  {
    title: "Música",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1682713992/Portfolio/closeup-guitarra-electrica-negra-sobre-fondo-oscuro_jqtqc3.jpg",
    description:
      "Me encanta disfrutar de diversos estilos de música y además tengo habilidad para tocar la guitarra.",
  },
  {
    title: "Tecnología",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1682731521/Portfolio/portfolio_codigo_eybuin.jpg",
    description:
      "Me gusta explorar nuevas herramientas y tecnologías para mejorar mi trabajo como desarrollador web.",
  },
  {
    title: "Deportes",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1682732429/Portfolio/futbol_portfolio_u9kg3v.jpg",
    description:
      "Me encanta ver y practicar diferentes disciplinas. Entre mis favoritas se encuentran el fútbol y el baloncesto",
  },
];

const InterestsHobbies = () => {
  return (
    <Box >
      <Flex direction="column" align="center" justify="center" m={4}>
        <Heading fontSize="3xl" fontWeight="bold" mb="2rem">
          Intereses y Aficiones
        </Heading>
        <Flex justify="space-between">
          <Flex flexWrap="wrap" justify="center" w="35rem">
            {interests.map((interest) => (
              <HobbiesCard interest={interest} />
            ))}
          </Flex>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Box
              boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
              // bgGradient="linear(to-b, #e0b37f, #c79465, #a3754b)"
              bgGradient="linear(to-b, #1f7780, #0f7c7f, #0d5257)"
              borderRadius="md"
              w={64}
              h="26rem"
              p={4}
              my={4}
            >
              <Heading as="h3" size="md" mb="1rem" color="#0f464d">
                Diseño y construcción de Muebles
              </Heading>
              <Text textAlign="justify" mb="4">
                Me dedico al diseño y construcción de muebles desde la
                conceptualización del proyecto hasta su finalización.
              </Text>
              <Text textAlign="justify">
                Me enfoco en crear piezas únicas y personalizadas que reflejen
                la personalidad y estilo de quien las adquiere, disfruto cada
                etapa del proceso y me esfuerzo por crear muebles que sean tanto
                funcionales como hermosos.
              </Text>
            </Box>
          </motion.div>
        </Flex>
      </Flex>
    </Box>
  );
};

export default InterestsHobbies;
