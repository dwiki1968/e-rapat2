import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Flex flexDir="column" minH="100vh" bg="gray.50">
        <Navbar />
        <Container maxW="5xl" py={8}>
          <Outlet />
        </Container>
        <Box flex="1" />
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
