"use client";

import React, { useState } from "react";

// COMPONENTES GLOBAIS
import SidebarNav from "@/components/blocks/SideBar";
import Navbar from "@/components/blocks/NavbarRH";
import Footer from "@/components/blocks/Footer";

// CSS DO RH
import "./rh.css";

// IMPORTA O NOVO COMPONENTE
import DashboardContent from "@/app/SistemaRH/Dashboard/page.jsx";
import ColaboradoresContent from "@/app/SistemaRH/Colaboradores/page.jsx";
import FeedbackContent from "@/app/SistemaRH/Feedback/page.jsx";

export default function RH() {
  const [conteudo, setConteudo] = useState("dashboard");

  function renderConteudo() {
    switch (conteudo) {
      case "colaboradores":
        return <ColaboradoresContent />;
      case "feedback":
        return <FeedbackContent />;
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
