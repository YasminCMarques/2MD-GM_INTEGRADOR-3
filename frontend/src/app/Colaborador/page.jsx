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
      <div className="metrics-box">
        <h2 className="metrics-title">General Motors em Números</h2>
        <div className="metrics-container">
          {/* Item 1 */}
          <div className="metric-item">
            <div className="metric-icon bg-blue-light">📈</div>
            <h3>100+</h3>
            <p>Anos de História</p>
          </div>
          {/* Item 2 */}
          <div className="metric-item">
            <div className="metric-icon bg-purple-light">👥</div>
            <h3>167k+</h3>
            <p>Colaboradores</p>
          </div>
          {/* Item 3 */}
          <div className="metric-item">
            <div className="metric-icon bg-blue-light">🎖️</div>
            <h3>4</h3>
            <p>Marcas Globais</p>
          </div>
          {/* Item 4 */}
          <div className="metric-item">
            <div className="metric-icon bg-green-light">🎯</div>
            <h3>100+</h3>
            <p>Países</p>
          </div>
        </div>
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
              <span className="icon">🎯</span> Nossa Missão
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
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Equipe GM"
          />
          <div className="info-content">
            <h3>
              <span className="icon">👥</span> Nossa Equipe
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
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Equipe GM"
          />
          <div className="info-content">
            <h3>
              <span className="icon">👥</span> Nossa Visão
            </h3>

            <img src="" alt="" />
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
