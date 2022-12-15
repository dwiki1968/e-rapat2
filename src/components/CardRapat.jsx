import { Box, Button, Flex, IconButton, Tag, Text } from "@chakra-ui/react";
import React from "react";

import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

const CardRapat = ({ data }) => {
  return (
    <Flex
      mt={5}
      gap={5}
      alignItems="center"
      py={5}
      justifyContent={{ base: "left", md: "space-between" }}
      p={3}
      _hover={{ shadow: "lg" }}
      bg="white"
      flexDir={{ base: "column", md: "row" }}
    >
      <Flex flexDir="column">
        <Link>
          <Text
            fontSize="md"
            mb={2}
            _hover={{
              color: "blue.500",
            }}
          >
            {data.nama}
          </Text>
        </Link>
        <Flex gap={3} alignItems="center">
          <Tag bg="blue.50" size="sm">
            {data.waktu}
          </Tag>
          <Tag bg="blue.50" size="sm">
            {data.tempat}
          </Tag>
        </Flex>
      </Flex>
      <Flex gap={2}>
        <IconButton color="blue.500" variant="link" icon={<FiEdit />} />
        <IconButton color="red.500" variant="link" icon={<FiTrash />} />
        <Button size="xs"> Rekap Presensi</Button>
      </Flex>
    </Flex>
  );
};

export default CardRapat;
