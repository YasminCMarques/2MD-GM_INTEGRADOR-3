"use client";

import Swal from 'sweetalert2';
import "./colaboradores.css";
import React, { useState, useEffect, useRef } from "react";

export default function ColaboradoresContent() {
    const [colaboradores, setColaboradores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const [termoBusca, setTermoBusca] = useState("");
    const [filtroTipo, setFiltroTipo] = useState("todos");

    const selectRef = useRef(null);

    const [mostrarModal, setMostrarModal] = useState(false);
    const [salvando, setSalvando] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        nome: "",
        email: "",
        tipo: "",
        telefone: "",
        casa: "",
        data_criacao: ""
    });

    function abrirPerfil(colab) {
        setFormData({
            id: colab.id,
            nome: colab.nome,
            email: colab.email,
            tipo: colab.tipo,
            telefone: colab.telefone || "",
            casa: colab.casa || "",
            data_criacao: colab.data_criacao
        });
        setMostrarModal(true);
    }

    function fecharModal() {
        setMostrarModal(false);
        setSalvando(false);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function carregarColaboradores() {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const res = await fetch("http://localhost:3000/api/usuarios", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!res.ok) throw new Error("Falha ao buscar colaboradores.");
            const json = await res.json();
            setColaboradores(json.dados);
        } catch (err) {
            setErro(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function salvarAlteracoes() {
        setSalvando(true);
        try {
            const token = localStorage.getItem("token");

            const url = `http://localhost:3000/api/usuarios/${formData.id}`;

            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(
                    errorData.mensagem ||
                    errorData.erro ||
                    errorData.message ||
                    "Erro ao atualizar usuário."
                );
            }

            Swal.fire("Usuário atualizado!");

            setColaboradores((prev) =>
                prev.map((c) => (c.id === formData.id ? { ...c, ...formData } : c))
            );

            fecharModal();

        } catch (err) {
            Swal.fire({
                title: "Erro!",
                text: err.message,
                icon: "error"
            });
        } finally {
            setSalvando(false);
        }
    }

    async function excluirUsuario() {
        const swalDefault = Swal.mixin({
            buttonsStyling: true
        });

        swalDefault.fire({
            title: "Tem certeza?",
            text: `Você não poderá reverter a exclusão de ${formData.nome}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, excluir!",
            cancelButtonText: "Não, cancelar!",
            reverseButtons: true
        }).then(async (result) => {

            if (result.isConfirmed) {
                setSalvando(true);

                try {
                    const token = localStorage.getItem("token");
                    const url = `http://localhost:3000/api/usuarios/${formData.id}`;

                    const res = await fetch(url, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (!res.ok) {
                        const errorData = await res.json().catch(() => ({}));
                        throw new Error(
                            errorData.mensagem ||
                            errorData.erro ||
                            errorData.message ||
                            "Erro ao excluir usuário."
                        );
                    }

                    setColaboradores((prev) => prev.filter((c) => c.id !== formData.id));
                    fecharModal();

                    swalDefault.fire({
                        title: "Excluído!",
                        text: "O usuário foi removido com sucesso.",
                        icon: "success"
                    });

                } catch (err) {
                    swalDefault.fire({
                        title: "Erro!",
                        text: err.message,
                        icon: "error"
                    });
                } finally {
                    setSalvando(false);
                }

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalDefault.fire({
                    title: "Cancelado",
                    text: "O usuário está seguro :)",
                    icon: "error"
                });
            }
        });
    }


    useEffect(() => {
        carregarColaboradores();
    }, []);

    const colaboradoresFiltrados = colaboradores.filter((c) => {
        const matchTexto =
            c.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
            c.email.toLowerCase().includes(termoBusca.toLowerCase());

        const matchTipo = filtroTipo === "todos" || c.tipo === filtroTipo;

        return matchTexto && matchTipo;
    });

    if (loading) return <p>Carregando colaboradores...</p>;
    if (erro) return <p style={{ color: "red" }}>{erro}</p>;

    return (
        <div className="colab-container">
        <h1>Colaboradores</h1>
            <p className="subtitulo">Lista completa de colaboradores</p>

            <div className="filtros-box">
                <input
                    type="text"
                    placeholder="Buscar por nome ou email..."
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                />

                <div className="select-wrapper">
                    <select
                        ref={selectRef}
                        value={filtroTipo}
                        onChange={(e) => setFiltroTipo(e.target.value)}
                    >
                        <option value="todos">Todos os tipos</option>
                        <option value="comum">Usuário Comum</option>
                        <option value="admin">Administrador</option>
                    </select>

                    {/* Seta clicável */}
                    <span
                        className="icone-filtro"
                        onClick={() => selectRef.current?.focus() || selectRef.current?.click()}
                    >
                        
                    </span>
                </div>
            </div>

            <div className="grid-colaboradores">
                {colaboradoresFiltrados.length === 0 && (
                    <p style={{ width: "100%", textAlign: "center", color: "#999", marginTop: "20px" }}>
                        Nenhum colaborador encontrado com esses filtros.
                    </p>
                )}

                {colaboradoresFiltrados.map((c) => {
                    const iniciais = c.nome
                        ? c.nome.split(" ").map((p) => p[0]).join("").toUpperCase().substring(0, 2)
                        : "??";

                    return (
                        <div className="card-colab" key={c.id}>
                            <div className="card-topo"></div>
                            <div className="inicial-circle">{iniciais}</div>
                            <div className="card-info">
                                <h2>{c.nome}</h2>
                                <p className="cargo">{c.tipo === "admin" ? "Administrador" : "Usuário comum"}</p>

                                <div className="linha">
                                    <strong>Email:</strong> {c.email}
                                </div>
                                <div className="linha">
                                    <strong>Criado em:</strong>{" "}
                                    {c.data_criacao ? new Date(c.data_criacao).toLocaleDateString("pt-BR") : "-"}
                                </div>

                                <div className="linha-final">
                                    <span className="status ativo">Ativo</span>
                                    <span
                                        className="performance"
                                        onClick={() => abrirPerfil(c)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Editar perfil
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {mostrarModal && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <button className="fechar" onClick={fecharModal}>X</button>
                        <h2>Editar Colaborador</h2>

                        <div className="form-group">
                            <label>Nome Completo</label>
                            <input name="nome" value={formData.nome} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Tipo de Usuário</label>
                            <select name="tipo" value={formData.tipo} onChange={handleChange}>
                                <option value="comum">Usuário Comum</option>
                                <option value="admin">Administrador</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Telefone</label>
                            <input
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                            />
                        </div>

                        <div className="form-group">
                            <label>Casa / Unidade</label>
                            <input name="casa" value={formData.casa} onChange={handleChange} />
                        </div>

                        <div className="modal-actions">
                            <button
                                className="btn-excluir"
                                onClick={excluirUsuario}
                                disabled={salvando}
                            >
                                {salvando ? "..." : "Excluir"}
                            </button>
                            <button
                                className="btn-salvar"
                                onClick={salvarAlteracoes}
                                disabled={salvando}
                            >
                                {salvando ? "Salvando..." : "Salvar Alterações"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
