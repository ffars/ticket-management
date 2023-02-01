import { FC, ReactNode } from "react";
import { Backdrop, CloseBtn, ModalContent, ModalHeader } from "./Modal.styles";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

const Modal: FC<IProps> = ({ isOpen, onClose, title, children }) => {

  if(!isOpen) return null;

  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalContent>
        <ModalHeader>
          {title} <CloseBtn onClick={onClose}>x</CloseBtn>
        </ModalHeader>
        {children}
      </ModalContent>
    </>
  )
}

export default Modal;
