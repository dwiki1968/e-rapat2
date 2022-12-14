import { Button, Flex, Heading, Tag } from "@chakra-ui/react";
import React from "react";
import { FiChevronLeft, FiEdit } from "react-icons/fi";
import { useParams } from "react-router-dom";
import CopyPresensi from "../components/CopyPresensi";
import RekapPresensiTable from "../components/RekapPresensiTable";

const DetailRapat = () => {
  const { rapatId } = useParams();
  console.log("rapatId", rapatId);

  return (
    <>
      <Button mb={5} mr={5} leftIcon={<FiChevronLeft />}>
        Back
      </Button>
      <Button bg="blue.200" mb={5} leftIcon={<FiEdit />}>
        Ubah data
      </Button>
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

      <CopyPresensi />

      <RekapPresensiTable />
    </>
  );
};

export default DetailRapat;
