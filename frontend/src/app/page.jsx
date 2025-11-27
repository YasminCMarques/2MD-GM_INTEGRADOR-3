import React from "react";
import Link from "next/link";
import { Users, Settings } from "lucide-react";
import styles from "./login.module.css";

export default function LoginSelection() {
  return (
    <div className={styles.main}>
      <div className={styles.loginContainer}>

        <div className={styles.loginHeader}>
          <div className={styles.logo}>
            <img src="../imagens/Logo.png" width={220} alt="Logo GM" />
          </div>

          <h2>Sistema de Gestão de Colaboradores</h2>
          <p>General Motors - Selecione seu tipo de acesso</p>
        </div>

        <div className={styles.cardsContainer}>
          {/* RH */}
          <div className={styles.accessCard}>
            <div className={`${styles.iconContainer} ${styles.blue}`}>
              <Settings size={38} />
            </div>

            <h3>Acesso RH</h3>
            <p>Portal administrativo para gestão de colaboradores.</p>

            <ul>
              <li>Dashboard completo</li>
              <li>Gestão de colaboradores</li>
              <li>Relatórios e análises</li>
            </ul>

            <Link href="/LoginRH">
              <button className={`${styles.btn} ${styles.btnBlue}`}>
                Acessar como RH
              </button>
            </Link>
          </div>

          {/* Colaborador */}
          <div className={styles.accessCard}>
            <div className={`${styles.iconContainer} ${styles.purple}`}>
              <Users size={38} />
            </div>

            <h3>Acesso Colaborador</h3>
            <p>Portal do colaborador para visualizar informações.</p>

            <ul>
              <li>Meus dados pessoais</li>
              <li>Feedback e avaliações</li>
              <li>Meu ranking</li>
            </ul>

            <Link href="/LoginColaborador">
              <button className={`${styles.btn} ${styles.btnPurple}`}>
                Acessar como Colaborador
              </button>
            </Link>
          </div>
        </div>

        <footer className={styles.footer}>
          © 2025 General Motors - Todos os direitos reservados
        </footer>
      </div>
    </div>
  );
}
