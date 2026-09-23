import { useState, useEffect } from "react";
import  Whatssap from "../../assets/whatsapp.png"
import { Link } from "react-router-dom";
import { Container,Formulario,Input,EstrelasContainer,EstrelaBotao,TextArea,BotaoEnviar,ListaContainer,CardAvaliacao, CardTopo,ExibirEstrelas,DataTexto } from "./styles.js";


function Avaliacoes() {
  // Estados do formulário
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [nota, setNota] = useState(0);
  const [hoverNota, setHoverNota] = useState(0);

  // Estado que guarda a lista de avaliações
  const [listaAvaliacoes, setListaAvaliacoes] = useState([]);

  // Carrega as avaliações já salvas ao abrir a página
  useEffect(() => {
    const salvas = localStorage.getItem("avaliacoes_mario");
    if (salvas) {
      setTimeout(() => {
        setListaAvaliacoes(JSON.parse(salvas));
      }, 0);
    }
  }, []);

  // Função disparada ao enviar o formulário
  const lidarComEnvio = (e) => {
    e.preventDefault();

    if (!nome || !comentario || nota === 0) {
      alert("Por favor, preencha o nome, comentário e selecione as estrelas!");
      return;
    }

    const novaAvaliacao = {
      id: Date.now(),
      nome,
      comentario,
      nota,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    const listaAtualizada = [novaAvaliacao, ...listaAvaliacoes];
    
    // Atualiza o estado e salva no LocalStorage do navegador
    setListaAvaliacoes(listaAtualizada);
    localStorage.setItem("avaliacoes_mario", JSON.stringify(listaAtualizada));

    // Limpa os campos do formulário
    setNome("");
    setComentario("");
    setNota(0);
  };

  return (
    <Container>
      <h2>Deixe sua Avaliação</h2>
      
   
      <Formulario onSubmit={lidarComEnvio}>
        <Input
          type="text" 
          placeholder="Seu nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        
        <EstrelasContainer>
          {[1, 2, 3, 4, 5].map((estrela) => (
            <EstrelaBotao
              type="button"
              key={estrela}
              onClick={() => setNota(estrela)}
              onMouseEnter={() => setHoverNota(estrela)}
              onMouseLeave={() => setHoverNota(0)}
              ativa={estrela <= (hoverNota || nota)}
            >
              ★
            </EstrelaBotao>
          ))}
        </EstrelasContainer>

        <TextArea 
          placeholder="Escreva seu comentário aqui..." 
          rows="4"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />

        <BotaoEnviar type="submit">Enviar Avaliação</BotaoEnviar>
      </Formulario>

    
      <ListaContainer>
        <h3>Avaliações dos Clientes ({listaAvaliacoes.length})</h3>
        {listaAvaliacoes.length === 0 ? (
          <p>Nenhuma avaliação ainda. Seja o primeiro!</p>
        ) : (
          listaAvaliacoes.map((item) => (
            <CardAvaliacao key={item.id}>
              <CardTopo>
                <strong>{item.nome}</strong>
                <ExibirEstrelas>
                  {"★".repeat(item.nota)}{"☆".repeat(5 - item.nota)}
                </ExibirEstrelas>
              </CardTopo>
              <p>{item.comentario}</p>
              <DataTexto>{item.data}</DataTexto>
            </CardAvaliacao>
          ))
        )}
      </ListaContainer>

      <Link to="https://wa.me" target="blank">
     <img src={Whatssap} alt="Entra em contato pelo whatssap" />
     </Link>
      
    </Container>
  );
}


export default Avaliacoes;