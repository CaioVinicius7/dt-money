import { useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
  const [type, setType] = useState("deposit");

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

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span> Entrada </span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdrawn");
            }}
            isActive={type === "withdrawn"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span> Entrada </span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export { NewTransactionModal };
