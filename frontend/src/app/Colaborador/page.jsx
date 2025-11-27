"use client";

import React, { useState } from "react";

// COMPONENTES GLOBAIS
import Footer from "@/components/blocks/Footer";
import SidebarNavColaborador from "@/components/blocks/SidebarColaborador";
import NavbarColaborador from "@/components/blocks/NavbarColaborador";


// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./colaborador.css";

// IMPORTA OS COMPONENTES DE CONTEÚDO
import MeuPainelContent from "@/app/SistemaColaborador/MeuPainel/page.jsx"
import FeedbacksContent from "@/app/SistemaColaborador/MeuPainel/page.jsx";
import SugestoesContent from "@/app/SistemaColaborador/MeuPainel/page.jsx";

export default function Colaborador() {
  // Começa com 'meu-painel' para bater com a Sidebar
  const [conteudo, setConteudo] = useState("meu-painel");

  function renderConteudo() {
    switch (conteudo) {
      case "meu-painel":
        return <MeuPainelContent />;

      case "meus-feedbacks":
        return <FeedbacksContent />;

      case "minhas-sugestoes":
        return <SugestoesContent />;

      default:
        return <MeuPainelContent />;
    }
  }

  

  return (

    <>
    
    <NavbarColaborador/>
    
    <div className="colaborador-layout">

      {/* 2. A Sidebar vem primeiro */}
      <SidebarNavColaborador setConteudo={setConteudo} />

      {/* 3. O Conteúdo vem depois, com a classe correta */}
      <main className="colaborador-content">
        {renderConteudo()}
      </main>

    </div>
    
    <Footer/>

    </>
  );
}