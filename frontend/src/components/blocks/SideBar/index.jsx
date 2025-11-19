"use client";

import React, { useState } from "react";
import {
  LayoutGrid,
  Users,
  UserPlus,
  GraduationCap,
  MessageSquare,
  Trophy,
  Lightbulb
} from "lucide-react";

import "./Sidebar.css";

export default function SidebarNav({ setConteudo }) {

  const [ativo, setAtivo] = useState("dashboard");

  const handleClick = (id) => {
    setAtivo(id);
    setConteudo(id);
  };

  return (
    <aside className="sidebar-container">
      <nav className="sidebar-nav">
        <ul>

          <li className={ativo === "dashboard" ? "active" : ""}>
            <button onClick={() => handleClick("dashboard")}>
              <LayoutGrid className="icon" /> Dashboard
            </button>
          </li>

          <li className={ativo === "colaboradores" ? "active" : ""}>
            <button onClick={() => handleClick("colaboradores")}>
              <Users className="icon" /> Colaboradores
            </button>
          </li>

          <li className={ativo === "novoColaborador" ? "active" : ""}>
            <button onClick={() => handleClick("novoColaborador")}>
              <UserPlus className="icon" /> Novo Colaborador
            </button>
          </li>

          <li className={ativo === "aprendizes" ? "active" : ""}>
            <button onClick={() => handleClick("aprendizes")}>
              <GraduationCap className="icon" /> Aprendizes/Estagiários
            </button>
          </li>

          <li className={ativo === "feedback" ? "active" : ""}>
            <button onClick={() => handleClick("feedback")}>
              <MessageSquare className="icon" /> Feedback
            </button>
          </li>

          <li className={ativo === "ranking" ? "active" : ""}>
            <button onClick={() => handleClick("ranking")}>
              <Trophy className="icon" /> Ranking & Bonificação
            </button>
          </li>

          <li className={ativo === "sugestoes" ? "active" : ""}>
            <button onClick={() => handleClick("sugestoes")}>
              <Lightbulb className="icon" /> Sugestões Recebidas
            </button>
          </li>

        </ul>
      </nav>
    </aside>
  );
}
