import React from "react";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import logoinstansi from "../assets/logoinstansi.png";

const rekapPresensi = [
  {
    rekapId: 1,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 2,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 3,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 4,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
  {
    rekapId: 5,
    nama: "Exercitation mollit cillum excepteur",
    tandaTangan: "TTD",
    waktu: "12/12/22 - 08.00 Wib",
    unit: "Pusat Teknologi Informasi",
  },
];

const PrintRekap = () => {
  return (
    <>
      <Box
        bg="white"
        sx={{
          "@page": {
            size: "auto",
            margin: "15mm 10mm",
          },
        }}
      >
        <Flex gap={5}>
          <Image ml={5} src={logoinstansi} />
          <Flex flexDir="column" justifyContent="center">
            <Heading size="lg"> Pusat Teknologi Informasi</Heading>
            <Text>Rapat Perencanaan Pengadaan </Text>
            <Text>20 Agustus 2022 - 08.00 WIB </Text>
          </Flex>
        </Flex>
        <Divider my={5} />
        <TableContainer>
          <Table variant="striped" fontSize="xs">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Nama</Th>
                <Th>Unit Kerja</Th>
                <Th>Tanda tangan</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rekapPresensi.map((data, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>

                  <Td>{data.nama}</Td>
                  <Td>{data.unit}</Td>
                  <Td>{data.tandaTangan}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default PrintRekap;
