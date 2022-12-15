import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AddRapatSidebar = ({ isOpen, firstField, onClose }) => {
  const [nama, setNama] = useState("");
  const [waktu, setWaktu] = useState("");
  const [tempat, setTempat] = useState("");
  const [unitkerja, setUnitkerja] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const handleSubmit = () => {
    const data = {
      nama,
      waktu,
      tempat,
      unitkerja,
      keterangan,
    };

    console.log("data post", data);
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Buat rapat baru</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="nama">Nama</FormLabel>
                <Input
                  ref={firstField}
                  id="nama"
                  placeholder="Nama rapat anda"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="waktu">Waktu</FormLabel>
                <Input
                  id="waktu"
                  type="datetime-local"
                  value={waktu}
                  onChange={(e) => setWaktu(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="nama">Tempat</FormLabel>
                <Input
                  id="tempat"
                  placeholder="contoh R. Rapat Lt 5"
                  value={tempat}
                  onChange={(e) => setTempat(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="unit">Pilih Unit Kerja</FormLabel>
                <Select
                  id="unit"
                  value={unitkerja}
                  onChange={(e) => setUnitkerja(e.target.value)}
                >
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Keterangan</FormLabel>
                <Textarea
                  id="desc"
                  value={keterangan}
                  onChange={(e) => setKeterangan(e.target.value)}
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddRapatSidebar;
