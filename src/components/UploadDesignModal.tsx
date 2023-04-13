import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Input,
} from "@chakra-ui/react";
import { FC, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Button } from "./Button";
import { usePathname, useRouter } from "next/navigation";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase/firebase";
import { userState } from "@/app/state/user";
import { useRecoilState } from "recoil";
type UploadDesignModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const UploadDesignModal: FC<UploadDesignModalProps> = ({
  isOpen,
  onClose,
}) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File>();
  const toast = useToast();

  const [user, setUser] = useRecoilState(userState);
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const fileUpload = () => {
    if (!inputRef.current) return;
    // 今のところコレ解決できない。
    // @ts-ignore マジですんません
    inputRef.current.click();
  };
  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setFileName(event.target.files[0].name);
    setFile(event.target.files[0]);
  };
  const onSubmit = () => {
    if (file === undefined) {
      toast({
        title: "ファイルを選択してください",
        position: "bottom",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const storageRef = ref(storage, `images/${id}/${user?.uid}/${fileName}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded an image!", snapshot.metadata);
    });
    setFile(undefined);
    setFileName("");
    onClose();
    toast({
      title: "デザインを送信しました",
      position: "bottom",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>デザインを投稿</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box paddingTop="6px">{fileName}</Box>
          <Input
            hidden
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onFileInputChange}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={fileUpload}
            label="デザインを選択"
            style={{ mr: "3" }}
          />
          <Button
            onClick={onSubmit}
            label="提出"
            style={{ isDisabled: !file }}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
