"use client";

import React, { useState } from "react";
import { Lock, Eye, EyeOff, User, Fingerprint, ArrowLeft } from "lucide-react";
import Link from "next/link";
import "./logincolaborador.css"; 



export default function LoginColaborador() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("cpf");

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <Link href="/" className="backLink1">
          <ArrowLeft size={18} /> Voltar
        </Link>

        <div className="loginCard">
          <div className="loginHeader">
           <div className="logo">
          <img src="../imagens/Logo.png" width={220} alt="Logo GM" />
        </div>
            <h2>Portal do Colaborador</h2>
            <p>Bem-vindo à GM</p>
          </div>

          <div className="loginMethod">
            <button
              className={`methodBtn ${loginMethod === "cpf" ? "active" : ""}`}
              onClick={() => setLoginMethod("cpf")}
            >
              <Fingerprint size={16} /> CPF
            </button>
            <button
              className={`methodBtn ${loginMethod === "matricula" ? "active" : ""}`}
              onClick={() => setLoginMethod("matricula")}
            >
              <User size={16} /> Matrícula
            </button>
          </div>

          <form>
            <div className="inputGroup">
              <label>{loginMethod === "cpf" ? "CPF" : "Matrícula"}</label>
              <div className="inputIcon">
                <Fingerprint size={18} />
                <input
                  type="text"
                  placeholder={
                    loginMethod === "cpf"
                      ? "000.000.000-00"
                      : "Digite sua matrícula"
                  }
                />
              </div>
            </div>

            <div className="inputGroup">
              <label>Senha</label>
              <div className="inputIcon">
                <Lock size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="iconBtn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="formOptions">
              <label>
                <input type="checkbox" /> Lembrar-me
              </label>
              
            </div>

             <Link href="/Colaborador">
                                <button className="btn purple">Acessar como Colaborador</button>
                            </Link>

          </form>

        

          <p className="defaultPassword">
            Primeiro acesso? Sua senha padrão é sua data de nascimento (DDMMAAAA)
          </p>
        </div>

        <div className="portalBenefits">
          

          <p className="contact">
            Problemas para acessar? Contate o RH: <a href="mailto:rh@gm.com">rh@gm.com</a>
          </p>

        </div>
        
      </div>
    </div>
    
  );
}
