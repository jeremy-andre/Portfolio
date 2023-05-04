import { Box, Flex, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
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
    <Flex direction="column" justify="center">
      <Heading fontSize="3xl" fontWeight="bold" mb="2rem" textAlign="center">
        Intereses y Aficiones
      </Heading>
      <Grid
        templateColumns={{ base:"repeat(1, 1fr) 1fr", md:"repeat(2, 1fr) 1fr" }}
        templateRows={{ base:"repeat(1, 1fr) 1fr", md:"repeat(1, 1fr) 1fr" }}
        gap={4}
      >
        {interests.map((interest) => (
          <GridItem colSpan={1} rowSpan={1}>
            <HobbiesCard key={interest.title} interest={interest} />
          </GridItem>
        ))}

        <GridItem
          colSpan={{ base: 1, md: 1 }}
          rowSpan={{ base: 1, md: 1 }}
          gridColumn={{ base: "1 / span 2", md: "3" }}
          gridRow={{ base: "3", md: "1 / span 2" }}
        >
          <Flex
            direction="column"
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
            bgGradient="linear(to-b, #1f7780, #0f7c7f, #0d5257)"
            borderRadius="md"
            w={{ base: "100%", md: "12rem", lg: "14rem", xl: "16rem" }}
            p={4}
          >
            <motion.div whileHover={{ scale: 1.03 }}>
              <Heading as="h3" fontSize={{ base: "0.9rem", md: "0.9rem", lg: "1.1rem", xl: "1.3rem" }} mb="1rem" color="#47bdbf" textAlign="center">
                Diseño y construcción de Muebles
              </Heading>
              <Text textAlign="justify" fontSize={{ base: "0.8rem", md: "0.8rem", lg:"0.9rem", xl: "1rem" }} mb="4">
                Me dedico al diseño y construcción de muebles desde la
                conceptualización del proyecto hasta su finalización.
              </Text>
              <Text textAlign="justify" fontSize={{ base: "0.8rem", md: "0.8rem", lg:"0.9rem", xl: "1rem" }}>
                Me enfoco en crear piezas únicas y personalizadas que reflejen
                la personalidad y estilo de quien las adquiere, disfruto cada
                etapa del proceso y me esfuerzo por crear muebles que sean tanto
                funcionales como hermosos.
              </Text>
            </motion.div>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default InterestsHobbies;
