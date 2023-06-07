import { Box, Flex } from "@chakra-ui/react";
import { CardProjectD, CardProjectI, CardProjectF } from "../../components";

const projectsAdvanced = [
  {
    title: "P-Services",
    date: "MAY - 23",
    pending: true,
    image: "",
  },
  {
    title: "Max-Ideas",
    date: "JUN - 23",
    pending: true,
    image: "",
  },
  {
    title: "Countries APP",
    date: "FEB - 23",
    pending: false,
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1683025983/Portfolio/Henry_Countries_a_skjnei.png",
    textos: [
      "Desarrollé un proyecto individual de países utilizando tecnologías como React-js, Node.js y PostgreSQL.",
      "El proyecto consistió en una aplicación web que permite buscar información sobre distintos países, como su capital, población, bandera, entre otros datos interesantes. Además, la aplicación permite filtrar y ordenar los países según distintos criterios.",
      "Este proyecto me permitió mejorar mis habilidades en el desarrollo de aplicaciones web y en la utilización de APIs para obtener información.",
    ],
  },
];

const Projects = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      maxW={{ base: "25rem", md: "none", lg: "none", xl: "65rem" }}
      m={{ base: "1rem", md: "3rem", lg: "4rem", xl: "6rem" }}
      mt={{ base: "5.5rem", md: "2.5rem" }}
      mb={{ base: "2.5rem", md: "2.5rem" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        gap="2rem"
        flexWrap="wrap"
        justify={{ base: "center", md: "space-around" }}
        align={{ base: "center", md: "center" }}
      >
        <CardProjectD titulo="Mix2Pizza" />
        <CardProjectI titulo="Portfolio" />
        {projectsAdvanced.map((project) => (
          <CardProjectF
            title={project.title}
            date={project.date}
            pending={project.pending}
            textos={project.textos}
            image={project.image}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
