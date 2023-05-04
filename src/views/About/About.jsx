import { Flex, Box } from "@chakra-ui/react";
import {
  AboutMe,
  Education,
  SkillTech,
  SoftSkill,
  InterestsHobbies,
} from "../../components";

const About = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      m={{ base: "1rem", md: "3rem", lg: "4rem", xl: "6rem" }}
      mt={{ base: "2.5rem", md: "0rem" }}
      mb={{ base: "2.5rem", md: "0rem" }}
      maxW={{ base: "25rem", md: "none", lg: "none", xl: "65rem" }}
      minW="25rem"
      gap={{ base: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
    >
      <AboutMe />
      <Education />
      <SkillTech />
      <SoftSkill />
      <InterestsHobbies />
    </Flex>
  );
};

export default About;
