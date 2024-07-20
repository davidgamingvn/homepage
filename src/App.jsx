import React, { useCallback, useRef, useState } from "react";
import {
  IconButton,
  VStack,
  HStack,
  Flex,
  Box,
  Button,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  ArrowUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
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

  // Drawer state
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Determine if we should show the full navbar or the hamburger menu
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Function to handle navigation and close drawer on mobile
  const handleNavClick = (ref) => {
    // Close the drawer first if on mobile
    if (isMobile) {
      onClose();
    }
    // Use setTimeout to ensure the drawer closing animation doesn't interfere with scrolling
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const NavContent = ({ isMobile }) =>
    isMobile ? (
      <VStack align="flex-start" spacing={4}>
        <NavButton onClick={() => handleNavClick(experienceRef)}>
          Experience
        </NavButton>
        <NavButton onClick={() => handleNavClick(projectsRef)}>
          Projects
        </NavButton>
        <NavButton onClick={() => handleNavClick(contactRef)}>
          Contact
        </NavButton>
        <NavButton onClick={() => handleNavClick(technologiesRef)}>
          Technologies
        </NavButton>
        <NavButton onClick={() => handleNavClick(resumeRef)}>Resume</NavButton>
      </VStack>
    ) : (
      <HStack alignContent="baseline" align="flex-start" ml={4} spacing={7}>
        <NavButton onClick={() => handleNavClick(experienceRef)}>
          Experience
        </NavButton>
        <NavButton onClick={() => handleNavClick(projectsRef)}>
          Projects
        </NavButton>
        <NavButton onClick={() => handleNavClick(contactRef)}>
          Contact
        </NavButton>
        <NavButton onClick={() => handleNavClick(technologiesRef)}>
          Technologies
        </NavButton>
        <NavButton onClick={() => handleNavClick(resumeRef)}>Resume</NavButton>
      </HStack>
    );

  const NavButton = ({ children, onClick }) => (
    <Button
      variant="link"
      onClick={onClick}
      justifyContent="center"
      width="auto"
    >
      {children}
    </Button>
  );

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
          {isMobile ? (
            <IconButton
              icon={<HamburgerIcon />}
              onClick={onOpen}
              aria-label="Open Menu"
              variant="ghost"
            />
          ) : (
            <NavContent isMobile={false} />
          )}
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
          <Header />
        </Box>
      </VStack>

      <Box gap={4} style={{ zIndex: 1, position: "relative" }}>
        <div ref={topRef} />
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
          onClick={() => handleNavClick(topRef)}
          size="lg"
          boxShadow="md"
          _hover={{ bg: isDark ? "gray.700" : "gray.200" }}
        />
      </Flex>

      <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <NavContent isMobile={true} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default App;
