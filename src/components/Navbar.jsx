import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdTimeline } from "react-icons/md";
import { Link as LinkRouter } from "react-router-dom";

const navLinks = [
  // { name: "Rapat", path: "/" },
  { name: "Settings", path: "/settings" },
];

const dropdownLinks = [
  {
    name: "Projects",
    path: "#",
    icon: MdTimeline,
  },
  {
    name: "Tech Stack",
    path: "#",
    icon: AiTwotoneThunderbolt,
  },
  {
    name: "Open Source",
    path: "#",
    icon: BsBook,
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: "gray.200",
    color: "blue.500",
  };

  return (
    <Box px={4} boxShadow="md" width="100%" bg="white">
      <Container maxW={"5xl"}>
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
        >
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <LinkRouter to="dashboard">
              <Text
                fontWeight="extrabold"
                color="blue.400"
                _hover={{ color: "blue.500" }}
              >
                📅 E-RAPAT
              </Text>
            </LinkRouter>
            <HStack
              as="nav"
              spacing={1}
              display={{ base: "none", md: "flex" }}
              alignItems="center"
            >
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </HStack>
          </HStack>

          <Flex gap={3}>
            <Text size="sm">Dwiki</Text>
            <IconButton
              variant="link"
              aria-label="LogOut Button"
              icon={<FiLogOut />}
            />
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={["inherit", "inherit", "none"]}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

const NavLink = ({ name, path, onClose }) => {
  const link = {
    bg: "gray.200",
    color: "blue.500",
  };

  return (
    <LinkRouter to={path}>
      <Text
        px={3}
        py={1}
        lineHeight="inherit"
        rounded="md"
        _hover={{
          textDecoration: "none",
          bg: link.bg,
          color: link.color,
        }}
        onClick={() => onClose()}
      >
        {name}
      </Text>
    </LinkRouter>
  );
};

const MenuLink = ({ name, path, icon, onClose }) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem
        _hover={{
          color: "blue.400",
          bg: "gray.200",
        }}
      >
        <HStack>
          <Icon as={icon} size={18} color="blue.400" />
          <Text>{name}</Text>
        </HStack>
      </MenuItem>
    </Link>
  );
};

export default Navbar;
