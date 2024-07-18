import React, { useCallback, useRef } from "react";
import {
  IconButton,
  VStack,
  Flex,
  Box,
  Button,
  useDisclosure,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ArrowUpIcon } from "@chakra-ui/icons";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import particleOptions from "./utils/particle";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Experience from "./components/Experience";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const options = particleOptions;
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Create refs for each section
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const technologiesRef = useRef(null);
  const resumeRef = useRef(null);
  const topRef = useRef(null);

  return (
    <div ref={topRef} id="top" className="App">
      <div
        className="element"
        style={{
          zIndex: 0,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Particles options={options} init={particlesInit} />
      </div>
      <VStack p={10} style={{ zIndex: 1, position: "relative" }}>
        <Flex
          w="100%"
          mb={4}
          p={4}
          borderColor="gray.200"
          borderRadius={15}
          align="center"
          justify="space-between"
          boxShadow="md"
          width="100%"
          position="relative"
          top={0}
          left={0}
          backdropFilter="blur(10px)"
        >
          <Box>
            <Flex gap={7} align="center" justifyContent="center" ml={4}>
              <Button
                variant="link"
                onClick={() =>
                  experienceRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Experience
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  projectsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  contactRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  technologiesRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Technologies
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  resumeRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Resume
              </Button>
            </Flex>
          </Box>
          <Flex align="center" gap={5}>
            <IconButton
              icon={isDark ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle Color Mode"
              variant="ghost"
              colorScheme="black"
              _hover={{ bg: isDark ? "gray.700" : "gray.200" }}
            />
          </Flex>
        </Flex>
        <Box mt={16}>
          {/* Ensure main content doesn't overlap with fixed navbar */}
          <Header />
        </Box>
      </VStack>

      <Box gap={4} style={{ zIndex: 1, position: "relative" }}>
        <div ref={topRef} /> {/* Ref for the top of the page */}
        <div ref={resumeRef} id="resume">
          <Resume />
        </div>
        <div ref={experienceRef} id="experience">
          <Experience />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={technologiesRef} id="technologies">
          <Technologies />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </Box>

      <Flex position="fixed" bottom="0" right="0" m={4} zIndex="tooltip">
        <IconButton
          variant="ghost"
          icon={<ArrowUpIcon />}
          onClick={() => {
            topRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          size="lg"
          boxShadow="md"
          _hover={{ bg: isDark ? "gray.700" : "gray.200" }}
        />
      </Flex>
    </div>
  );
}

export default App;
