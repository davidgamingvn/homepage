import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { VStack, Flex, Spacer } from "@chakra-ui/layout";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

import particleOptions from "./utils/particle";
import Contact from "./components/Contact";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const options = particleOptions;
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div className="App">
      <div className="element" style={{ zIndex: 0 }}>
        <Particles options={options} init={particlesInit} />
      </div>
      <VStack p={10}>
        <Flex w="100%">
          <Spacer></Spacer>
          <IconButton
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Header></Header>
      </VStack>

      <Projects></Projects>
      <Spacer></Spacer>
      <Technologies></Technologies>
      <Contact></Contact>
    </div>
  );
}

export default App;
