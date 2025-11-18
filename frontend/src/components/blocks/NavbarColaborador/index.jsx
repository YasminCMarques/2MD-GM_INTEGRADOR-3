"use client";
import Link from "next/link";
import "./navbarcolaborador.css"


export default function Navbar() {
  return (
    <>


      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> Use bg-light ou a sua cor customizada
        <div className="container-fluid">



          1. Brand/Logo
          <a className="navbar-brand">
            <img src="./imagens/Logo.png" alt="GM Logo" width={120} height={90} />
            Sistema de Gestão de Colaboradores      
          <h3 className="subtitulo">General Motors - Portal do Colaborador</h3>  
           </a>
    


          Botão Sair
          <Link href="/" className="btn-logout">
            <i className="fas fa-sign-out-alt" />
            Sair
          </Link>


        </div>
      </nav> */}


      <header className="main-header">
        <div className="header-left">
          <div className="gm-logo">GM</div>
          <div className="system-info">
            <span className="system-title">Sistema de Gestão de Colaboradores</span>
            <span className="system-subtitle">
              General Motors - Portal do Colaborador
            </span>
          </div>
        </div>
        <div className="header-right">
          <div className="user-profile">
            <span className="user-name">Beatriz</span>
            <span className="user-id">ID: 12346</span>
          </div>
          <button className="logout-btn">
            <svg className="logout-icon" viewBox="0 0 24 24">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1={21} y1={12} x2={9} y2={12} />
            </svg>
            Sair
          </button>
        </div>
      </header>




    </>
  )
}