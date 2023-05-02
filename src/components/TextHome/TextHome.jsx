import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const TextHome = () => {
  const [textColor, setTextColor] = useState("");

  return (
    <Box fontSize={{base:'2.1em', md:"4.5em"}} color={textColor}>
      <TypeAnimation
        sequence={[
          // Same string at the start will only be typed once, initially
          "Si puedes imaginarlo ...",
          2000,
          "Yo puedo crearlo!",
          2000,
          "Programar no es mágico ...",
          2000,
          "Programar es",
          750,
          () => setTextColor("#FF4136"),
          `Programar es m`,
          190,
          () => setTextColor("#0074D9"),
          "Programar es má",
          190,
          () => setTextColor("#2ECC40"),
          "Programar es mág",
          190,
          () => setTextColor("#FFDC00"),
          "Programar es mági",
          190,
          () => setTextColor("#B10DC9"),
          "Programar es mágic",
          190,
          () => setTextColor("#FF851B"),
          "Programar es mágico",
          190,
          () => setTextColor("#09aeba"),
          "Programar es mágico!",
          3500,
          () => setTextColor(""),
          // () => setTextSize("35px"),
        ]}
        speed={50}
        repeat={Infinity}
        deletionSpeed={80}
      />
    </Box>
  );
};

export default TextHome;
