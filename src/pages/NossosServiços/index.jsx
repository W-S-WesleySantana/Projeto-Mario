
import BackgroundVideo from "../../assets/video.mp4";
import AvalicaoUsuario from "../../components/Avaliacoes"
import TopHeader from "../../components/TopoHeader"
import Whatssap from "../../assets/whatsapp.png"
import {   Container } from "./styles";
import { Link } from "react-router-dom";


function NossosServiços() {
return(


<>

<TopHeader />

<Container>
 <video 
          autoplay
          loop
          muted
          playsinline
          webkit-playsinline 
          src={BackgroundVideo}></video>

<h1>Nossos Serviços</h1>

<Link to="https://wa.me" target="blank">


<img src={Whatssap} alt="Entra em contato pelo whatssap"/>
</Link>
</Container>
<AvalicaoUsuario/>
   
</>

)
}

export default NossosServiços