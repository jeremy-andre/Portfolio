import { Link, useLocation } from "react-router-dom";
import { Box, Flex, Text, Avatar, Stack } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { MdPermContactCalendar } from "react-icons/md";
import { IoHome, IoHammerSharp } from "react-icons/io5";
import { Jeremy } from "../../img";
import { motion } from "framer-motion";
import { FaEnvelope, DiGithubBadge, CiLinkedin } from "../../icons";

const NavBar = ({ to }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Box>
      <Flex
        direction="column"
        position="fixed"
        // gap="4rem"
        // px="2.5rem"
        py="3rem"
        h="100vh"
        fontSize="20px"
        color="#fafafa"
        borderRight="1px"
        borderColor="black"
        boxShadow="2px 0 10px rgba(0, 0, 0, 0.5)"
        // bgGradient="linear(to-b, #091629, #98d7eb, #d5e2e3, white, white)"
        // bgGradient="linear(to-t, #303841, #3A4750, #474F58, #535A61)"
        bgGradient="linear(to-t, #0f0f0f, #111212)"
        w="14rem"
      >
        <Stack
          direction="row"
          gap="0.5rem"
          align="center"
          px="2.5rem"
          pb="4rem"
        >
          <Avatar size="lg" name="Jeremy" src={Jeremy} />
          <Text fontSize="18px" w="5rem" textAlign="center">
            JEREMY ANDRE
          </Text>
        </Stack>

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
              // animate={pathname === "/contact" ? { color: "#0b2836", transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } } : {}}
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
              // animate={pathname === "/contact" ? { color: "#0b2836", transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } } : {}}
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
              // animate={pathname === "/contact" ? { color: "#0b2836", transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } } : {}}
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
          <a href="https://github.com/Jeremy23a" target="blank">
            <motion.div whileHover={{ scale: 1.3 }}>
              <DiGithubBadge size="2rem" />
            </motion.div>
          </a>
          <a href="mailto:jeremy.andre.99@gmail.com">
            <motion.div whileHover={{ scale: 1.3 }}>
              <CiMail color="#f7dc6f" size="2rem" />
            </motion.div>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;