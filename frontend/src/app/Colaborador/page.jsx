"use client";


import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/blocks/NavbarColaborador";
import Footer from "@/components/blocks/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./colaborador.css";




export default function Colaborador() {
  

  return (

    <>

      <Navbar />

      <div className="layout-container">

        <main className="main-content">
          {/* 🔥 Vídeo de Fundo */}
     


          {/* ----------------------- */}
          {/* 🔥 CARROSSEL  */}
          {/* ----------------------- */}

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
              <img className="icone" src="./imagens/alvo.png" width={35} height={35} alt="" /><b>Nossa Missão</b>
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
              <img className="icone" src="./imagens/visao.png" width={35} height={35} alt="" /> <b>Nossa Visão</b>
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
            src="https://plus.unsplash.com/premium_photo-1674935667280-069acbb3ccdd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipe GM"
          />
          <div className="info-content">
            <h3>
              <img className="icone" src="./imagens/zero_acidentes.png" width={35} height={35} alt="" /> <b>Zero Acidentes</b>
            </h3>


            <p>
              Não nos contentamos apenas em proteger os ocupantes em caso de complicações; nosso objetivo é evitar que elas aconteçam.
              Através da implementação massiva de sistemas de segurança ativa e do avanço da tecnologia de condução autônoma,
              obtivemos para eliminar o erro humano da inovação. Queremos criar um ambiente onde cada viagem seja segura,
              proporcionando tranquilidade às famílias e garantindo que todos cheguem bem ao seu destino.
            </p>

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
              <img className="icone" src="./imagens/zero_emissões.png" width={35} height={35} alt="" /><b>Zero Emissões</b>
            </h3>


            <p>
              Nossa missão é descarbonizar a indústria automotiva por completo. Isso significa ir além do escapamento: estamos reestruturando
              toda a nossa cadeia de valor e impulsionando a plataforma Ultium para oferecer uma gama completa de veículos elétricos —
              desde modelos acessíveis até caminhões de trabalho. Estamos construindo um futuro onde o ar limpo é um padrão global e a sustentabilidade
              é integrada em cada milhão rodado, garantindo um legado ambiental positivo para as próximas gerações.
            </p>
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
              <img className="icone" src="./imagens/zero_rodovia_1.png" width={35} height={35} alt="" /><b>Zero Congestionamento</b>
            </h3>


            <p>
              O tempo é o recurso mais precioso de nossos clientes, e não deve ser desperdiçado no trânsito.
              Através da integração de veículos conectados, inteligência artificial e soluções de mobilidade autônoma compartilhada,
              buscamos otimização do fluxo urbano. Visualizamos cidades inteligentes onde os veículos "conversam" com a infraestrutura, eliminando gargalos,
              reduzindo o estresse do deslocamento e devolvendo horas produtivas e de lazer às pessoas.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
