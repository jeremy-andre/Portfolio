import { Box, Flex } from "@chakra-ui/react";
import { CardProjectD, CardProjectI, CardProjectF } from "../../components";

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
        <CardProjectF titulo="P-Services" date="MAY - 23" pending={true} />
        <CardProjectF titulo="Max-Ideas" date="JUN - 23" pending={true} />
        <CardProjectF titulo="Countries APP" date="FEB - 23" pending={false} />
      </Flex>
    </Flex>
  );
};

export default Projects;
