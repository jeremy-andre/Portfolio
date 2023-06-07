import { Flex } from "@chakra-ui/react";
import { FaEnvelope, DiGithubBadge, CiLinkedin } from "../../icons";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";

const SocialIcons = () => {
  return (
    <Flex gap={{ base: "1rem", lg: "1rem" }} justify="center">
      <a href="https://www.linkedin.com/in/jeremy-andre-flores/" target="top">
        <motion.div whileHover={{ scale: 1.3 }}>
          <CiLinkedin color="#0077B5" size="2rem" />
        </motion.div>
      </a>
      <a href="https://github.com/jeremy-andre" target="blank">
        <motion.div whileHover={{ scale: 1.3 }}>
          <DiGithubBadge color="#dedede" size="2rem" />
        </motion.div>
      </a>
      <a href="mailto:jeremy.andre.99@gmail.com">
        <motion.div whileHover={{ scale: 1.3 }}>
          <CiMail color="#09aeba" size="2rem" />
        </motion.div>
      </a>
    </Flex>
  );
};

export default SocialIcons;
