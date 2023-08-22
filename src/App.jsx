import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
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
      <Technologies></Technologies>
    </>
  );
}

export default App;
