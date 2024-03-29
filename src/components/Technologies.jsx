import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading, HStack, Grid } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
const Technologies = () => {
  const { colorMode } = useColorMode();
  return (
    <div>
      <Heading align="center">Technologies that I've used</Heading>

      <Grid
        mt="10"
        align="center"
        gap={{base: 2, md: 6}}
        templateColumns={{
          base: "repeat(1, 1fr)", // for small devices
          md: "repeat(2, 1fr)", // for medium devices
          lg: "repeat(3, 1fr)",
        }}
      >
        {technologies.map((technology) => (
          <div>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Technologies;
