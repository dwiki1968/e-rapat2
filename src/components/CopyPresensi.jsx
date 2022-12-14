import { Button, Flex, Textarea, useClipboard } from "@chakra-ui/react";

export default function CopyPresensi() {
  const placeholder = "text to be copied...";
  const { onCopy, value, setValue, hasCopied } = useClipboard(
    `Yth. Bapak/Ibu peserta Rapat Perencanaan Anggaran \n\nBerikut link presensi: \nerapat.ppatk.go.id/presensi/\n\nTerima kasih`
  );

  return (
    <>
      <Flex mb={2}>
        <Textarea
          h="175px"
          bg="white"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          mr={2}
        />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </Flex>
    </>
  );
}
