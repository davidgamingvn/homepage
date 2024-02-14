import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading, Grid } from "@chakra-ui/react";
import { projects } from "../constants";

// Assets

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div padding="10px" mb="auto" mt="auto">
      <Heading align="center">My Projects</Heading>
      <Grid
        mt="auto"
        mb="10"
        padding="20px"
        align="center"
        gap={6}
        templateColumns={{
          base: "repeat(1, 1fr)", // for small devices
          md: "repeat(2, 1fr)", // for medium devices
          lg: "repeat(3, 1fr)",
        }}
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
