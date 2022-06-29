import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <button>Nova Transação</button>
      </Content>
    </Container>
  );
}

export { Header };
