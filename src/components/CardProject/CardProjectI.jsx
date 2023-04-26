import { Flex, Image, Text, Box, Badge, Button } from "@chakra-ui/react";
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

const CardProjectI = (props) => {
  const { titulo } = props;
  return (
    <Box
      w="18rem"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="0px 5px 5px rgba(0, 0, 0, 0.5)"
      color="#fafafa"
    >
      <Image
        w="100%"
        h="20rem"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />

      <Box p="6" h="9rem">
        <Flex justify="space-between" gap="1rem">
          <Flex direction="column" w="100%">
            <Flex direction="row" justify="space-between" align="center">
              <Flex
                direction="column"
                alignItems="baseline"
                justify="center"
                p="2"
              >
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
                  mar - 23
                </Box>
              </Flex>
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
                  fontSize="15px"
                >
                  Mostrar mas
                </Button>
              </motion.div>
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
        </Flex>
      </Box>
    </Box>
  );
};

export default CardProjectI;
