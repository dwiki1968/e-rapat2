import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="blue.100"
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box color="gray.700">
      <Container
        as={Stack}
        maxW={"5xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontSize="sm">© 2022 Pusat TI PPATK. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FiTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FiYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FiInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
