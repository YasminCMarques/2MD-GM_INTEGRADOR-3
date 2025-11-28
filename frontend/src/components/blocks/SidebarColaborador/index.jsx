"use client";

import React, { useState } from "react";
import {
  Home,           // Para "Página Inicial"
  LayoutGrid,     // Para "Meu Painel"
  MessageSquare,  // Para "Meus Feedbacks"
  Lightbulb       // Para "Minhas Sugestões"
} from "lucide-react";

import "./sidebarcolaborador.css";

export default function SidebarNavColaborador({ setConteudo }) {

  const [ativo, setAtivo] = useState("meu-painel");

  const handleClick = (id) => {
    setAtivo(id);
    setConteudo(id);
  };

  return (
    <aside className="sidebar-container">
      <nav className="sidebar-nav">
        <ul>


          {/* MEU PAINEL */}
          <li className={ativo === "meu-painel" ? "active" : ""}>
            <button onClick={() => handleClick("meu-painel")}>
              <LayoutGrid className="icon" /> Meu Painel
            </button>
          </li>

          {/* NovaSugestão */}
          <li className={ativo === "nova-sugestao" ? "active" : ""}>
            <button onClick={() => handleClick("nova-sugestao")}> 
              <MessageSquare className="icon" /> Nova Sugestão
            </button>
          </li>

          {/* MINHAS SUGESTÕES */}
          <li className={ativo === "minhas-sugestoes" ? "active" : ""}>
            <button onClick={() => handleClick("minhas-sugestoes")}>
              <Lightbulb className="icon" /> Minhas Sugestões
            </button>
          </li>

        </ul>
      </nav>
    </aside>
  );
}