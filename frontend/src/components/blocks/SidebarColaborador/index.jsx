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
  // Começa ativo em 'meu-painel' para ficar igual à foto
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

          {/* MEUS FEEDBACKS */}
          <li className={ativo === "meus-feedbacks" ? "active" : ""}>
            <button onClick={() => handleClick("meus-feedbacks")}>
              <MessageSquare className="icon" /> Meus Feedbacks
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