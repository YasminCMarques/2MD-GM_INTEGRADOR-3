import React from "react";
import Link from "next/link";
import { Users, Settings } from "lucide-react";
import "./login.css"


export default function LoginSelection() {
  return (
    <div className="main">

      <div className="login-container">
      <div className="login-header">
        <div className="logo">
          <img src="../imagens/Logo.png" width={220} alt="Logo GM" />
        </div>
        <h2>Sistema de Gestão de Colaboradores</h2>
        <p>General Motors - Selecione seu tipo de acesso</p>
      </div>

      <div className="cards-container">
        {/* Card RH */}
        <div className="access-card">
          <div className="icon-container blue">
            <Settings size={38} />
          </div>
          <h3>Acesso RH</h3>
          <p>
         
            Portal administrativo para gestão de colaboradores, avaliações e relatórios.
          </p>
          <ul>
            <li>Dashboard completo</li>
            <li>Gestão de colaboradores</li>
            <li>Relatórios e análises</li>
          </ul>
          <Link href="/LoginRH">
            <button className="btn blue">Acessar como RH</button>
          </Link>
        </div>

        {/* Card Colaborador */}
        <div className="access-card">
          <div className="icon-container purple">
            <Users size={38} />
          </div>
          <h3>Acesso Colaborador</h3>
          <p>
            Portal do colaborador para visualizar informações pessoais e feedback.
          </p>
          <ul>
            <li>Meus dados pessoais</li>
            <li>Feedback e avaliações</li>
            <li>Meu ranking</li>
          </ul>
          <Link href="/LoginColaborador">
            <button className="btn purple">Acessar como Colaborador</button>
          </Link>
        </div>
      </div>

      <footer>© 2025 General Motors - Todos os direitos reservados</footer>
    </div>

    </div>
  );
}
