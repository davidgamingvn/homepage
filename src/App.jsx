import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { VStack, Flex, Spacer } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import particleOptions from "./utils/particle";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const options = particleOptions;
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div className="App">
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
      <div className="App">
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
          <Flex w="100%">
            <Spacer></Spacer>
            <IconButton
              icon={isDark ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            ></IconButton>
          </Flex>
          <Header></Header>
        </VStack>

        <Box>
          <Box style={{ zIndex: 1, position: "relative" }}>
            <Resume></Resume>
            <Projects></Projects>
            <Spacer></Spacer>
            <Technologies></Technologies>
            <Contact></Contact>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default App;
