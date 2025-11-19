"use client";

import "./colaboradores.css";
import React, { useState, useEffect } from "react";

export default function ColaboradoresContent() {
    const [colaboradores, setColaboradores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    async function carregarColaboradores() {
        try {
            const token = localStorage.getItem("token"); // JWT armazenado no login

            if (!token) {
                setErro("Token não encontrado. Faça login novamente.");
                setLoading(false);
                return;
            }

            const res = await fetch("http://localhost:3000/api/usuarios", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // JWT AQUI 🔥
                },
            });

            if (!res.ok) {
                throw new Error("Falha ao buscar colaboradores.");
            }

            const json = await res.json();
            setColaboradores(json.dados);
        } catch (err) {
            console.error("Erro ao carregar:", err);
            setErro(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarColaboradores();
    }, []);

    if (loading) return <p>Carregando colaboradores...</p>;

    if (erro) return <p style={{ color: "red" }}>{erro}</p>;

    return (
        <div className="colab-container">
            <h1>Colaboradores</h1>
            <p className="subtitulo">Lista completa de usuários do sistema</p>

            {/* GRID DE CARDS */}
            <div className="grid-colaboradores">

                {colaboradores.map((c) => {
                    const iniciais = c.nome
                        .split(" ")
                        .map((p) => p[0])
                        .join("")
                        .toUpperCase();

                    return (
                        <div className="card-colab" key={c.id}>
                            {/* Topo colorido */}
                            <div className="card-topo"></div>

                            {/* Círculo com iniciais */}
                            <div className="inicial-circle">{iniciais}</div>

                            {/* Conteúdo do card */}
                            <div className="card-info">

                                <h2>{c.nome}</h2>
                                <p className="cargo">{c.tipo === "admin" ? "Administrador" : "Usuário comum"}</p>

                                <div className="linha">
                                    <strong>Email:</strong> {c.email}
                                </div>

                                <div className="linha">
                                    <strong>Criado em:</strong>{" "}
                                    {new Date(c.data_criacao).toLocaleDateString("pt-BR")}
                                </div>

                                <div className="linha-final">
                                    <span className="status ativo">Ativo</span>
                                    <span className="performance">Ver perfil</span>
                                </div>

                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );

}
