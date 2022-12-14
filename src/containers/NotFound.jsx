import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Heading>404 | NotFound</Heading>
      <Text mb={5}>Halaman yang anda cari tidak ditemukan.</Text>
      <Link to="/">
        <Button bg="blue.200" leftIcon={<FiHome />}>
          Beranda
        </Button>
      </Link>
    </>
  );
};

export default NotFound;
