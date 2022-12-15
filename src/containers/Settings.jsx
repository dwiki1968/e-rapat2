import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Animation from "../components/Animation";
import settings from "../assets/settings.json";
import { FiEdit3 } from "react-icons/fi";
const Settings = () => {
  return (
    <>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        bg="white"
        p={10}
        alignItems="center"
      >
        <Box>
          <Heading mb={3}>Dwiki Krisna Saputra</Heading>
          <Text>Pusat Teknologi Informasi</Text>
          <Text mb={3}>dwiki.krisna@ppatk.go.id</Text>
          <Flex gap={3}>
            <Button leftIcon={<FiEdit3 />} bg="blue.200">
              Ubah
            </Button>
            <Button bg="blue.200">Request Update Password</Button>
          </Flex>
        </Box>
        <Animation width={300} data={settings} />
      </Flex>
    </>
  );
};

export default Settings;
