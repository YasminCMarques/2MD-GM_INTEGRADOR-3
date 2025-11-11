import Link from "next/link"
import "./navbarcolaborador.css"



export default function Navbar() {
  return (
    <>


      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
        style={{ width: 280 }}
      >
        {" "}
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          {" "}
          <svg className="bi pe-none me-2" width={40} height={32} aria-hidden="true">
            <use xlinkHref="#bootstrap" />
          </svg>{" "}
          <span className="fs-4">
            <font dir="auto" style={{ verticalAlign: "inherit" }}>
              <font dir="auto" style={{ verticalAlign: "inherit" }}>
                Barra lateral
              </font>
            </font>
          </span>{" "}
        </a>{" "}
        <hr />{" "}
        <ul className="nav nav-pills flex-column mb-auto">
          {" "}
          <li className="nav-item">
            {" "}
            <a href="#" className="nav-link active" aria-current="page">
              {" "}
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#home" />
              </svg>
              <font dir="auto" style={{ verticalAlign: "inherit" }}>
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  Lar
                </font>
              </font>
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#" className="nav-link link-body-emphasis">
              {" "}
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2" />
              </svg>
              <font dir="auto" style={{ verticalAlign: "inherit" }}>
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  Painel
                </font>
              </font>
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#" className="nav-link link-body-emphasis">
              {" "}
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#table" />
              </svg>
              <font dir="auto" style={{ verticalAlign: "inherit" }}>
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  Pedidos
                </font>
              </font>
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#" className="nav-link link-body-emphasis">
              {" "}
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#grid" />
              </svg>
              <font dir="auto" style={{ verticalAlign: "inherit" }}>
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  Produtos
                </font>
              </font>
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#" className="nav-link link-body-emphasis">
              {" "}
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#people-circle" />
              </svg>
              <font dir="auto" style={{ verticalAlign: "inherit" }}>
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  Clientes
                </font>
              </font>
            </a>{" "}
          </li>{" "}
        </ul>{" "}
        <hr />{" "}
        <div className="dropdown">
          {" "}
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <img
              src="https://github.com/mdo.png"
              alt=""
              width={32}
              height={32}
              className="rounded-circle me-2"
            />{" "}
            <strong>
              <font dir="auto" style={{ verticalAlign: "inherit" }}>
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  mdo
                </font>
              </font>
            </strong>{" "}
          </a>{" "}
          <ul className="dropdown-menu text-small shadow">
            {" "}
            <li>
              <a className="dropdown-item" href="#">
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  <font dir="auto" style={{ verticalAlign: "inherit" }}>
                    Novo projeto...
                  </font>
                </font>
              </a>
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  <font dir="auto" style={{ verticalAlign: "inherit" }}>
                    Configurações
                  </font>
                </font>
              </a>
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  <font dir="auto" style={{ verticalAlign: "inherit" }}>
                    Perfil
                  </font>
                </font>
              </a>
            </li>{" "}
            <li>
              <hr className="dropdown-divider" />
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                <font dir="auto" style={{ verticalAlign: "inherit" }}>
                  <font dir="auto" style={{ verticalAlign: "inherit" }}>
                    sair
                  </font>
                </font>
              </a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>
    </>
  )
}
