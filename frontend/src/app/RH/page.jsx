"use client";

import React, { useState } from "react";

// COMPONENTES GLOBAIS
import SidebarNav from "@/components/blocks/SideBar";
import Navbar from "@/components/blocks/NavbarRH";
import Footer from "@/components/blocks/Footer";

// CSS DO RH
import "./rh.css";

// IMPORTA OS COMPONENTES EXISTENTES
import DashboardContent from "@/app/SistemaRH/Dashboard/page.jsx";
import ColaboradoresContent from "@/app/SistemaRH/Colaboradores/page.jsx";
import FeedbackContent from "@/app/SistemaRH/Feedback/page.jsx";

// IMPORTA OS NOVOS COMPONENTES (Descomente e ajuste os caminhos quando criar os arquivos)
import NovoColaboradorContent from "@/app/SistemaRH/NovoColaborador/page.jsx";
// import AprendizesContent from "@/app/SistemaRH/Aprendizes/page.jsx";
// import RankingContent from "@/app/SistemaRH/Ranking/page.jsx";
// import SugestoesContent from "@/app/SistemaRH/Sugestoes/page.jsx";

export default function RH() {
  // O estado inicial pode ser "dashboard"
  const [conteudo, setConteudo] = useState("dashboard");

  function renderConteudo() {
    switch (conteudo) {
      case "dashboard":
        return <DashboardContent />;

      case "colaboradores":
        return <ColaboradoresContent />;

      case "novo-colaborador":
         return <NovoColaboradorContent />;
        
      case "aprendizes":
        return <AprendizesContent />;
        
      case "feedback":
        return <FeedbackContent />;

      case "ranking":
         return <RankingContent />;

      case "sugestoes":
         return <SugestoesContent />;
       

      default:
        return <DashboardContent />;
    }
  }

  return (
    <>
      <Navbar />

      <div className="rh-layout">
        <SidebarNav setConteudo={setConteudo} />

        {renderConteudo()}
      </div>

      <Footer />
    </>
  );
}
