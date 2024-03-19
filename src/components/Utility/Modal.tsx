import "react-responsive-modal/styles.css";
import { Modal as ResponsiveModal } from "react-responsive-modal";
import { ReactNode } from "react";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  children: ReactNode;
}

const Modal = ({ openModal, setOpenModal, children }: ModalProps) => {
  const styles = {
    modal: {
      borderRadius: "8px",
    },
  };
  return (
    <ResponsiveModal
      open={openModal}
      onClose={() => setOpenModal(false)}
      center
      styles={styles}
    >
      {children}
    </ResponsiveModal>
  );
};

export default Modal;
