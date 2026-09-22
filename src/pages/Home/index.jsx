import LogoHeader from "../../assets/logo-header.png"
import MainLogo from "../../assets/logo.png"
import MarioLuigi from "../../assets/mario.png"
import BackgroundVideo from "../../assets/video.mp4"
import Whatssap from "../../assets/whatsapp.png"
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { Header, Container, Button, RightContainer, LeftContainer, IconWhatssap, ConteinerForm } from "./styles"




function Home() {

  return (


    <>

      <Container>



        <video
          autoPlay
          muted
          loop
          src={BackgroundVideo}></video>

        <Header>

          <img src={LogoHeader} alt="Logo Header" />

          <a href="./">Home</a>
          <a href="#">Fala Conosco</a>
          <a href="#">Nossos Serviços</a>

        </Header>


        <LeftContainer>

          <img src={MainLogo} alt="Logo Principal" />
          <p><HiOutlineWrenchScrewdriver color="#fff" />
            Encanadores Mario e Luigi- Resolvemos seus problemas Hidraulicos com Estilos
            <HiOutlineWrenchScrewdriver color="#fff" /> <br />

            Você já se encontrou em uma situação de emergência com encanamento? <br />Vazamentos inesperados, canos entupidos ou torneiras que não param de pingar? <br />Não se preocupe, porque estamos aqui para salvar o seu dia! Apresentamos a vocês os encanadores mais famosos do Reino dos Cogumelos: Mario e Luigi!


          </p>

          <Button> ENTRE EM CONTATO</Button>


        </LeftContainer>

        <RightContainer >

          <img src={MarioLuigi} alt="Imagem do Mario e Luigi" />

        </RightContainer >


        <IconWhatssap>
          <a href="/login"><img src={Whatssap} alt="icone Whatssap" /></a>
        </IconWhatssap>

      </Container>


      <ConteinerForm>

        <form action="#">

          <input placeholder="Seu Nome" />
          <input placeholder="Telefone"  />
          <textarea placeholder="Digitar seu Problema"  />


          <button> Envia te</button>
        </form>



      </ConteinerForm>

    </>

  )

}

export default Home