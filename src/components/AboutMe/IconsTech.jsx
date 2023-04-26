import { Box, Flex, Text } from "@chakra-ui/react";
import {
  FaReact,
  SiRedux,
  SiJavascript,
  SiChakraui,
  FaNodeJs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiHtml5,
  SiCss3,
} from "../../icons";

const IconsTech = (props) => {
  const { name } = props;
  
  return (
    <Flex
      align="center"
      p={2}
      borderRadius="md"
      boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
      w='10rem'
      justify='space-between'
      gap='2'
    >
      <Box >
        {name.toLowerCase() === "javascript" && <SiJavascript color="#F7DF1E" size="2.5rem" />}
        {name.toLowerCase() === "html5" && <SiHtml5 color="#E44D26" size="2.5rem" />}
        {name.toLowerCase() === "css3" && <SiCss3 color="#1572B6" size="2.5rem" />}
        {name.toLowerCase() === "react" && <FaReact color="#61dafb" size="2.5rem" />}
        {name.toLowerCase() === "react-redux" && <SiRedux color="#764ABC" size="2.5rem" />}
        {name.toLowerCase() === "chakra ui" && <SiChakraui color="#319795" size="2.5rem" />}
        {name.toLowerCase() === "node.js" && <FaNodeJs color="#339933" size="2.5rem" />}
        {name.toLowerCase() === "express" && <SiExpress size="2.5rem" />}
        {name.toLowerCase() === "sequelize" && <SiSequelize color="#828282" size="2.5rem" />}
        {name.toLowerCase() === "postgresql" && <SiPostgresql color="#336791" size="2.5rem" />}
      </Box>
      <Flex justify='center' fontWeight="medium" fontSize="1rem" flex='1'>
        {name}
      </Flex>
    </Flex>
  );
};

export default IconsTech;
