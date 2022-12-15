import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Image,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import JudulRapat from "../components/JudulRapat";
import SignatureCanvas from "react-signature-canvas";

const FormPresensi = () => {
  const sigCanvas = useRef();

  const [nama, setNama] = useState("");
  const [isPegawai, setIsPegawai] = useState("");
  const [unitKerja, setUnitKerja] = useState("");
  const [signature, setSignature] = useState("");

  const create = async () => {
    const URL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setSignature(URL);
    console.log("first");
    return;
  };

  const clear = () => {
    setSignature("");
    sigCanvas.current.clear();
  };

  const handleSubmit = async () => {
    await create();

    const data = {
      nama,
      isPegawai,
      unitKerja,
      signature,
    };

    console.log(data);
  };

  return (
    <div>
      <JudulRapat />
      <Box my={10} />

      <Flex flexDir="column" gap={5} p={5} bg="white">
        <FormControl>
          <FormLabel>Nama</FormLabel>
          <Input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Pagawai PPATK?</FormLabel>
          <RadioGroup value={isPegawai} onChange={setIsPegawai}>
            <Stack direction="row">
              <Radio mr={3} value="1">
                Ya
              </Radio>
              <Radio value="2">Bukan</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Unit Kerja</FormLabel>
          {isPegawai == "1" ? (
            <Select
              value={unitKerja}
              onChange={(e) => setUnitKerja(e.target.value)}
              placeholder="Select option"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          ) : (
            <Input
              type="text"
              value={unitKerja}
              onChange={(e) => setUnitKerja(e.target.value)}
            />
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Tanda Tangan</FormLabel>
          <Box borderWidth="1px" width="fit-content">
            <SignatureCanvas penColor="blue" ref={sigCanvas} />
          </Box>
          <Button size="xs" onClick={clear}>
            Clear
          </Button>
        </FormControl>

        <Button bg="blue.200" width="100px" onClick={handleSubmit}>
          Submit
        </Button>
      </Flex>
    </div>
  );
};

export default FormPresensi;
