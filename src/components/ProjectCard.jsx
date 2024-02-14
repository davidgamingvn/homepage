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
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import { useColorMode } from "@chakra-ui/color-mode";

const ProjectCard = ({ project }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  let boxBg = useColorModeValue("#e5f3ff !important", "#12191f !important");
  let mainText = useColorModeValue("white");
  let iconColor = useColorModeValue("brand.200", "white");

  return (
    <div>
      <Flex
        borderRadius="20px"
        bg={isDark ? boxBg : "gray.100"}
        p="20px"
        maxH="460px"
        w={{ md: "350px", sm: "360px" }}
        alignItems="center"
        direction="column"
        mt="20px"
        ml="20px"
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
            <a href={project.link} target="blank">
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
        <Box position="relative">
          <Image src={project.image} w="350px" h="250px" borderRadius="20px" />

          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            p="10px" // padding to make the box smaller than the image
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
        <Flex mt="20px" justifyContent="center" gap="2" w="100%" align="center">
          <DarkMode>
            {project.technologies.map((technology) => (
              <Badge
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
    </div>
  );
};

export default ProjectCard;
