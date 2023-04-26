import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const TextHome = () => {
  const [textColor, setTextColor] = useState("white");

  return (
    <Box fontSize="35px" color={textColor}>
      <TypeAnimation
        sequence={[
          // Same string at the start will only be typed once, initially
          "Si puedes imaginarlo ...",
          2000,
          "Yo puedo crearlo!",
          2000,
          "Programar no es mágico ... ",
          2000,
          "Programar es",
          750,
          () => setTextColor("#00FF00"),
          `Programar es m`,
          180,
          () => setTextColor("#9400D3"),
          "Programar es má",
          180,
          () => setTextColor("#00BFFF"),
          "Programar es mag",
          180,
          () => setTextColor("#FFD700"),
          "Programar es magi",
          180,
          () => setTextColor("#FF4500"),
          "Programar es magic",
          180,
          () => setTextColor("#00FF00"),
          "Programar es magico",
          180,
          () => setTextColor("#9400D3"),
          "Programar es magico!",
          3500,
          () => setTextColor("white"),
          // () => setTextSize("35px"),
        ]}
        speed={50}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
        deletionSpeed={80}
      />
    </Box>
  );
};

export default TextHome;
