"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Hook de navegação
import { Lock, Eye, EyeOff, User, Fingerprint, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Swal from 'sweetalert2'; // Feedback visual
import { jwtDecode } from "jwt-decode"; // Decodificador
import "./logincolaborador.css";

export default function LoginColaborador() {
  const router = useRouter();
  
  // Estados para capturar os dados
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("cpf"); // Apenas visual por enquanto
  
  const [identificador, setIdentificador] = useState(''); // O que o usuário digitar (CPF/Matrícula/Email)
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);

    try {
      // Nota: Seu backend espera "email". Estamos enviando o que foi digitado no campo identificador.
      const resposta = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: identificador, senha }) 
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        Swal.fire({
          title: "Acesso Negado",
          text: dados.mensagem || "Verifique suas credenciais.",
          icon: "error",
          timer: 2000
        });
        setCarregando(false);
        return;
      }

      // --- VALIDAÇÃO DE SEGURANÇA (COLABORADOR) ---
      const token = dados.dados.token;
      
      try {
        const usuarioDecodificado = jwtDecode(token);
        console.log("Login Colaborador - Payload:", usuarioDecodificado);

        // AQUI ESTÁ A LÓGICA INVERTIDA:
        // Se o tipo NÃO for 'comum', nós barramos.
        // Isso impede que um ADMIN entre na tela de quem é peão de fábrica/escritório comum.
        if (usuarioDecodificado.tipo !== 'comum') {
           Swal.fire({
             title: "Perfil Incorreto",
             text: "Este acesso é exclusivo para Colaboradores. Administradores devem usar o Portal RH.",
             icon: "info",
             confirmButtonText: "Ir para Login RH"
           }).then((result) => {
             if (result.isConfirmed) {
                router.push("/LoginRH"); // Opcional: Redireciona para o lugar certo
             }
           });
           setCarregando(false);
           return; 
        }

          // SALVA O NOME DO USUÁRIO
  localStorage.setItem("nomeUsuario", usuarioDecodificado.nome);

      } catch (error) {
        console.error("Erro ao ler token", error);
        setCarregando(false);
        return;
      }

      // --- SUCESSO ---
      localStorage.setItem("token", token);
      
      await Swal.fire({
        title: "Bem-vindo!",
        text: "Login realizado com sucesso.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });

      router.push("/Colaborador"); // Manda para a página interna

    } catch (erro) {
      Swal.fire({ title: "Erro", text: "Falha na conexão com o servidor", icon: "error" });
      console.error(erro);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="logincolaborador">
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

            {/* Botões de troca de método (Apenas visual, pois o back valida email por enquanto) */}
            <div className="loginMethod">
              <button
                className={`methodBtn ${loginMethod === "cpf" ? "active" : ""}`}
                onClick={() => setLoginMethod("cpf")}
                type="button"
              >
                <Fingerprint size={16} /> CPF
              </button>
              <button
                className={`methodBtn ${loginMethod === "matricula" ? "active" : ""}`}
                onClick={() => setLoginMethod("matricula")}
                type="button"
              >
                <User size={16} /> Matrícula
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="inputGroup">
                <label>{loginMethod === "cpf" ? "CPF / Email" : "Matrícula / Email"}</label>
                <div className="inputIcon">
                  <Fingerprint size={18} />
                  <input
                    type="text"
                    placeholder={
                      loginMethod === "cpf"
                        ? "000.000.000-00 ou seu@email.com"
                        : "Digite sua matrícula ou email"
                    }
                    value={identificador}
                    onChange={(e) => setIdentificador(e.target.value)}
                    required
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
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
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

              {/* MUDANÇA IMPORTANTE: Tirei o Link e deixei apenas o Button Submit */}
              <button type="submit" className="btn purple" disabled={carregando}>
                 {carregando ? "Entrando..." : "Acessar como Colaborador"}
              </button>
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
    </div>
  );
}