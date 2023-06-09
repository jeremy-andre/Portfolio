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
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Creating } from "../SvgMotion/Creating";

const CardProjectP = (props) => {
  const { title, date, pending, textos, image } = props;

  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };

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
          {title}
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
            {image ? (
                <Flex h="20rem" justify="center" align="center">
                    <Image
                      w="100%"
                      maxH="20rem"
                      src={image}
                      alt="Dan Abramov"
                    />
                </Flex>
            ) : (
              <Flex h="20rem" justify="center" align="center">
                <Creating />
              </Flex>
            )}
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
              overflowY="scroll"
              // css={{
              //   "&::-webkit-scrollbar": {
              //     width: "1rem",
              //   },
              // }}
            >
              {textos?.map((texto, index) => (
                <Box
                  key={index}
                  textAlign="justify"
                  fontSize="0.9rem"
                  py="0.5rem"
                >
                  {texto}
                </Box>
              ))}
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
              >
                {!showImage ? <Text>Mostrar mas</Text> : <Text>Regresar</Text>}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
              <Link
                to="https://github.com/jeremy-andre/Countries-APP"
                target="_blank"
              >
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
                >
                  Sitio Web
                </Button>
              </Link>
            </motion.div>
          </Flex>
        </Box>
      ) : (
        <Flex justify="center" align="center" pt="1.5rem">
          <Text fontWeight="medium" color="gray" fontSize="1.3rem" h="4rem">
            Upcoming ...
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default CardProjectP;
