"use client";
import Link from "next/link";
import "./navbar.css"

export default function Navbar() {
  return (
    <>


     


      <header className="main-header">
        <div className="header-left">
          <div className="gm-logo">GM</div>
          <div className="system-info">
            <span className="system-title">Sistema de Gestão de Colaboradores</span>
            <span className="system-subtitle">
              General Motors - Portal do RH
            </span>
          </div>
        </div>
        <div className="header-right">
          <div className="user-profile">
            <span className="user-name1">Administrador RH</span>
            
          </div>
        <Link href="/" className="logout-btn">
    <svg className="logout-icon" viewBox="0 0 24 24">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1={21} y1={12} x2={9} y2={12} />
    </svg>
    Sair
</Link>
        </div>
      </header>




    </>
  )
}