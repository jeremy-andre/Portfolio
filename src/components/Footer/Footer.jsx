import { Flex, Box, Text, Link } from "@chakra-ui/react";
import SocialIcons from "./SolcialIcons";

function Footer() {
  return (
    <Box
      as="footer"
      py="1.5rem"
      boxShadow="0px -4px 8px rgba(0, 0, 0, 0.2)"
      mt="auto"
      bgGradient="linear(to-r, #0c0d0d, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #0c0d0d)"
    >
      <Flex justify="center" align="center">
        <Text textAlign='center' fontSize="sm" color="gray.400" fontStyle="italic">
          "A maior glória em viver não está em nunca cair, mas em nos
          levantarmos cada vez que caímos."
        </Text>
      </Flex>
      <Flex justify="center" align="center" mt="2" gap="0.4rem">
        <Text fontSize="sm" color="gray.400">
          Desarrollado con ♥ por
        </Text>
        <Link
          href="https://jeremyandre.netlify.app/"
          target="blank"
          fontSize="sm"
          color="#cc5823"
        >
          Jeremy Andre
        </Link>
      </Flex>
      <Flex justify="center" align="center" mt="2">
        <SocialIcons />
      </Flex>
    </Box>
  );
}

export default Footer;
