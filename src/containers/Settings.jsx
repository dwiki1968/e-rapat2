import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Settings = () => {
  return (
    <div>
      <Box bg="white" p={5}>
        <Heading mb={3}>Dwiki Krisna Saputra</Heading>
        <Text>Pusat Teknologi Informasi</Text>
        <Text mb={3}>dwiki.krisna@ppatk.go.id</Text>
        <Flex gap={3}>
          <Button>Ubah</Button>
          <Button>Req Update Password</Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Settings;
