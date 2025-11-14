"use client";
import Link from "next/link";

import "./navbarcolaborador.css"

export default function Navbar() {
  return (
    <>


   <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Use bg-light ou a sua cor customizada */}
  <div className="container-fluid">
    
    {/* 1. Brand/Logo */}
    <a className="navbar-brand" href="#">
      <img src="./imagens/Logo.png" alt="GM Logo" width={120} height={90}/>
      Sistema de Gestão de Colaboradores
    </a>

    {/* 2. O Botão Toggler (o "hambúrguer") */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#headerNavbarContent" // ID que deve corresponder ao div de colapso
      aria-controls="headerNavbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    {/* 3. O Container de Conteúdo Colapsável */}
    {/* É essencial que este div tenha as classes 'collapse navbar-collapse' */}
    <div className="collapse navbar-collapse" id="headerNavbarContent">
      
      {/* Lista de Links (Se houver, use 'ms-auto' para empurrar tudo para a direita) */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* Se não tiver links, remova este <ul> */}
      </ul>

      {/* Botão Sair */}
      <button className="btn btn-danger" type="button"> {/* Use btn-primary ou btn-danger como na imagem */}
         <Link href="/"></Link>
        Sair
      </button>

    </div>
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
