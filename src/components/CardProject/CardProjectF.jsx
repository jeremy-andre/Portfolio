import {
  Flex,
  Image,
  Text,
  Box,
  Badge,
  Button,
  Heading,
} from "@chakra-ui/react";
import { TbArrowRampRight2 } from "react-icons/tb";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardProjectP = (props) => {
  const { titulo, date, pending } = props;

  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  const { scrollYProgress } = useScroll();
  

  return (
    <Box
      w="18rem"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
    >
      <Flex w="100%" align="center" p="1rem">
        <Heading
          w="100%"
          px="3"
          mt="1"
          fontWeight={pending ? "medium" : "bold"}
          color={pending ? "gray" : {}}
          lineHeight="tight"
          fontSize="1.1rem"
          isTruncated
        >
          {titulo}
        </Heading>

        <Flex direction="column" alignItems="baseline" justify="center" p="2">
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={pending ? "gray" : "messenger"}
          >
            {pending ? "pending" : "Finalizado"}
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
            {date}
          </Box>
        </Flex>
      </Flex>

      <motion.div transition={{ duration: 0.3 }}>
        {!showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              w="100%"
              h="20rem"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </motion.div>
        )}
        {showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Flex
              direction="column"
              mx="2rem"
              pr="1rem"
              h="20rem"
              overflowY='scroll'
              // css={{
              //   "&::-webkit-scrollbar": {
              //     width: "1rem",
              //   },
              // }}
            >
                  <Text fontSize="0.9rem" py="0.5rem" textAlign="justify">
                    • Desarrollé un proyecto individual de países utilizando
                    tecnologías como React-js, Node.js y PostgreSQL.
                  </Text>
                  <Text fontSize="0.9rem" py="0.5rem" textAlign="justify">
                    • El proyecto consistió en una aplicación web que permite
                    buscar información sobre distintos países, como su capital,
                    población, bandera, entre otros datos interesantes. Además,
                    la aplicación permite filtrar y ordenar los países según
                    distintos criterios.
                  </Text>
                  <Text fontSize="0.9rem" py="0.5rem" textAlign="justify">
                    • Este proyecto me permitió mejorar mis habilidades en el
                    desarrollo de aplicaciones web y en la utilización de APIs
                    para obtener información.
                  </Text>
            </Flex>
          </motion.div>
        )}
      </motion.div>

      {!pending ? (
        <Box p="6">
          <Flex justify="space-around" align="center" gap="1rem">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
              <Button
                onClick={handleClick}
                rightIcon={<TbArrowRampRight2 />}
                w="7.5rem"
                bg="#09aeba"
                bgGradient="linear(to-b, #1f7780, #0f7c7f)"
                _hover={{
                  bgGradient: "linear(to-b, #105a69, #0f7c7f, #1f7780)",
                }}
                borderColor="#2D3748"
                boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
                fontSize="14px"
                color="#1a1a1a"
                // isDisabled={titulo === "Upcoming ..." ? true : false}
              >
                {!showImage ? <Text>Mostrar mas</Text> : <Text>Regresar</Text>}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
              <Link>
                <Button
                  rightIcon={<TbArrowRampRight2 />}
                  w="7.5rem"
                  bg="#09aeba"
                  bgGradient="linear(to-b, #1f7780, #0f7c7f)"
                  _hover={{
                    bgGradient: "linear(to-b, #105a69, #0f7c7f, #1f7780)",
                  }}
                  borderColor="#2D3748"
                  boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
                  fontSize="14px"
                  color="#1a1a1a"
                  // isDisabled={titulo === "Upcoming ..." ? true : false}
                >
                  Sitio Web
                </Button>
              </Link>
            </motion.div>
          </Flex>
        </Box>
      ) : (
        <Flex justify="center" align="center" pt="1.5rem">
          <Text fontWeight="medium" color="gray" fontSize="1.3rem">
            Upcoming ...
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default CardProjectP;
