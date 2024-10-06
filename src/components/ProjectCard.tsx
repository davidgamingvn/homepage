import React from "react";
import {
  Badge,
  Flex,
  Box,
  Image,
  Text,
  DarkMode,
  useColorModeValue,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";

const ProjectCard = ({ project }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const isMobile = useBreakpointValue({ base: true, md: false });

  let boxBg = useColorModeValue("#e5f3ff !important", "#12191f !important");
  let mainText = useColorModeValue("white", "gray.200");
  let iconColor = useColorModeValue("brand.200", "white");

  return (
    <Flex
      borderRadius="20px"
      bg={isDark ? boxBg : "gray.100"}
      p="20px"
      maxH="460px"
      w={isMobile ? "90vw" : { md: "350px", sm: "360px" }}
      alignItems="center"
      direction="column"
      mt={isMobile ? "0" : "20px"}
      ml={isMobile ? "0" : "20px"}
      mx={isMobile ? "auto" : "0"}
    >
      <Flex w="100%" mb="18px">
        <Text
          my="auto"
          fontWeight="600"
          color={isDark ? "black.700" : "gray.700"}
          textAlign="center"
          fontSize="xl"
          me="auto"
        >
          {project.name}
        </Text>
        <Flex w="38px" h="38px" align="center" justify="center" me="12px">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <IconButton
              w="40px"
              h="40px"
              isRound={true}
              as={FaGithub}
              color={iconColor}
            />
          </a>
        </Flex>
      </Flex>
      <Box position="relative" width="100%">
        <Image
          src={project.image}
          w="100%"
          h="250px"
          objectFit="cover"
          borderRadius="20px"
        />
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          p="10px"
          opacity="0"
          backgroundColor="rgba(0,0,0,0.5)"
          borderRadius="xl"
          transition="opacity 0.2s ease"
          _hover={{ opacity: "1" }}
        >
          <Text
            mt="auto"
            fontWeight="semibold"
            color={mainText}
            textAlign="start"
            fontSize="lg"
            w="100%"
          >
            {project.description}
          </Text>
        </Box>
      </Box>
      <Flex
        mt="20px"
        justifyContent="center"
        flexWrap="wrap"
        gap="2"
        w="100%"
        align="center"
      >
        <DarkMode>
          {project.technologies.map((technology) => (
            <Badge
              key={technology}
              variant="subtle"
              borderRadius="5px"
              size="md"
              colorScheme="green"
              color={isDark ? "gray.300" : "green.700"}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {technology}
            </Badge>
          ))}
        </DarkMode>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
