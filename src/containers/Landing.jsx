import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import CardRapatPublic from "../components/CardRapatPublic";
import MeetingAnimation from "../components/MeetingAnimation";
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

const Landing = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Flex flexDir="column">
          <Heading
            color="gray.600"
            maxW="400px"
            mb={2}
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
          >
            e-rapat
          </Heading>
          <Text color="gray.500">
            Aplikasi untuk membantu kegiatan rapat pada Pusat Pelaporan dan
            Analisis Transaksi Keuangan
          </Text>
        </Flex>
        <Box>
          <MeetingAnimation />
        </Box>
      </Flex>
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

      {rapatlist.map((rapat) => (
        <CardRapatPublic key={rapat.id} data={rapat} />
      ))}

      <Pagination />
    </>
  );
};

export default Landing;
