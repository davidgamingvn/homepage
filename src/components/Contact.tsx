"use client";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { useColorMode } from "@chakra-ui/color-mode";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { BorderBeam } from "./ui/border-beam";

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState({
    submitted: false,
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yznvdhd",
        "template_sgbjde3",
        {
          from_name: formState.user_name,
          from_email: formState.user_email,
          message: formState.message,
        },
        "-T7D8T8s4W25Wfsuq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormState({
            user_name: "",
            user_email: "",
            message: "",
          });
          setSubmissionStatus({ submitted: true, success: true });
        },
        (error) => {
          console.log(error.text);
          setSubmissionStatus({ submitted: true, success: false });
        }
      );
  };
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Container maxW="full">

      <Flex>
        <Box
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 10, lg: 15 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          {submissionStatus.submitted && (
            <Alert status={submissionStatus.success ? "success" : "error"}>
              <AlertIcon />
              {submissionStatus.success ? (
                <AlertTitle>Message sent!</AlertTitle>
              ) : (
                <AlertTitle>Message failed, please try again!</AlertTitle>
              )}
            </Alert>
          )}
          <Box p="4">
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading color={isDark ? "white" : "black"} ml="4" size="2xl">
                    Contact
                  </Heading>
                  <Text ml="4" mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to get in touch
                  </Text>
                  <Box py="5">
                    <VStack spacing="3" alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="#DCE2FF"
                        hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#ffc627" size="20px" />}
                      >
                        <Text color={isDark ? "gray.300" : "black"}>
                          +1 602-768-6562
                        </Text>
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="#DCE2FF"
                        hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#ffc627" size="20px" />}
                      >
                        <Text color={isDark ? "gray.300" : "black"}>
                          davidarthur260702@gmail.com
                        </Text>
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="#DCE2FF"
                        hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#ffc627" size="20px" />}
                      >
                        <Text color={isDark ? "gray.300" : "black"}>
                          Tempe, AZ
                        </Text>
                      </Button>
                    </VStack>
                  </Box>
                  <HStack mt="3" spacing={5} px={2} alignItems="flex-start">
                    <a
                      href="https://www.linkedin.com/in/davidnguyen2607/"
                      target="blank"
                    >
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        hover={{ bg: "#0D74FF" }}
                        icon={<BsLinkedin size="28px" />}
                      ></IconButton>
                    </a>
                    <a href="https://github.com/davidgamingvn" target="_blank">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      ></IconButton>
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m="7" color="#0b0e3f">
                    <VStack spacing="5">
                      <form ref={form} onSubmit={sendEmail}>
                        <FormControl>
                          <FormLabel>Your name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              name="user_name"
                              value={formState.user_name} // Corrected to use formState
                              onChange={handleChange}
                              size="md"
                              type="text"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              name="user_email"
                              value={formState.user_email} // Corrected to use formState
                              onChange={handleChange}
                              size="md"
                              type="text"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            name="message"
                            value={formState.message} // Corrected to use formState
                            onChange={handleChange}
                            placeholder="Type your message"
                            borderColor="gray.300"
                          />
                        </FormControl>
                        <FormControl id="submit" float="right">
                          <Button
                            type="submit"
                            mt="5"
                            variant="solid"
                            bg="#8c1d40"
                            color="white"
                            _hover={{ bg: "#ffc627", color: "black" }}
                            isLoading={
                              submissionStatus.submitted &&
                              !submissionStatus.success
                            }
                          >
                            Send message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
