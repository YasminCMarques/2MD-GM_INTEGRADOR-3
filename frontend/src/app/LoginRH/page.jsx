'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';
import Swal from 'sweetalert2';
import { jwtDecode } from "jwt-decode"; 
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        Swal.fire({
            title: "Falha no Login",
            text: dados.mensagem || "Erro desconhecido.",
            icon: "error",
            confirmButtonText: "Tentar Novamente",
            timer: 2000 
        });
        setCarregando(false);
        return;
      }

      //  VALIDAÇÃO DE SEGURANÇA DO RH 
      
      const token = dados.dados.token;
      
      try {
          const usuarioDecodificado = jwtDecode(token);
          console.log("Payload do Token:", usuarioDecodificado); 

          if (usuarioDecodificado.tipo !== 'admin') {
            Swal.fire({
                title: "Acesso Restrito",
                text: "Este login pertence a um colaborador comum. Acesso exclusivo para RH/Admin.",
                icon: "warning",
                confirmButtonColor: "#d33",
                confirmButtonText: "Entendido"
            });
            setCarregando(false);
            return; 
          }
          
      } catch (errorDecode) {
          console.error("Erro ao decodificar token:", errorDecode);
          setCarregando(false);
          return;
      }



      localStorage.setItem("token", token);

      await Swal.fire({
        title: "Bem-vindo(a)!",
        text: "Painel Administrativo liberado.",
        icon: "success",
        showConfirmButton: false, 
        timer: 1500 
      });
      
      router.push("/RH");

    } catch (erro) {
      Swal.fire({
        title: "Erro de Conexão",
        text: "O servidor não está respondendo.",
        icon: "error"
      });
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
                placeholder="••••••••"
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

