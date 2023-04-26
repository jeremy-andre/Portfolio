import { Flex, Box, Image, Text, Badge, Button } from "@chakra-ui/react";
import { Mix2Pizza } from "../../img";
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

const CardProject = (props) => {
  const { titulo } = props;
  return (
    <Box
      w="40rem"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="0px 5px 5px rgba(0, 0, 0, 0.5)"
      color="#fafafa"
    >
      <Image w="100%" h="20rem" src={Mix2Pizza} alt="Dan Abramov" />

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
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              w="100%"
              isTruncated
            >
              {titulo}
            </Box>
          </Flex>

          <Text w="14rem" textAlign="justify" fontSize="15px" color="#adadad">
            "Mix2Pizza" fue una aplicación que creé como parte de un proyecto
            final para una bootcamp.
          </Text>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Button
              rightIcon={<TbArrowRampRight2 />}
              w="8rem"
              bg="#09aeba"
              mx="4"
              mt="1.5"
              _hover={{ bg: "#0e8e9c", color: "#2D3748" }}
              borderColor="#2D3748"
              boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
              fontSize='15px'
            >
              Mostrar mas
            </Button>
          </motion.div>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardProject;
