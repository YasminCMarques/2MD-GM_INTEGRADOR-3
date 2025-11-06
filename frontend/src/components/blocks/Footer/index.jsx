"use client";
import Link from "next/link";
import "./footer.css"

export default function Footer() {
  return (

    <footer className="rodape">

      <div className="rodape-bottom-links">
        <Link href="#">Termos de Uso</Link>
        <Link href="#">Política de Privacidade</Link>
        <Link href="#">Política de Cookies</Link>
        <Link href="#">LGPD</Link>
      </div>
      <div className="rodape-bottom">

        <p>© 2025 SafeCareEPI. Todos os direitos reservados.</p>

      </div>

    </footer>
  );
}
