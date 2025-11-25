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
          {/* DASHBOARD */}
          <li className={ativo === "dashboard" ? "active" : ""}>
            <button onClick={() => handleClick("dashboard")}>
              <LayoutGrid className="icon" /> Dashboard
            </button>
          </li>

          {/* COLABORADORES */}
          <li className={ativo === "colaboradores" ? "active" : ""}>
            <button onClick={() => handleClick("colaboradores")}>
              <Users className="icon" /> Colaboradores
            </button>
          </li>

          {/* NOVO COLABORADOR */}
          {/* Nota: O ID aqui deve ser "novo-colaborador" para bater com o case do page.jsx */}
          <li className={ativo === "novo-colaborador" ? "active" : ""}>
            <button onClick={() => handleClick("novo-colaborador")}>
              <UserPlus className="icon" /> Novo Colaborador
            </button>
          </li>

          {/* RANKING */}
          <li className={ativo === "ranking" ? "active" : ""}>
            <button onClick={() => handleClick("ranking")}>
              <Trophy className="icon" /> Ranking & Bonificação
            </button>
          </li>

          {/* SUGESTÕES */}
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