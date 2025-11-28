"use client";

import React, { useState } from "react";

// Imports Globais
import Footer from "@/components/blocks/Footer";
import SidebarNavColaborador from "@/components/blocks/SidebarColaborador";
import NavbarColaborador from "@/components/blocks/NavbarColaborador";

import "bootstrap/dist/css/bootstrap.min.css";
import "./colaborador.css";


import MeuPainelContent from "@/app/SistemaColaborador/MeuPainel/page.jsx";


import MinhasSugestoesLista from "@/app/SistemaColaborador/MinhasSugestoes/page.jsx"; 


import FormularioNovaSugestao from "@/app/SistemaColaborador/NovaSugestao/page.jsx";


export default function Colaborador() {
  const [conteudo, setConteudo] = useState("meu-painel");


  const irParaLista = () => setConteudo("minhas-sugestoes");

  function renderConteudo() {
    console.log("Conteúdo atual:", conteudo); 

    switch (conteudo) {
      case "meu-painel":
        return <MeuPainelContent />;

      case "nova-sugestao":
        return <FormularioNovaSugestao aoSucesso={irParaLista} />;

      
      case "minhas-sugestoes":
        return <MinhasSugestoesLista />;

      default:
        return <MeuPainelContent />;
    }
  } 

  return (
    <>
      <NavbarColaborador/>
      <div className="colaborador-layout">
        <SidebarNavColaborador setConteudo={setConteudo} />
        <main className="colaborador-content">
          {renderConteudo()}
        </main>
      </div>
      <Footer/>
    </>
  );
}