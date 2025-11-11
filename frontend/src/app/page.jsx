import React from "react";
import Link from "next/link";
import { Users, Settings } from "lucide-react";

export default function LoginSelection() {
  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo">
          <img src="../imagens/Logo.png" width={300} alt="" />
        </div>
        <h2>Sistema de Gestão de Colaboradores</h2>
        <p>General Motors - Selecione seu tipo de acesso</p>
      </div>

      <div className="cards-container">
        {/* Card RH */}
        <div className="access-card">
          <div className="icon-container blue">
            <Settings size={36} />
          </div>
          <h3>Acesso RH</h3>
          <p>
            Portal administrativo para gestão de colaboradores, avaliações e relatórios
          </p>
          <ul>
            <li>Dashboard completo</li>
            <li>Gestão de colaboradores</li>
            <li>Relatórios e análises</li>
          </ul>
     <Link href={"/loginrh"}>     <button className="btn blue">Acessar como RH</button> </Link>{" "}
        </div>

        {/* Card Colaborador */}
        <div className="access-card">
          <div className="icon-container purple">
            <Users size={36} />
          </div>
          <h3>Acesso Colaborador</h3>
          <p>
            Portal do colaborador para visualizar informações pessoais e feedback
          </p>
          <ul>
            <li>Meus dados pessoais</li>
            <li>Feedback e avaliações</li>
            <li>Meu ranking</li>
          </ul>
      <Link href={"/navbarcolaborador"}>  <button className="btn purple">Acessar como Colaborador</button>   </Link>{" "}
        </div>
      </div>

      <footer>© 2025 General Motors - Todos os direitos reservados</footer>
    </div>
  );
}
