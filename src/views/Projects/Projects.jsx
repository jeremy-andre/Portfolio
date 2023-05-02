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
    image: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1683025983/Portfolio/Henry_Countries_a_skjnei.png",
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
      m="2rem"
      gap="4rem"
      w="70rem"
      p="4rem"
    >
      <Flex direction="row" flexWrap="wrap" justify="space-between">
        <CardProjectD titulo="Mix2Pizza" />
        <CardProjectI titulo="Portfolio" />
      </Flex>
      <Flex direction="row" flexWrap="wrap" gap="4rem">
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
