'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';
import Swal from 'sweetalert2';
import './loginrh.css';

export default function LoginRH() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);

    try {
      const resposta = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, senha })
      });


      const dados = await resposta.json();

      if (!resposta.ok) {
        
        Swal.fire({
            title: "Falha no Login",
            text: dados.mensagem || "Erro desconhecido ao tentar fazer login.",
            icon: "error",
            confirmButtonText: "Tentar Novamente" ,
            timer: 2000 
        });
        setCarregando(false);
        return;
    }

    // Salva o token
    localStorage.setItem("token", dados.dados.token);

    
    await Swal.fire({
        title: "Sucesso!",
        text: "Login realizado com êxito!",
        icon: "success",
        showConfirmButton: false, 
        timer: 1500 
    });
    
    router.push("/RH");

    } catch (erro) {
      alert("Erro ao conectar ao servidor.");
      console.error("Erro no login:", erro);
    } finally {
      setCarregando(false);
    }
  };

  return (

    <div className="main">
    
      <Link href="/" className="backLink">
        <ArrowLeft size={40} /> Voltar
      </Link>

      <div className="container">
        <div className="login-box">
          <div className="header">
            <div className="logo">
              <img src="../imagens/Logo.png" width={220} alt="Logo GM" />
            </div>

            <h2>Acesso RH</h2>
            <p>Portal Administrativo GM</p>
          </div>

          <form onSubmit={handleSubmit} action="javascript:void(0)">

            <div className="input-group">
              <label htmlFor="email">E-mail Corporativo</label>
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

            <button type="submit" className="btn" disabled={carregando}>
              {carregando ? "Entrando..." : "Entrar no Sistema"}
            </button>
          </form>

        </div>
      </div>


    </div>
  );
}
