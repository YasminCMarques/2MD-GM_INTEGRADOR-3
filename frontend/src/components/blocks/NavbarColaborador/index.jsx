"use client";
import Link from "next/link";
import styles from "./navbarcolaborador.module.css";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function NavbarColaborador() {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const payload = jwtDecode(token);

      // Como NÃO existe 'nome', usamos o EMAIL como nome exibido
      if (payload?.email) setNome(payload.email);
      
      // O ID existe, então usamos ele normalmente
      if (payload?.id) setId(payload.id);

    } catch (err) {
      console.error("Erro ao decodificar token:", err);
    }
  }, []);

  return (
    <header className={styles.mainHeader}>
      <div className={styles.headerLeft}>
        <div className={styles.gmLogo}>GM</div>

        <div className={styles.systemInfo}>
          <span className={styles.systemTitle}>Sistema de Gestão de Colaboradores</span>
          <span className={styles.systemSubtitle}>General Motors - Portal do Colaborador</span>
        </div>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.userProfile}>
          <span className={styles.userName}>{nome || "Carregando..."}</span>
          <span className={styles.userId}>ID: {id || "--"}</span>
        </div>

        <Link href="/" className={styles.logoutBtn}>
          <svg className={styles.logoutIcon} viewBox="0 0 24 24">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1={21} y1={12} x2={9} y2={12} />
          </svg>
          Sair
        </Link>
      </div>
    </header>
  );
}
