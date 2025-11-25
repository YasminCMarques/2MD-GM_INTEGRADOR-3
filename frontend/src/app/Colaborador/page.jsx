"use client";


import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/blocks/NavbarColaborador";
import Footer from "@/components/blocks/Footer";
import "./colaborador.css";




export default function Colaborador() {
  const slideRef = useRef([]);
  const indicatorRef = useRef([]);
  const [index, setIndex] = useState(0);


  const slides = [
    {
      img: "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg",
      data: "Lançamento: Dezembro 2025",
      titulo: "Novo Modelo Chevrolet Tracker 2026",
      desc: "Conheça o mais novo SUV da linha Chevrolet com tecnologia de ponta e design inovador.",
    },
    {
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
      data: "Lançamento: Outubro 2025",
      titulo: "Novo Ford Bronco Sport",
      desc: "Versão atualizada com motor mais eficiente e novo pacote off-road.",
    },
    {
      img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      data: "Lançamento: Março 2026",
      titulo: "Nova RAM 3500 Turbo Diesel",
      desc: "Potência extrema e novo design frontal mais agressivo.",
    },
  ];


  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  // Atualiza sempre que o índice mudar
  useEffect(() => {
    slideRef.current.forEach((el, i) => {
      if (el) el.classList.toggle("active", i === index);
    });


    indicatorRef.current.forEach((el, i) => {
      if (el) el.classList.toggle("active", i === index);
    });
  }, [index]);


  return (

    <>

      <Navbar />

      <div className="layout-container">

        <main className="main-content">
          {/* 🔥 Vídeo de Fundo */}
          <video className="bg-video" autoPlay loop muted playsInline>
            <source src="/videos/fundo.mp4" type="video/mp4" />
          </video>


          {/* ----------------------- */}
          {/* 🔥 CARROSSEL FUNCIONANDO */}
          {/* ----------------------- */}


          <div className="carrossel-container">
            <div className="carrossel-header">
              <span className="icon">⚡</span>
              <span>Lançamentos e Novidades</span>
            </div>


            <div className="carrossel">
              {slides.map((s, i) => (
                <div
                  key={i}
                  ref={(el) => (slideRef.current[i] = el)}
                  className={`slide ${i === 0 ? "active" : ""}`}
                  style={{ backgroundImage: `url(${s.img})` }}
                >
                  <div className="slide-content">
                    <p className="data">{s.data}</p>
                    <h2>{s.titulo}</h2>
                    <p className="descricao">{s.desc}</p>
                  </div>
                </div>
              ))}


              <button className="btn prev" onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>

              </button>


              <button className="btn next" onClick={() => setIndex((index + 1) % slides.length)}>

              </button>


              <div className="indicators">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    ref={(el) => (indicatorRef.current[i] = el)}
                    className={i === 0 ? "active" : ""}
                    onClick={() => setIndex(i)}
                  ></div>
                ))}
              </div>
            </div>

          </div>


        </main>

      </div>



      <div className="cards-container">
        {/* Card 1 */}
        <div className="info-card">
          <img
            className="info-img"
            src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
            alt="Missão GM"
          />
          <div className="info-content">
            <h3>
              <img src="./imagens/alvo.png" width={35} height={35} alt="" /><b>Nossa Missão</b>
            </h3>
            <p>
              Criar um mundo com Zero Acidentes, Zero Emissões e Zero
              Congestionamentos. Na General Motors, trabalhamos diariamente para
              transformar a mobilidade global através da inovação, sustentabilidade e
              excelência operacional.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="info-card">
          <img
            className="info-img"
            src="https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVtcHJlc2F8ZW58MHx8MHx8fDA%3D"
            alt="Equipe GM"
          />
          <div className="info-content">
            <h3>
              <img src="./imagens/equipe.png" width={35} height={35} alt="" /> <b>Nossa Equipe</b>
            </h3>
            <p>
              Com mais de 167 mil colaboradores ao redor do mundo, a GM é formada por
              pessoas talentosas e dedicadas. Valorizamos a diversidade, a inovação e
              o desenvolvimento contínuo de todos os nossos profissionais.
            </p>
          </div>
        </div>
        <div className="info-card">
          <img
            className="info-img"
            src="https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlzaW9ufGVufDB8fDB8fHww"
            alt="Equipe GM"
          />
          <div className="info-content">
            <h3>
              <img src="./imagens/visao.png" width={35} height={35} alt="" /> <b>Nossa Visão</b>
            </h3>


            <p>
              Na General Motors, nossa visão vai muito além da fabricação de veículos; nosso propósito é transformar
              a maneira como o mundo se move. Estamos comprometidos em liderar um futuro definido pelo nosso "Triplo Zero"</p>
          </div>
        </div>
      </div>



      <h3 className="titulo"> <b>Triplo Zero</b></h3>
      <div className="cards-container">



        <div className="info-card">
          <img
            className="info-img"
            src="https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlzaW9ufGVufDB8fDB8fHww"
            alt="Equipe GM"
          />
          <div className="info-content">
            <h3>
              <img src="./imagens/visao.png" width={35} height={35} alt="" /> <b>Zero Acidentes</b>
            </h3>


            <p>
              Na General Motors, nossa visão vai muito além da fabricação de veículos; nosso propósito é transformar
              a maneira como o mundo se move. Estamos comprometidos em liderar um futuro definido pelo nosso "Triplo Zero"</p>
          </div>
        </div>
        <div className="info-card">
          <img
            className="info-img"
            src="https://media.istockphoto.com/id/1340519926/photo/concept-depicting-new-possibilities-for-the-development-of-electric-and-hybrid-cars-and-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=_L_cPqS6GTH6YhYe2r7jBF2nhixWgBdS1W__cJ8ED8A="
            alt="Equipe GM"
          />
          <div className="info-content">
            <h3>
              <img src="./imagens/visao.png" width={35} height={35} alt="" /> <b>Zero Emissões</b>
            </h3>


            <p>
              Na General Motors, nossa visão vai muito além da fabricação de veículos; nosso propósito é transformar
              a maneira como o mundo se move. Estamos comprometidos em liderar um futuro definido pelo nosso "Triplo Zero"</p>
          </div>
        </div>
        <div className="info-card">
          <img
            className="info-img"
            src="https://plus.unsplash.com/premium_photo-1663951812821-08c681ada29b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipe GM"
          />
          <div className="info-content">
            <h3>
              <img src="./imagens/visao.png" width={35} height={35} alt="" /> <b>Zero Congestionamentos</b>
            </h3>


            <p>
              Na General Motors, nossa visão vai muito além da fabricação de veículos; nosso propósito é transformar
              a maneira como o mundo se move. Estamos comprometidos em liderar um futuro definido pelo nosso "Triplo Zero"</p>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
