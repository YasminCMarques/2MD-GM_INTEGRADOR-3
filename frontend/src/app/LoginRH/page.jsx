'use client';
import React, { useState } from 'react';
import { Lock, Eye, EyeOff, User, Fingerprint, ArrowLeft } from "lucide-react";
import Link from 'next/link';
import './loginrh.css';


export default function LoginRH() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
  };


  return (
   




   


 <div className="seta">
    <Link href="/" className="backLink">
    <ArrowLeft size={40} /> Voltar
  </Link>
 
   <div className="container">
      <div className="login-box">
        <div className="header">


        <div className="logo">
          <img src="../imagens/Logo.png" width={220} alt="Logo GM" />
        </div>
          <div className="icon"></div>
          <h2>Acesso RH</h2>
          <p>Portal Administrativo GM</p>
        </div>


        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Corporativo</label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@gm.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>


          <div className="remember-me">
            <input type="checkbox" id="lembrar" />
            <label htmlFor="lembrar">Lembrar-me</label>
          </div>


          <button type="submit" className="btn">
            Entrar no Sistema
          </button>
        </form>


       </div>
      </div>
      </div>
     
     
  );
}



