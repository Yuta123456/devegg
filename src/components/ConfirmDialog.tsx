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
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { FC } from "react";

type ConfirmDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  postData: () => void;
};
export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  postData,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>メールアドレスの取り扱いについて</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UnorderedList>
              <ListItem>
                デザイナーさんと連絡を取るためにメールアドレスを公開することを理解した
              </ListItem>
              <ListItem>
                プライバシーポリシーを読み、メールアドレスが何に使われるかを確認した
              </ListItem>
            </UnorderedList>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" onClick={postData}>
              内容を理解し依頼を投稿する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
