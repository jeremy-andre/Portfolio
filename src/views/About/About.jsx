import { Flex, Box } from "@chakra-ui/react";
import { AboutMe, Education, SkillTech, SoftSkill, InterestsHobbies } from "../../components";

const About = () => {
  return (
    <Flex direction="column" justify="center" m="2rem" p='4rem' gap="5rem" w="70rem" >
      <AboutMe />
      <Education />
      <SkillTech />
      <SoftSkill />
      <InterestsHobbies />
    </Flex>
  );
};

export default About;
