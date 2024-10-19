import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { experiences } from "@/constants";
import { motion } from "framer-motion";

const ExperienceTimeline = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Experiences
      </chakra.h3>
      {experiences.map((experience, index) => (
        
          <Flex mb="10px">
            {/* Desktop view(left card) */}
            {isDesktop && experience.id % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot />
                <Card {...experience} />
              </>
            )}

            {/* Mobile view */}
            {isMobile && (
              <>
                <LineWithDot />
                <Card {...experience} />
              </>
            )}

            {/* Desktop view(right card) */}
            {isDesktop && experience.id % 2 !== 0 && (
              <>
                <Card {...experience} />
                <LineWithDot />
                <EmptyCard />
              </>
            )}
          </Flex>
      ))}
    </Container>
  );
};

interface CardProps {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  location: string;
}

const Card = ({
  id,
  title,
  company,
  duration,
  description,
  location,
}: CardProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 20px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
      maxW={{ base: "80%" }}
    >
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
            {company}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {duration} • {location}
          </Text>
        </motion.div>
        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            fontSize="2xl"
            lineHeight={1.2}
            paddingTop={3}
            paddingBottom={3}
            fontWeight="bold"
            w="100%"
          >
            {title}
          </chakra.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <UnorderedList>
              {description.map((desc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <ListItem fontSize="md" padding={1}>
                    {desc}
                  </ListItem>
                </motion.div>
              ))}
            </UnorderedList>
          </motion.div>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "25px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default ExperienceTimeline;
