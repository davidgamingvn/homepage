import React, { useState, useEffect } from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, DownloadIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import getResumeFromOneDrive from "../utils/fetchOneDrive";

const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [resumeUrl, setResumeUrl] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null)
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "transparent", // background color when light color mode
    dark: "white", // background color when dark color mode
  };

  useEffect(() => {
    const fetchResume = async () => {
      const [resumeUrl, downloadUrl] = await getResumeFromOneDrive();
      setResumeUrl(resumeUrl);
      setDownloadUrl(downloadUrl);
    };

    fetchResume();
  }, []);

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
      {showPdf && resumeUrl && (
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
            allowfullscreen
            title="Phuc_Nguyen_Resume"
          ></iframe>
        </Flex>
      )}
    </div>
  );
};

export default Resume;
