import { useColorMode } from "@chakra-ui/color-mode";
import { HStack } from "@chakra-ui/layout";
import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import avatar from "../assets/avatar.jpg";
import { Icon, useMediaQuery } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BlurIn from "./ui/blur-in";
import { motion } from "framer-motion";

// Define the animation for the waving hand
const waveAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: 1,
    },
  },
};

const blurInAnimation = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 1, ease: "easeOut" },
};

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px");
  return (
    <Stack>
      <Circle bg="blue.100" w="300px" h="300px" alignSelf="center">
        <Image alignSelf="center" borderRadius="full" src={avatar} />
      </Circle>

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : "5"} align="flex-start">
          <Text fontSize="5xl" align="center">
            Hi
            <motion.span
              initial="initial"
              animate="animate"
              variants={waveAnimation}
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
            >
              👋
            </motion.span>
            , I am
          </Text>
          <Heading fontSize="5xl" fontWeight="bold" align="center">
            David Nguyen
          </Heading>
          <Text fontSize="3xl" fontWeight="normal" mt="3" align="center">
            Full-stack Developer
            <Flex
              direction={isNotSmallerScreen ? "row" : "column"}
              spacing="200px"
              p={isNotSmallerScreen ? "32" : "0"}
              alignSelf="flex-start"
              mt="3"
            >
              <a href="https://asu.edu" target="blank">
                <Button
                  color="white"
                  ml="1"
                  bg="#8c1d40"
                  size="sm"
                  _hover={{ bg: "#ffc627", color: "black" }}
                >
                  🔱 Arizona State University 🔱
                </Button>
              </a>
            </Flex>
          </Text>
        </Box>
        <HStack spacing="30px" alignSelf="center" mt="10">
          <a href="https://github.com/davidgamingvn" target="_blank">
            <Icon as={FaGithub} boxSize="50" />
          </a>
          <a
            href="https://www.linkedin.com/in/davidnguyen2607/"
            target="_blank"
          >
            <Icon as={FaLinkedin} boxSize="50" />
          </a>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default Header;
