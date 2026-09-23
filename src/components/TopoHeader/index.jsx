
import LogoHeader from "../../assets/logo-header.png";
import { Header } from "./styles";




export default function TopoHeader() {


  return (
    <Header>
        <img src={LogoHeader} alt="Logo Header" />
       
      <a href="./">Home</a>
      <a href="https://wa.me" target="blank">Fala Conosco</a>
      <a href="/nossosServiços">Nossos Serviços</a>
    </Header>
  );
}
