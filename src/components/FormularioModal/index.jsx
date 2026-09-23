
import { ModalOverlay, ConteinerForm, BtnFechar } from "./styles";

export default function FormularioModal({ aberto, aoFechar }) {
  if (!aberto) return null;

  return (
    <ModalOverlay onClick={aoFechar}>
      <ConteinerForm onClick={(e) => e.stopPropagation()}>
        <BtnFechar onClick={aoFechar}>&times;</BtnFechar>
        <form action="#">
          <input placeholder="Seu Nome" />
          <input placeholder="Telefone" />
          <textarea placeholder="Digitar seu Problema" />
          <button type="submit">ENVIAR</button>
        </form>
      </ConteinerForm>
    </ModalOverlay>
  );
}

