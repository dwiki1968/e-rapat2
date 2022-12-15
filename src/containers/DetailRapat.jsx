import { Button } from "@chakra-ui/react";
import React from "react";
import { FiChevronLeft, FiEdit } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import CopyPresensi from "../components/CopyPresensi";
import JudulRapat from "../components/JudulRapat";
import PrintRekap from "../components/PrintRekap";
import RekapPresensiTable from "../components/RekapPresensiTable";

const DetailRapat = () => {
  const { rapatId } = useParams();

  console.log("rapatId", rapatId);

  return (
    <>
      <Link to="/dashboard">
        <Button mb={5} mr={5} leftIcon={<FiChevronLeft />}>
          Back
        </Button>
      </Link>
      <Button bg="blue.200" mb={5} leftIcon={<FiEdit />}>
        Ubah data
      </Button>
      <JudulRapat />
      <CopyPresensi />
      <RekapPresensiTable />
    </>
  );
};

export default DetailRapat;
