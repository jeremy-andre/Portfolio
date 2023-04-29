import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const HobbiesCard = ({ interest }) => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      onClick={handleClick}
      transition={{ duration: 0.3 }}
    >
      {!showImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            key={interest.title}
            bgGradient={interest.bgGradient}
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
            borderRadius="md"
            w={64}
            h={48}
            p={4}
            mx={2}
            my={4}
            cursor="pointer"
            overflow="hidden"
          >
            <Heading as="h3" size="md" mb="1rem" color="#09aeba">
              {interest.title}
            </Heading>
            <Text textAlign="justify">{interest.description}</Text>
          </Box>
        </motion.div>
      )}

      {showImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <Box
            key={interest.title}
            bgGradient={interest.bgGradient}
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
            borderRadius="md"
            w={64}
            h={48}
            mx={2}
            my={4}
            cursor="pointer"
            overflow="hidden"
          >
            <Image w="100%" h="100%" src={interest.image} alt="Dan Abramov" />
          </Box>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HobbiesCard;
