import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import AddRapatSidebar from "../components/AddRapatSidebar";
import CardRapat from "../components/CardRapat";
import Pagination from "../components/Pagination";

const rapatlist = [
  {
    id: 1,
    nama: "Rapat Pelaksanaan Anggaran Pusat TI 2022",
    waktu: "11/12/2022 08.00 wib",
    tempat: "Ruang Rapat Lt.5",
  },
  {
    id: 2,
    nama: "Lorem in ut consequat velit enim dolore ea exercitation quis sunt.",
    waktu: "11/12/2022 13.00 wib",
    tempat: "zoom",
  },
  {
    id: 3,
    nama: "Laboris anim minim minim nostrud pariatur incididunt anim voluptate ipsum aliquip ut ullamco.",
    waktu: "6/12/2022 08.00 wib",
    tempat: "Ruang Rapat Lt.5",
  },
  {
    id: 4,
    nama: "Aute non sint non cupidatat ipsum nostrud veniam est esse minim proident non nisi.",
    waktu: "11/10/2022 07.00 wib",
    tempat: "Ruang Rapat Lt.5",
  },
  {
    id: 5,
    nama: "Sunt consequat mollit enim quis do fugiat minim occaecat aute sit ex amet.",
    waktu: "10/12/2022 08.00 wib",
    tempat: "Ruang Rapat Lt.5",
  },
];

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Heading mb={5}>Dashboard</Heading>
      <AddRapatSidebar
        isOpen={isOpen}
        firstField={firstField}
        onClose={onClose}
      />

      <Flex
        justifyContent="space-between"
        flexDir={{ base: "column-reverse", md: "row" }}
        gap={{ base: 3, md: 0 }}
      >
        <InputGroup maxW="500px">
          <Input
            bg="white"
            borderRadius="none"
            placeholder="Masukkan kata kunci"
          />
          <InputRightElement>
            <IconButton bg="blue.200" icon={<FiSearch />} borderRadius="none" />
          </InputRightElement>
        </InputGroup>

        <Box>
          <Button
            bg="blue.200"
            leftIcon={<FiPlus />}
            onClick={onOpen}
            borderRadius="none"
          >
            Tambah Rapat
          </Button>
        </Box>
      </Flex>

      {rapatlist.map((rapat) => (
        <CardRapat key={rapat.id} data={rapat} />
      ))}

      <Pagination />
    </>
  );
};

export default Home;
