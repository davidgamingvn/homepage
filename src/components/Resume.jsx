import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import resume from "../assets/resume.pdf";
import { Flex, Button, Box } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

const Resume = () => {
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;
  const [showPdf, setShowPdf] = useState(false);
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "transparent", // background color when light color mode
    dark: "white", // background color when dark color mode
  };

  return (
    <div>
      <Flex justifyContent="center" alignItems="center" padding={10}>
        <Button
          leftIcon={showPdf ? <ViewOffIcon /> : <ViewIcon />}
          onClick={() => setShowPdf(!showPdf)}
        >
          Resume
        </Button>
      </Flex>
      {showPdf && (
        <Flex
          direction={{ base: "column", md: "row", lg: "row"}}
          justifyContent="center"
          alignItems="center"
          height="600px"
          width={{ base: "90%", md: "75%", lg: "50%" }}
          margin="auto"
          padding={5}
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Box bg={bgColor[colorMode]} color="white" padding={1} borderRadius="md" margin="2">
              <DownloadButton />
            </Box>
            <Viewer fileUrl={resume} plugins={[getFilePluginInstance]} />
          </Worker>
        </Flex>
      )}
    </div>
  );
};

export default Resume;
