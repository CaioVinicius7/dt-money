import { FormEvent, useState } from "react";
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
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    console.log(title, value, category, type);
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2> Cadastrar transação </h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

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

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export { NewTransactionModal };
