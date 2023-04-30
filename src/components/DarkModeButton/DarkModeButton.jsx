import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { Box, useColorMode } from "@chakra-ui/react";

export const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const buttonVariants = {
    dark: { backgroundColor: "#1a1a1a" },
    light: { backgroundColor: "#dedede" },
    slideLeft: { x: "100%" },
    slideRight: { x: "0%" },
  };

  return (
    <motion.button
      onClick={toggleColorMode}
      variants={buttonVariants}
      animate={isDark ? "dark" : "light"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      style={{
        borderRadius: "50px",
        width: "80px",
        height: "40px",
        position: "relative",
      }}
    >
      <motion.div
        animate={isDark ? "light" : "dark"}
        style={{
          position: "absolute",
          top: "50%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <FaMoon color="#1a1a1a" />
      </motion.div>
      <motion.div
        animate={isDark ? "dark" : "light"}
        style={{
          position: "absolute",
          top: "50%",
          right: "25%",
          transform: "translate(50%, -50%)",
          zIndex: 1,
        }}
      >
        <FaSun color="#dedede" />
      </motion.div>
      <motion.div
        variants={buttonVariants}
        animate={isDark ? "slideRight" : "slideLeft"}
        style={{
          backgroundColor: isDark ? "#dedede" : "#1a1a1a",
          width: "50%",
          height: "100%",
          position: "relative",
          borderRadius: "50px",
        }}
      ></motion.div>
    </motion.button>
  );
};
