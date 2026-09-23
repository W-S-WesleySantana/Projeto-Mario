import LogoHeader from "../../assets/logo-header.png";
import { Header } from "./styles";
import { Link } from "react-router-dom";

export default function TopoHeader() {
  return (
    <Header>
      <img src={LogoHeader} alt="Logo Header" />
       
     
      <Link to="/">Home</Link>

     
      <a href="https://wa.me" target="_blank" rel="noopener noreferrer">Fale Conosco</a>

     
      <Link to="/nossos-serviços">Nossos Serviços</Link>
    </Header>
  );
}
