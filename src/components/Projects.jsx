"use client";

import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Heading,
  Grid,
  Container,
  Box,
  useBreakpointValue,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

// Import CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container maxW="container.xl" centerContent>
      <VStack width="100%" spacing={6}>
        <Heading>My Projects</Heading>
        {isMobile ? (
          <Box
            position="relative"
            height="460px"
            width="full"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="50%"
              left={0}
              right={0}
              transform="translateY(-50%)"
              zIndex={2}
              display="flex"
              justifyContent="space-between"
              px={2}
            >
              <IconButton
                aria-label="left-arrow"
                colorScheme="blackAlpha"
                borderRadius="full"
                onClick={() => slider?.slickPrev()}
              >
                <BiLeftArrowAlt size="24px" />
              </IconButton>
              <IconButton
                aria-label="right-arrow"
                colorScheme="blackAlpha"
                borderRadius="full"
                onClick={() => slider?.slickNext()}
              >
                <BiRightArrowAlt size="24px" />
              </IconButton>
            </Box>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {projects.map((project) => (
                <Box key={project.name} px={2}>
                  <ProjectCard project={project} />
                </Box>
              ))}
            </Slider>
          </Box>
        ) : (
          <Grid
            width="100%"
            gap={6}
            templateColumns={{
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
          >
            {projects.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </Grid>
        )}
      </VStack>
    </Container>
  );
};

export default Projects;
