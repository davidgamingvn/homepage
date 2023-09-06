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
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { useColorMode } from "@chakra-ui/color-mode";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";

const Contact = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_khxpa97",
        "template_sgbjde3",
        form.current,
        "-T7D8T8s4W25Wfsuq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
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
          m={{ sm: 4, md: 16, lg: 100 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
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
                    <a href="https://github.com/dnguye92asu" target="_blank">
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
                      <form onSubmit={sendEmail}>
                        <FormControl>
                          <FormLabel>Your name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              name="user_name"
                              value={form.user_name}
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
                              value={form.user_email}
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
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type your message"
                            borderColor="gray.300"
                            hover={{ borderRadius: "gray.300" }}
                          />
                        </FormControl>
                        <FormControl id="submit" float="right">
                          <Button
                            type="submit"
                            mt = '5'
                            variant="solid"
                            bg="#8c1d40"
                            color="white"
                            _hover={{ bg: "#ffc627", color: "black" }}
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
