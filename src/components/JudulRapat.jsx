import { Flex, Heading, Tag } from "@chakra-ui/react";
import React from "react";

const JudulRapat = () => {
  return (
    <>
      <Heading mb={3}>
        Do nisi ipsum velit veniam culpa Lorem fugiat officia.
      </Heading>
      <Flex gap={3} mb={5} flexWrap="wrap">
        <Tag bg="blue.100" size="sm">
          Waktu: 12/11/2022 08.00 wib
        </Tag>
        <Tag bg="blue.100" size="sm">
          Tempat: Ruang rapat Lt.5
        </Tag>
        <Tag bg="blue.100" size="sm">
          Pusat Teknologi Informasi
        </Tag>
      </Flex>
    </>
  );
};

export default JudulRapat;
