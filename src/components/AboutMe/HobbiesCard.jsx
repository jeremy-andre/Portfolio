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
            w={{ base: "100%", md: "12rem", lg: "14rem", xl: "16rem" }}
            h={{ base: "11rem", md: "11rem", lg: "11.5rem", xl: "12rem" }}
            p={4}
            cursor="pointer"
            overflow="hidden"
          >
            <Heading  fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1.1rem", xl: "1.3rem" }} mb="1rem" color="#09aeba">
              {interest.title}
            </Heading>
            <Text textAlign="justify" fontSize={{ base: "0.68rem", md: "0.8rem", lg:"0.9rem", xl: "1rem" }} >{interest.description}</Text>
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
            w={{ base: "100%", md: "12rem", lg: "14rem", xl: "16rem" }}
            h={{ base: "11rem", md: "11rem", lg: "11.5rem", xl: "12rem" }}
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
