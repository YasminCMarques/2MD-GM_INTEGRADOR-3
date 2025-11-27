"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./telainicial.css";

export default function MeuPainelContent() {
  const [user, setUser] = useState(null);

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
  }, []);

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
              <img className="icone" src="./imagens/alvo.png" width={35} height={35} alt="" />
              <b>Nossa Missão</b>
            </h3>
            <p>
              Criar um mundo com Zero Acidentes, Zero Emissões e Zero
              Congestionamentos. Na General Motors, trabalhamos diariamente para
              transformar a mobilidade global...
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
              Com mais de 167 mil colaboradores ao redor do mundo, a GM é formada por
              pessoas talentosas e dedicadas...
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
              Na General Motors, nossa visão vai muito além da fabricação de veículos...
            </p>
          </div>
        </div>
      </div>

      <h3 className="titulo"> <b>Triplo Zero</b></h3>
      
      <div className="cards-container">
        {/* Card Zero Acidentes */}
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
              Não nos contentamos apenas em proteger os ocupantes em caso de complicações...
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
              Nossa missão é descarbonizar a indústria automotiva por completo...
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
              O tempo é o recurso mais precioso de nossos clientes, e não deve ser desperdiçado...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}