import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Flex,
  Stack,
  Circle,
  Box,
  Text,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";

import Icon from "@chakra-ui/icon";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useMediaQuery } from "@chakra-ui/react";
const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px");
  return (
    <Stack>
      <Circle bg="blue.100" w="300px" h="300px" alignSelf="center">
        <Image
          alignSelf="center"
          borderRadius="full"
          src="src/assets/avatar.jpg"
        />
      </Circle>

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : "5"} align="flex-start">
          <Text fontSize="5xl" align="center">
            Hi, I am
          </Text>
          <Heading fontSize="5xl" fontWeight="bold" align="center">
            David Nguyen
          </Heading>
          <Text fontSize="xl" fontWeight="light" mt="3" align="center">
            Computer Science student at
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
                  Arizona State University
                </Button>
              </a>
            </Flex>
          </Text>
        </Box>
        <HStack spacing="30px" alignSelf="center" mt="10">
          <a href="https://github.com/dnguye92asu" target="_blank">
            <Icon as={FaGithub} boxSize="50" />
          </a>
          <a href="https://www.linkedin.com/in/dnguyen26/" target="_blank">
            <Icon as={FaLinkedin} boxSize="50" />
          </a>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default Header;
