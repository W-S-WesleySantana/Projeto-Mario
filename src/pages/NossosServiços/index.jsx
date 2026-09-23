
import BackgroundVideo from "../../assets/video.mp4";
import AvalicaoUsuario from "../../components/Avaliacoes"
import TopHeader from "../../components/TopoHeader"
import Whatssap from "../../assets/whatsapp.png"
import {   Container } from "./styles";


function NossosServiços() {
return(


<>

<TopHeader />

<Container>
<video autoPlay muted loop src={BackgroundVideo}></video>

<h1>Nossos Serviços</h1>

<a href="https://wa.me" target="blank">


<img src={Whatssap} alt="Entra em contato pelo whatssap"/>
</a>
</Container>
<AvalicaoUsuario/>
   
</>

)
}

export default NossosServiços