import { Flex, Box, Image, Text, Badge, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
} from "../../icons";
import { motion } from "framer-motion";
import { useState } from "react";

const CardProject = (props) => {
  const { titulo } = props;
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <Box
      w="40rem"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
      h="29rem"
    >
      <motion.div transition={{ duration: 0.3 }}>
        {!showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image w="100%" h="20rem" src='https://res.cloudinary.com/dzxiqsg9i/image/upload/v1683026218/Portfolio/Mix2Pizza-Landing_dqog5w.png' alt="Dan Abramov" />
          </motion.div>
        )}
        {showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Flex direction="column" p="2rem" h="20rem">
              <Text fontSize="0.9rem" py="0.5rem" textAlign="justify">
                • Trabajé en equipo en el desarrollo de un e-commerce para una
                pizzería "Mix2Pizza" utilizando tecnologías como React-js,
                React-Redux, Node.js, Sequelize, PostgreSQL, Express, Chakra-UI
                y Mercado Pago para procesar pagos.
              </Text>
              <Text fontSize="0.9rem" py="0.5rem" textAlign="justify">
                • En este proyecto, colaboré en la implementación de la
                arquitectura de la aplicación, el desarrollo de componentes y la
                integración con la API de Mercado Pago para procesar pagos de
                manera segura. Además, colaboré en la implementación de pruebas
                unitarias y en la utilización de metodologías ágiles para la
                gestión del proyecto.
              </Text>
              <Text fontSize="0.9rem" py="0.5rem" textAlign="justify">
                • Este proyecto me permitió mejorar mis habilidades en la
                colaboración efectiva en equipo, en la resolución de problemas y
                en el desarrollo de aplicaciones web escalables y sostenibles.
              </Text>
            </Flex>
          </motion.div>
        )}
      </motion.div>

      <Box p="6" h="9rem">
        <Flex justify="space-between" gap="1rem" align="flex-start">
          <Flex direction="column" w="15rem">
            <Flex direction="row" justify="space-between">
              <Flex
                direction="column"
                alignItems="baseline"
                justify="center"
                p="2"
              >
                <Badge borderRadius="full" px="2" colorScheme="cyan">
                  NUEVO
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
                  mar - 23
                </Box>
              </Flex>
              <Flex
                justify="flex-start"
                w="100%"
                h="4rem"
                p="0.5rem"
                gap="0.2rem"
                flexWrap="wrap"
              >
                <SiJavascript color="#F7DF1E" size="1.5rem" />
                <FaReact color="#61dafb" size="1.5rem" />
                <SiRedux color="#764ABC" size="1.5rem" />
                <SiChakraui color="#319795" size="1.5rem" />
                <SiMercadopago color="#2AA9E0" size="1.5rem" />
                <AiOutlineEllipsis size="1.5rem" />
              </Flex>
            </Flex>
            <Box
              px="4"
              mt="1"
              as="h4"
              lineHeight="tight"
              w="100%"
              isTruncated
              fontSize='1.1rem'
              fontWeight="bold"

            >
              {titulo}
            </Box>
          </Flex>

          <Text w="14rem" textAlign="justify" fontSize="15px" color="#4d4d4d">
            "Mix2Pizza" fue un e-commerce que creé como parte de un proyecto
            final para una bootcamp.
          </Text>

          <Flex direction="column">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
              <Button
                onClick={handleClick}
                rightIcon={<TbArrowRampRight2 />}
                w="8rem"
                bg="#09aeba"
                mx="4"
                mt="1"
                bgGradient="linear(to-b, #1f7780, #0f7c7f)"
                _hover={{
                  bgGradient: "linear(to-b, #105a69, #0f7c7f, #1f7780)",
                }}
                borderColor="#2D3748"
                boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
                fontSize="15px"
                color="#1a1a1a"
              >
                {!showImage ? <Text>Mostrar mas</Text> : <Text>Regresar</Text>}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
              <Link to='https://mix2pizza.netlify.app' target='_blank' >
                <Button
                  rightIcon={<TbArrowRampRight2 />}
                  w="8rem"
                  bg="#09aeba"
                  mx="4"
                  mt="2"
                  bgGradient="linear(to-b, #1f7780, #0f7c7f)"
                  _hover={{
                    bgGradient: "linear(to-b, #105a69, #0f7c7f, #1f7780)",
                  }}
                  borderColor="#2D3748"
                  boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
                  fontSize="15px"
                  color="#1a1a1a"
                >
                  Sitio Web
                </Button>
              </Link>
            </motion.div>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardProject;
