"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="/">
          GM
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links do menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/features">
                Recursos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/pricing">
                Planos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contato
              </Link>
            </li>
          </ul>

          {/* Botão de login (exemplo) */}
          <div className="d-flex ms-lg-3 mt-2 mt-lg-0">
            <Link href="/login" className="btn btn-outline-primary">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
