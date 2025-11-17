"use client";
import Link from "next/link";


import "./navbarcolaborador.css"


export default function Navbar() {
  return (
    <>


      <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Use bg-light ou a sua cor customizada */}
        <div className="container-fluid">



          {/* 1. Brand/Logo */}
          <a className="navbar-brand">
            <img src="./imagens/Logo.png" alt="GM Logo" width={120} height={90} />
            Sistema de Gestão de Colaboradores
          <h3 className="subtitulo">General Motors - Portal do Colaborador</h3>  
          </a>


          {/* Botão Sair */}
          <Link href="/" className="btn-logout">
            <i className="fas fa-sign-out-alt" />
            Sair
          </Link>


        </div>
      </nav>




      <aside className="sidebar">
        <div className="menu">
          <a href="#" className="menu-item active">
            <i className="lucide-layout-dashboard" />
            <span>Meu Painel</span>
          </a>
          <a href="#" className="menu-item">
            <i className="lucide-message-square" />
            <span>Meus Feedbacks</span>
          </a>
          <a href="#" className="menu-item">
            <i className="lucide-trophy" />
            <span>Meu Ranking</span>
          </a>
          <a href="#" className="menu-item">
            <i className="lucide-lightbulb" />
            <span>Minhas Sugestões</span>
          </a>


        </div>
      </aside>


    </>
  )
}