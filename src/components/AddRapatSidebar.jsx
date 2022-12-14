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
import React from "react";

const AddRapatSidebar = ({ isOpen, firstField, onClose }) => {
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
                />
              </Box>

              <Box>
                <FormLabel htmlFor="waktu">Waktu</FormLabel>
                <Input id="waktu" type="datetime-local" />
              </Box>

              <Box>
                <FormLabel htmlFor="nama">Tempat</FormLabel>
                <Input id="tempat" placeholder="contoh R. Rapat Lt 5" />
              </Box>

              <Box>
                <FormLabel htmlFor="unit">Pilih Unit Kerja</FormLabel>
                <Select id="unit" defaultValue="PTI">
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Keterangan</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddRapatSidebar;
