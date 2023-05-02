import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Stack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { MdPermContactCalendar } from "react-icons/md";
import { IoHome, IoHammerSharp } from "react-icons/io5";
import { Jeremy } from "../../img";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  DiGithubBadge,
  CiLinkedin,
  FaMoon,
  FaSun,
} from "../../icons";
import { DarkModeButton } from "../DarkModeButton/DarkModeButton";

const NavBar = ({ to }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        direction="column"
        position="fixed"
        py="3rem"
        h="100vh"
        fontSize="20px"
        borderRight="0.5px"
        borderColor="black"
        boxShadow="2px 0 10px rgba(0, 0, 0, 0.5)"
        // bgGradient="linear(to-t, #0f0f0f, #111212)"
        w="14rem"
      >
        <Stack
          direction="row"
          gap="0.5rem"
          align="center"
          px="2.5rem"
          pb="2rem"
        >
          <Avatar size="lg" name="Jeremy" src={Jeremy} />
          <Text fontSize="18px" w="5rem" textAlign="center">
            JEREMY ANDRE
          </Text>
        </Stack>

        <Flex justify="center" color="#09aeba" align="center" my="1rem">
          <DarkModeButton />
        </Flex>

        {/*-BROWSERS---------*/}
        <Link to="/">
          <Box position="relative">
            <motion.div
              whileHover={{ scale: 1.1, x: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              <Flex
                color={pathname === "/" && "#09aeba"}
                align="center"
                gap="1rem"
                px="2.5rem"
                py="0.5rem"
                my="1rem"
              >
                <IoHome size="1.4rem" />
                <Text>Home</Text>
              </Flex>
            </motion.div>
            {pathname === "/" && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  width: "4px",
                  backgroundColor: "#09aeba",
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </Box>
        </Link>

        <Link to="/about">
          <Box position="relative">
            <motion.div
              whileHover={{ scale: 1.1, x: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              <Flex
                color={pathname === "/about" && "#09aeba"}
                align="center"
                gap="1rem"
                px="2.5rem"
                py="0.5rem"
                my="1rem"
              >
                <MdPermContactCalendar size="1.4rem" />
                <Text>About</Text>
              </Flex>
            </motion.div>
            {pathname === "/about" && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  width: "4px",
                  backgroundColor: "#09aeba",
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </Box>
        </Link>

        <Link to="/projects">
          <Box position="relative">
            <motion.div
              whileHover={{ scale: 1.1, x: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              <Flex
                color={pathname === "/projects" && "#09aeba"}
                align="center"
                gap="1rem"
                px="2.5rem"
                py="0.5rem"
                my="1rem"
              >
                <IoHammerSharp size="1.4rem" />
                <Text>Projects</Text>
              </Flex>
            </motion.div>
            {pathname === "/projects" && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  width: "4px",
                  backgroundColor: "#09aeba",
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </Box>
        </Link>

        <Link to="/contact">
          <Box position="relative">
            <motion.div
              whileHover={{ scale: 1.1, x: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              <Flex
                color={pathname === "/contact" && "#09aeba"}
                align="center"
                gap="1rem"
                px="2.5rem"
                py="0.5rem"
                my="1rem"
              >
                <FaEnvelope size="1.4rem" />
                <Text>Contact</Text>
              </Flex>
            </motion.div>
            {pathname === "/contact" && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  width: "4px",
                  backgroundColor: "#09aeba",
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </Box>
        </Link>

        <Flex mt="auto" fontSize="18px" gap="1rem" justify="center">
          <a
            href="https://www.linkedin.com/in/jeremy-andre-flores/"
            target="top"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <CiLinkedin color="#0077B5" size="2rem" />
            </motion.div>
          </a>
          <a href="https://github.com/jeremy-andre" target="blank">
            <motion.div whileHover={{ scale: 1.3 }}>
              <DiGithubBadge size="2rem" />
            </motion.div>
          </a>
          <a href="mailto:jeremy.andre.99@gmail.com">
            <motion.div whileHover={{ scale: 1.3 }}>
              <CiMail color="#09aeba" size="2rem" />
            </motion.div>
          </a>
        </Flex>
      </Flex>

      {/*-MOBILE-------------------------------------------------------------*/}

      <Flex
        display={{ base: "flex", md: "none" }}
        direction="column"
        pt="4rem"
        px='0.3rem'
        pb="5rem"
        h="100vh"
        borderRight="0.5px"
        borderColor="black"
        boxShadow="2px 0 10px rgba(0, 0, 0, 0.5)"
        position="fixed"
      >
        <Flex justify="center" align="center" pb="2rem">
          <Avatar size="md" name="Jeremy" src={Jeremy} />
        </Flex>

        <Flex
          justify="center"
          align="center"
          py='1rem'
          onClick={toggleColorMode}
          cursor="pointer"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            {isDark ? <FaSun /> : <FaMoon />}
          </motion.div>
        </Flex>

        {/*-BROWSERS---------*/}
        <Link to="/">
          <Box position="relative">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Flex
                color={pathname === "/" && "#09aeba"}
                justify="center"
                align="center"
                py="1rem"
                my="0.5rem"
              >
                <IoHome size="1.4rem" />
              </Flex>
            </motion.div>
            {pathname === "/" && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  width: "4px",
                  backgroundColor: "#09aeba",
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </Box>
        </Link>

        <Link to="/about">
          <Box position="relative">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Flex
                color={pathname === "/about" && "#09aeba"}
                justify="center"
                align="center"
                py="1rem"
                my="0.5rem"
              >
                <MdPermContactCalendar size="1.4rem" />
              </Flex>
            </motion.div>
            {pathname === "/about" && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  width: "4px",
                  backgroundColor: "#09aeba",
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </Box>
        </Link>

        <Link to="/projects">
          <Box position="relative">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Flex
                color={pathname === "/projects" && "#09aeba"}
                justify="center"
                align="center"
                py="1rem"
                my="0.5rem"
              >
                <IoHammerSharp size="1.4rem" />
              </Flex>
            </motion.div>
            {pathname === "/projects" && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  width: "4px",
                  backgroundColor: "#09aeba",
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </Box>
        </Link>

        <Link to="/contact">
          <Box position="relative">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Flex
                color={pathname === "/contact" && "#09aeba"}
                justify="center"
                align="center"
                py="1rem"
                my="0.5rem"
              >
                <FaEnvelope size="1.4rem" />
              </Flex>
            </motion.div>
            {pathname === "/contact" && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  width: "4px",
                  backgroundColor: "#09aeba",
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </Box>
        </Link>

        <Flex mt="auto" fontSize="18px" justify="center">
          <a
            href="https://www.linkedin.com/in/jeremy-andre-flores/"
            target="top"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <CiLinkedin color="#0077B5" size="2rem" />
            </motion.div>
          </a>
          {/* <a href="https://github.com/jeremy-andre" target="blank">
            <motion.div whileHover={{ scale: 1.3 }}>
              <DiGithubBadge size="2rem" />
            </motion.div>
          </a>
          <a href="mailto:jeremy.andre.99@gmail.com">
            <motion.div whileHover={{ scale: 1.3 }}>
              <CiMail color="#09aeba" size="2rem" />
            </motion.div>
          </a> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
