import { useColorMode } from "@chakra-ui/color-mode";
import { DownloadIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);
  const resumeUrl =
    "https://drive.google.com/file/d/1KM4KVbgXgcLUVTKak78oylwFy_tOkzLl/preview";
  const downloadUrl =
    "https://drive.usercontent.google.com/u/0/uc?id=1KM4KVbgXgcLUVTKak78oylwFy_tOkzLl&export=download";
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
          direction={{ base: "column", md: "row", lg: "row" }}
          justifyContent="center"
          alignItems="center"
          height="600px"
          width={{ base: "90%", md: "75%", lg: "50%" }}
          margin="auto"
          gap={5}
          padding={5}
        >
          <Button variant="ghost">
            <a href={downloadUrl} download="Phuc_Nguyen_Resume.pdf">
              <DownloadIcon />
            </a>
          </Button>
          <iframe
            src={resumeUrl}
            width="100%"
            height="100%"
            allowFullScreen
            title="Phuc_Nguyen_Resume"
          ></iframe>
        </Flex>
      )}
    </div>
  );
};

export default Resume;
