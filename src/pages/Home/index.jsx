import { useState } from "react";
import MarioLuigi from "../../assets/mario.png";
import BackgroundVideo from "../../assets/video.mp4";
import Whatssap from "../../assets/whatsapp.png";

// Importação componentes 
import TopoHeader from "../../components/TopoHeader";
import ContainerLeft from "../../components/ContainerLeft";
import FormularioModal from "../../components/FormularioModal";

import { Container, RightContainer, IconWhatssap } from "./styles";

function Home() {
  // Estado que controla se a máscara escura/formulário abre ou fecha
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <Container>
        <video autoPlay muted loop src={BackgroundVideo}></video>

    
        <TopoHeader />

      
        <ContainerLeft aoClicarContato={() => setModalAberto(true)} />

        <RightContainer>
        
         <img src={MarioLuigi} alt="Imagem do Mario e Luigi" />
         
        </RightContainer>

        <IconWhatssap>
          <a href="https://wa.me" target="blank">
            <img src={Whatssap} alt="icone Whatsapp" />
          </a>
        </IconWhatssap>
      </Container>

    
      <FormularioModal 
        aberto={modalAberto} 
        aoFechar={() => setModalAberto(false)} 
      />
    </>
  );
}

export default Home;
