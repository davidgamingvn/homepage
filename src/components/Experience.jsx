import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Container,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { experiences } from "../constants";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);

const ExperienceItem = ({ title, company, duration, description, isLast }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <MotionFlex
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: isDark
          ? "0 8px 20px rgba(255, 255, 255, 0.025)" // More transparent for dark theme
          : "0 8px 20px rgba(0, 0, 0, 0.05)", // More transparent for light theme
        padding: "20px",
        borderRadius: "12px",
      }}
      transition={{ duration: 0.5 }}
      mb={isLast ? 0 : 12}
      p={4}
      bg={isDark ? "gray.800" : "white"}
    >
      <MotionBox
        mr={4}
        position="relative"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          w={4}
          h={4}
          borderRadius="full"
          bg="blue.500"
          position="relative"
          zIndex={2}
          mt={1}
        />
      </MotionBox>
      <Box flex={1}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontWeight="bold">{company}</Text>
        <Text fontSize="sm" color={isDark ? "gray.400" : "gray.500"}>
          {duration}
        </Text>
        <Text mt={2}>{description}</Text>
      </Box>
    </MotionFlex>
  );
};

const Experience = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box py={10}>
      <Container maxW="container.md">
        <MotionVStack
          spacing={8}
          align="stretch"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MotionHeading
            as="h2"
            size="xl"
            textAlign="center"
            mb={8}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            color={isDark ? "white" : "black"}
          >
            Experience
          </MotionHeading>
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </MotionVStack>
      </Container>
    </Box>
  );
};

export default Experience;
