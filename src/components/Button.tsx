import { ButtonOptions, Button as CButton, StyleProps } from "@chakra-ui/react";
import { FC } from "react";

type ButtonProps = {
  onClick?: () => void;
  hidden?: boolean;
  label: string;
  style?: {};
};
export const Button: FC<ButtonProps> = ({ onClick, hidden, label, style }) => {
  return (
    <CButton
      size="lg"
      bg="yellow.100"
      _hover={{ bg: "yellow.200" }}
      variant="outline"
      onClick={onClick}
      hidden={hidden}
      {...style}
    >
      {label}
    </CButton>
  );
};
