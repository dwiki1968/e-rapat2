import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
import JudulRapat from "../components/JudulRapat";

const FormPresensi = () => {
  return (
    <div>
      <JudulRapat />

      <Box p={5} bg="white">
        <FormControl mb={5}>
          <FormLabel>Nama</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl>
          <FormLabel>Unit Kerja</FormLabel>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default FormPresensi;
