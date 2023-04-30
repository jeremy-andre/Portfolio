import { Flex, Text, Box, Badge, Heading, Switch } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { DarkModeButton } from "../DarkModeButton/DarkModeButton";
import {
  FaReact,
  SiRedux,
  SiJavascript,
  SiChakraui,
  TbArrowRampRight2,
  FaNodeJs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  AiOutlineEllipsis,
  SiMercadopago,
  MdOutlinePhoneAndroid,
  MdLaptopMac,
} from "../../icons";
import { motion } from "framer-motion";

const CardProjectI = (props) => {
  const { titulo } = props;
  return (
    <Box w="18rem" overflow="hidden">
      <Flex direction="column" h="9rem" gap="1rem">
        <Flex w="100%" align="center">
          <Heading
            w="100%"
            px="3"
            mt="1"  
            fontWeight="bold"
            lineHeight="tight"
            fontSize="1.8rem"
            isTruncated
          >
            {titulo}
          </Heading>

          <Flex direction="column" alignItems="baseline" justify="center" p="2">
            <Badge borderRadius="full" px="2" colorScheme="green">
              ACTIVO
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              w="4.5rem"
              px="2"
            >
              Abr - 23
            </Box>
          </Flex>
        </Flex>
        <Flex direction="column" px="1rem" gap="1rem">
          <Flex justify="space-between" align="center" h="40px">
            <Text>Modo oscuro</Text>
            <DarkModeButton />
          </Flex>
          <Flex justify="space-between" align="center" h="40px">
            <Text>Responsive</Text>
            <Flex gap="0.8rem" pr="0.5rem">
              <MdOutlinePhoneAndroid size="1.5rem" />
              <MdLaptopMac size="1.5rem" />
            </Flex>
          </Flex>
          <Flex justify="space-between" align="center" h="40px">
            <Text>Lenguaje</Text>
            <Flex gap="0.8rem" pr="0.5rem">
              <Text>Español</Text>
            </Flex>
          </Flex>
          <Flex>
            <Text textAlign="center">
              Aquí podrás ver algunos de mis proyectos más recientes. Aunque
              todavía estoy empezando en mi carrera, he trabajado duro para
              desarrollar cada uno de ellos y estoy orgulloso de presentártelos.
              Espero que disfrutes explorando mi trabajo tanto como yo disfruté
              creándolo.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardProjectI;
