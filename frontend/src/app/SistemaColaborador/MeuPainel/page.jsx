"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./telainicial.css";

// 📌 DADOS DO CARROSSEL
const carouselItems = [
  {
    title: "✨ Novo Lançamento: Chevrolet Silverado EV",
    description: "Conheça a picape elétrica com até 724 km de autonomia! Redefinindo força e sustentabilidade.",
    imageUrl: "https://images.unsplash.com/photo-1621256429283-e02359676640?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.chevrolet.com.br/pick-ups/silverado", // Exemplo de link
  },
  {
    title: "⚡ Plataforma Ultium: O Futuro Elétrico",
    description: "Nossa tecnologia modular de baterias impulsiona a próxima geração de Veículos Elétricos (EVs) da GM.",
    imageUrl: "https://images.unsplash.com/photo-1632378875569-424a1b8004e0?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.gm.com/mobility/ultium",
  },
  {
    title: "🚀 Super Cruise: Dirigibilidade Autônoma",
    description: "Tecnologia de assistência ao motorista que permite a condução 'mãos-livres' em rodovias compatíveis.",
    imageUrl: "https://images.unsplash.com/photo-1616782352123-d3c5f591f42d?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.chevrolet.com.br/super-cruise",
  },
];

export default function MeuPainelContent() {
  const [user, setUser] = useState(null);
  // 📌 NOVO STATE PARA O CARROSSEL
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // pega o token salvo no login
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const payload = jwtDecode(token);
        setUser(payload);
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
      }
    }

    // 📌 LÓGICA DO CARROSSEL: Troca o slide a cada 5 segundos
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % carouselItems.length
      );
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  return (
    <div className="fade-in-content">

      {/* ==========================  
          📌 CONTAINER DO USUÁRIO  
      ========================== */}
      {user && (
        <div className="user-box">
          <img
            src="/imagens/user_default.png"
            className="user-photo"
            alt="Foto usuário"
          />

          <div className="user-info">
            <h2>{user.nome}</h2>
            <p><b>Email:</b> {user.email}</p>
            <p><b>CPF:</b> {user.cpf}</p>
            <p><b>Telefone:</b> {user.telefone}</p>
            <p><b>Departamento:</b> {user.departamento}</p>
            <p><b>Cargo:</b> {user.cargo}</p>
          </div>
        </div>
      )}

      {/* ==========================  
          📌 CARROSSEL DA GM  
      ========================== */}
      <div className="carousel-container">
        <div 
          className="carousel-track" 
          // O style dinâmico move o carrossel horizontalmente
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div className="carousel-slide" key={index}>
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="carousel-image"
              />
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="carousel-button">
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores/Pontos do Carrossel */}
        <div className="carousel-dots">
          {carouselItems.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      
      {/* RESTANTE DO SEU CONTEÚDO... */}
      
      <div className="cards-container">
        {/* Card 1 */}
        {/* ... (Seus 3 primeiros cards de Missão, Equipe, Visão) */}
        <div className="info-card">
          <img
            className="info-img"
            src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
            alt="Missão GM"
          />
          <div className="info-content">
            <h3>
              <img className="icone" src="./imagens/alvo.png" width={35} height={35} alt="" />
              <b>Nossa Missão</b>
            </h3>
            <p>
                Nossa missão é criar um mundo com Zero Acidentes, Zero Emissões e Zero Congestionamentos . Trabalhamos diariamente não apenas para fabricar carros, 
                mas para desenvolver 
                tecnologias que salvam vidas, protegem o planeta e transformam a mobilidade global em uma experiência mais segura e fluida
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="info-card">
          <img
            className="info-img"
            src="https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?w=500&auto=format&fit=crop&q=60"
            alt="Equipe GM"
          />
          <div className="info-content">
            <h3>
              <img src="./imagens/equipe.png" width={35} height={35} alt="" /> <b>Nossa Equipe</b>
            </h3>
            <p>
              Somos movidos por mais de 167 mil mentes inovadoras ao redor do globo. A GM é formada por pessoas diversas e apaixonadas, unidas pelo 
              propósito de inovar. Acreditamos na cultura do 'Everybody In', 
              onde cada colaborador é essencial para liderar a revolução elétrica e automotiva.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="info-card">
          <img
            className="info-img"
            src="https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=500&auto=format&fit=crop&q=60"
            alt="Visão GM"
          />
          <div className="info-content">
            <h3>
              <img className="icone" src="./imagens/visao.png" width={35} height={35} alt="" /> <b>Nossa Visão</b>
            </h3>
            <p>
              Na General Motors, nossa visão vai muito além da fabricação de veículos; queremos ser uma plataforma de mudança de mobilidade. 
              Enxergamos um futuro onde o transporte seja sustentável, inclusivo e acessível, 
              redefinindo a liberdade de ir e vir para as próximas gerações
            </p>
          </div>
        </div>
      </div>

      <h3 className="titulo"> <b>Triplo Zero</b></h3>
      
      <div className="cards-container">
        {/* Card Zero Acidentes */}
        {/* ... (Seus 3 cards do Triplo Zero) */}
        <div className="info-card">
          <img
            className="info-img"
            src="https://plus.unsplash.com/premium_photo-1674935667280-069acbb3ccdd?q=80&w=1170&auto=format&fit=crop"
            alt="Zero Acidentes"
          />
          <div className="info-content">
            <h3>
              <img className="icone" src="./imagens/zero_acidentes.png" width={35} height={35} alt="" /> <b>Zero Acidentes</b>
            </h3>
            <p>
                Não nos contentamos apenas em proteger os ocupantes em caso de complicações; nosso objetivo é evitar que elas aconteçam. Através da
                implementação massiva de sistemas de segurança ativa e do avanço da tecnologia de condução autônoma, obtivemos para eliminar o erro humano da
                inovação. Queremos criar um ambiente onde cada viagem seja segura,
                proporcionando tranquilidade às famílias e garantindo que todos cheguem bem ao seu destino.
            </p>
          </div>
        </div>

        {/* Card Zero Emissões */}
        <div className="info-card">
          <img
            className="info-img"
            src="https://media.istockphoto.com/id/1340519926/photo/concept-depicting-new-possibilities-for-the-development-of-electric-and-hybrid-cars-and-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=_L_cPqS6GTH6YhYe2r7jBF2nhixWgBdS1W__cJ8ED8A="
            alt="Zero Emissões"
          />
          <div className="info-content">
            <h3>
              <img className="icone" src="./imagens/zero_emissões.png" width={35} height={35} alt="" /><b>Zero Emissões</b>
            </h3>
            <p>
              Nossa missão é descarbonizar a indústria automotiva por completo. Isso significa ir além do escapamento: estamos reestruturando toda a
              nossa cadeia de valor e impulsionando a plataforma Ultium para oferecer uma gama completa de veículos elétricos — desde modelos acessíveis até
              caminhões de trabalho. Estamos construindo um futuro onde o ar limpo é um padrão global e a
              sustentabilidade é integrada em cada milhão rodado, garantindo um legado ambiental positivo para as próximas gerações.
            </p>
          </div>
        </div>

        {/* Card Zero Congestionamento */}
        <div className="info-card">
          <img
            className="info-img"
            src="https://plus.unsplash.com/premium_photo-1663951812821-08c681ada29b?q=80&w=1075&auto=format&fit=crop"
            alt="Zero Congestionamento"
          />
          <div className="info-content">
            <h3>
              <img className="icone" src="./imagens/zero_rodovia_1.png" width={35} height={35} alt="" /><b>Zero Congestionamento</b>
            </h3>
            <p>
              O tempo é o recurso mais precioso de nossos clientes, e não deve ser desperdiçado no trânsito. Através da integração de veículos conectados,
              inteligência artificial e soluções de mobilidade autônoma compartilhada, buscamos otimização do fluxo urbano. Visualizamos cidades inteligentes
              onde os veículos "conversam" com a infraestrutura, eliminando gargalos, reduzindo o estresse do deslocamento e devolvendo horas produtivas
              e de lazer às pessoas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}