"use client";


import React, { useState } from "react";
import { Lock, Eye, EyeOff, User, Fingerprint, ArrowLeft } from "lucide-react";
import Link from "next/link";
import "./logincolaborador.css";




export default function LoginColaborador() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("cpf");


  return (
    <div className="login-page">
      <div className="login-container">
        <Link href="/" className="back-link">
          <ArrowLeft size={18} /> Voltar
        </Link>


        <div className="login-card">
          <div className="login-header">
            <div className="icon-header">
              <User size={40} />
            </div>
            <h2>Portal do Colaborador</h2>
            <p>Bem-vindo à GM</p>
          </div>


          <div className="login-method">
            <button
              className={`method-btn ${loginMethod === "cpf" ? "active" : ""}`}
              onClick={() => setLoginMethod("cpf")}
            >
              <Fingerprint size={16} /> CPF
            </button>
            <button
              className={`method-btn ${loginMethod === "matricula" ? "active" : ""}`}
              onClick={() => setLoginMethod("matricula")}
            >
              <User size={16} /> Matrícula
            </button>
          </div>


          <form>
            <div className="input-group">
              <label>{loginMethod === "cpf" ? "CPF" : "Matrícula"}</label>
              <div className="input-icon">
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


            <div className="input-group">
              <label>Senha</label>
              <div className="input-icon">
                <Lock size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>


            <div className="form-options">
              <label>
                <input type="checkbox" /> Lembrar-me
              </label>
              <a href="#">Esqueci minha senha</a>
            </div>


            <button className="btn-login">Acessar Meu Portal</button>
          </form>


          <div className="demo-credentials">
            <strong>Credenciais de demonstração:</strong>
            <p>CPF: 123.456.789-00</p>
            <p>Matrícula: 12345</p>
            <p>Senha: colaborador123</p>
          </div>


          <p className="default-password">
            Primeiro acesso? Sua senha padrão é sua data de nascimento (DDMMAAAA)
          </p>
        </div>


        <div className="portal-benefits">
          <h4>Benefícios do Portal</h4>
          <ul>
            <li>Acesse suas informações pessoais a qualquer hora</li>
            <li>Visualize seu histórico de feedbacks e avaliações</li>
            <li>Acompanhe seu ranking e bonificações</li>
          </ul>


          <p className="contact">
            Problemas para acessar? Contate o RH: <a href="mailto:rh@gm.com">rh@gm.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
