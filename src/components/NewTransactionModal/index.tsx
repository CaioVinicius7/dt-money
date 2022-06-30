import Modal from "react-modal";

import closeImg from "../../assets/close.svg";

import { Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <img
          src={closeImg}
          alt="Fechar modal"
          className="react-modal-close"
          onClick={onRequestClose}
        />
      </button>

      <Container>
        <h2> Cadastrar transação </h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export { NewTransactionModal };
