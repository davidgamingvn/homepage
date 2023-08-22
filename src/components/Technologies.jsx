import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading, HStack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
const Technologies = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px");
  return (
    <div>
      <Heading align="center">Experiences and Technologies</Heading>
      <HStack>
        {technologies.map((technology) => (
          <div>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </HStack>
    </div>
  );
};

export default Technologies;
