import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode="dark" />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
