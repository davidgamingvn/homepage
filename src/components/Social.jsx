import React from "react";
import { HStack } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Social() {
  return (
    <HStack>
      <Icon as={FaGithub} boxSize="50" />
    </HStack>
  );
}

export default Social;
