import Link from "next/link"
import "./navbarcolaborador.css"






export default function Navbar() {
  return (
    <>
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
