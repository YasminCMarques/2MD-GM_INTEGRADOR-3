"use client";

import React, { useState } from "react";

// Imports Globais
import Footer from "@/components/blocks/Footer";
import SidebarNavColaborador from "@/components/blocks/SidebarColaborador";
import NavbarColaborador from "@/components/blocks/NavbarColaborador";

import "bootstrap/dist/css/bootstrap.min.css";
import "./colaborador.css";

// --- ATENÇÃO AQUI ---
import MeuPainelContent from "@/app/SistemaColaborador/MeuPainel/page.jsx";

// 1. Importe a LISTA (que é o arquivo page.jsx padrão)
import MinhasSugestoesLista from "@/app/SistemaColaborador/MinhasSugestoes/page.jsx"; 

// 2. Importe o FORMULÁRIO (o arquivo novo Formulario.jsx)
import FormularioNovaSugestao from "@/app/SistemaColaborador/NovaSugestao/page.jsx";


export default function Colaborador() {
  const [conteudo, setConteudo] = useState("meu-painel");

  // Função para voltar para a lista depois de enviar
  const irParaLista = () => setConteudo("minhas-sugestoes");

  function renderConteudo() {
    console.log("Conteúdo atual:", conteudo); // Isso vai aparecer no console do navegador (F12) para debug

    switch (conteudo) {
      case "meu-painel":
        return <MeuPainelContent />;

      // QUANDO CLICAR NO BOTÃO ROXO:
      case "nova-sugestao":
        return <FormularioNovaSugestao aoSucesso={irParaLista} />;

      // QUANDO CLICAR NO BOTÃO DE BAIXO (LAMPADA):
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