import { Link as ReactRouter, useLocation } from "react-router-dom";
import {
  Flex,
  Text,
  Link,
  Avatar,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { MdPermContactCalendar } from "react-icons/md";
import { motion } from "framer-motion";
import {
  AiOutlineMenu,
  IoIosHammer,
  GiSkills,
  RiContactsLine,
} from "../../icons";
import { DarkModeButton } from "../AddsMotion/DarkModeButton";
import BallsLoop from "../AddsMotion/BallsLoop";
import { useState } from "react";

const NavBar = () => {
  const links = [
    { to: "/about", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const { isOpen, onClose } = useDisclosure();

  const handleCloseMenu = () => {
    onClose();
  };

  const location = useLocation();
  const pathname = location.pathname;

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const bgGradient = isDark
    ? "linear(to-r, #0c0d0d, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #1a1a1a, #0c0d0d)"
    : "linear(to-r, #dedede, #dedede, #dedede, #dedede, #dedede, #dedede, #dedede, #dedede, #dedede, #dedede, #dedede)";

  return (
    <Flex
      fontSize="1rem"
      borderColor="black"
      boxShadow="2px 0 10px rgba(0, 0, 0, 0.3)"
      px="1rem"
      h="4rem"
      w="100%"
      bg={isDark ? "rgba(26, 26, 26, 0.93)" : "rgba(222, 222, 222, 0.93)"}
      zIndex="1"
      position="fixed"
    >
      <Link as={ReactRouter} to="/" _hover="none">
        <Flex position="relative" h="100%" w="13rem" align="center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Flex
              color={pathname === "/" && "#09aeba"}
              align="center"
              gap="1rem"
              px="1rem"
            >
              <Avatar
                size="md"
                name="Jeremy"
                src="https://res.cloudinary.com/dzxiqsg9i/image/upload/v1683026361/Portfolio/Jeremy_xz24jx.jpg"
              />

              <Text color={pathname === "/" && "#09aeba"}>JEREMY ANDRE</Text>
            </Flex>
          </motion.div>
        </Flex>
      </Link>

      <BallsLoop />

      <Flex ml="auto" display={{ base: "flex", lg: "none" }}>
        <Menu variant="navbar" placement="bottom">
          <MenuButton px={4}>
            <AiOutlineMenu size="1.5rem" />
          </MenuButton>

          <MenuList
            bg={isDark ? "rgba(26, 26, 26, 0.93)" : "rgba(222, 222, 222, 0.93)"}
            border="0"
            w="100vw"
            boxShadow="2px 0 10px rgba(0, 0, 0, 0.3)"
          >
            <Flex direction="column" align="center" justify="center" py="1rem">
              <DarkModeButton />
              {links.map((link, index) => (
                <Link
                  as={ReactRouter}
                  key={index}
                  to={link.to}
                  w="100%"
                  _hover="none"
                >
                  <MenuItem justifyContent="center" bg="transparent">
                    <Flex
                      color={pathname === link.to && "#09aeba"}
                      p="1.5rem"
                      gap="6rem"
                    >
                      {link.label === "Projects" && <IoIosHammer />}
                      {link.label === "Skills" && <GiSkills />}
                      {link.label === "Contact" && <RiContactsLine />}
                      <Text w="4rem">{link.label}</Text>
                    </Flex>
                  </MenuItem>
                </Link>
              ))}
            </Flex>
          </MenuList>
        </Menu>
      </Flex>

      <Flex ml="auto" display={{ base: "none", lg: "flex" }}>
        {links.map((link, index) => (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link as={ReactRouter} key={index} to={link.to} _hover="none">
              <Flex position="relative" h="100%" align="center">
                <Flex
                  color={pathname === link.to && "#09aeba"}
                  align="center"
                  justify="center"
                  gap="1rem"
                  w="8rem"
                >
                  {link.label === "Projects" && <IoIosHammer />}
                  {link.label === "Skills" && <GiSkills />}
                  {link.label === "Contact" && <RiContactsLine />}
                  <Text>{link.label}</Text>
                </Flex>
                {pathname === link.to && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: 0,
                      height: "4px",
                      backgroundColor: "#09aeba",
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
              </Flex>
            </Link>
          </motion.div>
        ))}

        <Flex justify="center" align="center" px="0.5rem">
          <DarkModeButton />
        </Flex>
      </Flex>

      {/*-MOBILE-------------------------------------------------------------*/}
    </Flex>
  );
};

export default NavBar;
