"use client";

import React, { useState } from "react";


import SidebarNav from "@/components/blocks/SideBar";
import Navbar from "@/components/blocks/NavbarRH";
import Footer from "@/components/blocks/Footer";


import "./rh.css";


import DashboardContent from "@/app/SistemaRH/Dashboard/page.jsx";
import ColaboradoresContent from "@/app/SistemaRH/Colaboradores/page.jsx";

import NovoColaboradorContent from "@/app/SistemaRH/NovoColaborador/page.jsx";
 import RankingContent from "@/app/SistemaRH/Ranking/page.jsx";
 import SugestoesContent from "@/app/SistemaRH/Sugestoes/page.jsx";

export default function RH() {
  const [conteudo, setConteudo] = useState("dashboard");

  function renderConteudo() {
    switch (conteudo) {
      case "dashboard":
        return <DashboardContent />;

      case "colaboradores":
        return <ColaboradoresContent />;

      case "novo-colaborador":
         return <NovoColaboradorContent />;
        
      case "ranking":
         return <RankingContent/>;

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
