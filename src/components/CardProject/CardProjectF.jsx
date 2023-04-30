import { Flex, Image, Text, Box, Badge, Button } from "@chakra-ui/react";
import { TbArrowRampRight2 } from "react-icons/tb";
import { motion } from "framer-motion";

const CardProjectP = (props) => {
  const { titulo } = props;

  return (
    <Box
      w="18rem"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
    >
      <Image
        w="100%"
        h="20rem"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />

      <Box p="6">
        <Flex justify="space-between" gap="0.5rem">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="purple">
              FINALIZADO
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              feb - 23
            </Box>
            <Box
              ml="1"
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {titulo}
            </Box>
          </Box>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Button
              rightIcon={<TbArrowRampRight2 />}
              w="8rem"
              bg="#09aeba"
              mx="4"
              mt="1.5"
              bgGradient="linear(to-b, #1f7780, #0f7c7f)"
              _hover={{ bgGradient: "linear(to-b, #105a69, #0f7c7f, #1f7780)" }}
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

export default CardProjectP;
