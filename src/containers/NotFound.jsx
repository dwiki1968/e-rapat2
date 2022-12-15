import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import notfound from "../assets/notfound.json";
import Animation from "../components/Animation";

const NotFound = () => {
  return (
    <>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minH="70vh"
      >
        <Animation width={300} data={notfound} />
        {/* <Heading mb={3}>404 | NotFound</Heading> */}
        <Text color="gray.500" m={5}>
          Halaman yang anda cari tidak ditemukan.
        </Text>
        <Link to="/">
          <Button bg="blue.200" leftIcon={<FiHome />}>
            Beranda
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default NotFound;
