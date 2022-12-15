import React, { useRef } from "react";

import {
  Box,
  Button,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FiPrinter, FiTrash } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
import PrintRekap from "./PrintRekap";

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
];

const RekapPresensiTable = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Box display="none">
        <Box ref={componentRef}>
          <PrintRekap />
        </Box>
      </Box>
      <Box bg="white" mt={5} p={5}>
        <Button leftIcon={<FiPrinter />} mb={5} onClick={handlePrint}>
          Cetak
        </Button>
        <TableContainer>
          <Table fontSize="xs" variant="simple">
            <Thead>
              <Tr>
                <Th>nama</Th>
                <Th>Unit Kerja</Th>
                <Th>Tanda tangan</Th>
                <Th>time stamp</Th>

                <Th>aksi</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rekapPresensi.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.nama}</Td>
                  <Td>{data.unit}</Td>
                  <Td>{data.tandaTangan}</Td>
                  <Td>{data.waktu}</Td>
                  <Td>
                    <IconButton
                      icon={<FiTrash />}
                      variant="link"
                      colorScheme={"red"}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default RekapPresensiTable;
