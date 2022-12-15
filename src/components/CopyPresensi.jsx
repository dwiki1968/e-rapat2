import { Button, Flex, Textarea, useClipboard } from "@chakra-ui/react";

export default function CopyPresensi() {
  const placeholder = "text to be copied...";
  const { onCopy, value, setValue, hasCopied } = useClipboard(
    `Yth. Bapak/Ibu peserta Rapat Perencanaan Anggaran \n\nBerikut link presensi: \nerapat.ppatk.go.id/presensi/\n\nTerima kasih`
  );

  return (
    <>
      <Flex mb={2} position="relative">
        <Textarea
          fontSize="sm"
          h="150px"
          bg="white"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          mr={2}
        />
        <Button
          size="sm"
          position="absolute"
          top={5}
          right={5}
          onClick={onCopy}
        >
          {hasCopied ? "Copied!" : "Copy"}
        </Button>
      </Flex>
    </>
  );
}
