"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Mail, Phone, IdCard, Building, Briefcase } from "lucide-react";

import "./telainicial.css";

function gerarIniciais(nome) {
  if (!nome) return "??";
  return nome
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}



// 📌 DADOS DO CARROSSEL
// 📌 DADOS DO CARROSSEL — ATUALIZADO GM 2025
const carouselItems = [
  {
    title: "🚗 Novo Chevrolet Onix 2025",
    description:
      "O hatch mais vendido do Brasil agora está ainda mais tecnológico: novo multimídia MyLink 2.0, desempenho superior e consumo otimizado.",
    imageUrl:
      "https://clickpetroleoegas.com.br/wp-content/uploads/2024/10/Sem-titulo-8-4.jpg",
    link: "https://www.chevrolet.com.br/carros/onix",
  },
  {
    title: "🚙 Tracker 2025: Mais Segurança e Conectividade",
    description:
      "SUV líder com novas assistências de direção, Wi-Fi nativo mais rápido e a versão RS com acabamento esportivo exclusivo.",
    imageUrl:
      "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/HBECJVC33BMK7C32DYJBKIMGDM.jpg",
    link: "https://www.chevrolet.com.br/suvs/tracker",
  },
  {
    title: "🏋️ Nova Montana 2025",
    description:
      "A picape urbana mais inteligente do mercado agora com novo pacote de tecnologia premium e ainda mais espaço no MultiFlex.",
    imageUrl:
      "https://quatrorodas.abril.com.br/wp-content/uploads/2023/07/Chevrolet-Montana-RS-2.jpg?quality=70&strip=info",
    link: "https://www.chevrolet.com.br/caminhonetes/montana",
  },
  {
    title: "⚡ Silverado EV — O Futuro Chegou",
    description:
      "Primeira picape 100% elétrica da GM, com até 724 km de autonomia e torque instantâneo de arrancar o fôlego.",
    imageUrl:
      "https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2024/10/2025-chevrolet-silverado-ev-lt-001-1.jpg",
    link: "https://www.chevrolet.com.br/pick-ups/silverado",
  },
  {
    title: "🚀 Super Cruise — Condução Sem Mãos",
    description:
      "Dirija longas distâncias sem usar as mãos com o sistema mais avançado de condução autônoma já desenvolvido pela GM.",
    imageUrl:
      "https://www.cadillac.com/content/dam/cadillac/na/us/english/index/ownership/technology/supercruise/large/new/newer/images/24-cadillac-ownership-super-cruise-feature-l-v2.jpg?imwidth=1200",
    link: "https://www.chevrolet.com.br/super-cruise",
  },
  {
    title: "🔋 Plataforma Ultium",
    description:
      "Tecnologia revolucionária que equipa a nova geração de elétricos da GM. Mais autonomia, mais durabilidade e recarga ultrarrápida.",
    imageUrl:
      "https://quatrorodas.abril.com.br/wp-content/uploads/2022/08/GMC-Hummer-EV-Edition-1-Milford-4.jpg?quality=70&strip=info&w=720&crop=1",
    link: "https://www.gm.com/mobility/ultium",
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

    <h2 className="user-title">Informações Pessoais</h2>

    {/* CÍRCULO COM INICIAIS */}
    <div className="user-circle">
      {gerarIniciais(user.nome)}
    </div>

    <div className="user-info">
      <h3 className="user-name">{user.nome}</h3>

      <p><Mail size={20} /> {user.email}</p>
      <p><IdCard size={20} /> {user.cpf}</p>
      <p><Phone size={20} /> Acesso {user.tipo}</p>
      <p><Phone size={20} /> ID: {user.id}</p>
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