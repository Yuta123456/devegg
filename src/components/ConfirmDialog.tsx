import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Button as YButton } from "./Button";
import { FC, useState } from "react";

type ConfirmDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  postData: () => Promise<void>;
};
export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  postData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = () => {
    setIsLoading(true);
    postData().finally(() => {
      setIsLoading(false);
    });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>メールアドレスの取り扱いについて</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text pb="20px">
              デザイナーさんが依頼に関してあなたと連絡を取るためにメールアドレスが必要になります。メールアドレスは、依頼の内容と共に公開されます。
              <br />
              また、メールアドレスはこの用途以外には使用されません。
              <br />
              以下の内容に同意される場合のみ依頼を投稿してください。依頼が投稿された場合には、以下の内容に同意したこととみなします。
            </Text>
            <UnorderedList>
              <ListItem>メールアドレスの公開に同意する</ListItem>
              <ListItem>メールアドレスが何に使われるかを確認した</ListItem>
            </UnorderedList>
          </ModalBody>

          <ModalFooter>
            <YButton
              label="内容を理解し依頼を投稿する"
              onClick={onSubmit}
              style={{ isLoading }}
            />
            <Button
              bg="white"
              size="lg"
              _hover={{ bg: "gray.100" }}
              variant="outline"
              ml="5px"
              onClick={onClose}
            >
              戻る
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
