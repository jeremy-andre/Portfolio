import { Box, useColorMode} from "@chakra-ui/react";
import { motion } from "framer-motion";

const BallsLoop = () => {
  const circles = [
    { initialY: -220, duration: 1.9, left: "10%", bgColor: "#c2c2c2" },
    { initialY: -260, duration: 1.8, left: "20%", bgColor: "#185057" },
    { initialY: -200, duration: 1.5, left: "30%", bgColor: "#20585e" },
    { initialY: -220, duration: 1.2, left: "40%", bgColor: "#c2c2c2" },
    { initialY: -140, duration: 2, left: "50%", bgColor: "#46b5c2" },
    { initialY: -120, duration: 2.8, left: "60%", bgColor: "#c2c2c2" },
    { initialY: -180, duration: 2.5, left: "70%", bgColor: "#2f7e87" },
    { initialY: -160, duration: 3, left: "80%", bgColor: "#5dafba" },
    { initialY: -240, duration: 2.2, left: "90%", bgColor: "#c2c2c2" },
  ];

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      width="100%"
      position="relative"
      overflow="hidden"
      borderColor="#c2c2c2"
      zIndex={-1}
      backdropFilter= "blur(10px)"
    >
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          initial={{ y: circle.initialY }}
          animate={{ y: "100%", rotate: 360 }}
          transition={{
            duration: circle.duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: circle.bgColor,
            position: "absolute",
            bottom: "-50px",
            left: circle.left,
            transform: "translateX(-50%)",
          }}
        />
      ))}
    </Box>
  );
};

export default BallsLoop;
