import MainLogo from "../../assets/logo.png";
import { LeftContainer, Button } from "./styles";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

export default function ContainerLeft({ aoClicarContato }) {
  return (
    <LeftContainer>
      <img src={MainLogo} alt="Logo Principal" />
      <p>
        <HiOutlineWrenchScrewdriver color="#fff" />
        Encanadores Mario e Luigi - Resolvemos seus problemas Hidráulicos com Estilo
        <HiOutlineWrenchScrewdriver color="#fff" /> <br />
        Você já se encontrou em uma situação de emergência com encanamento? <br />
        Vazamentos inesperados, canos entupidos ou torneiras que não param de pingar? <br />
        Não se preocupe, porque estamos aqui para salvar o seu dia! Apresentamos a vocês os encanadores mais famosos do Reino dos Cogumelos: Mario e Luigi!
      </p>

      <Button onClick={aoClicarContato}>ENTRE EM CONTATO</Button>
    </LeftContainer>
  );
}
