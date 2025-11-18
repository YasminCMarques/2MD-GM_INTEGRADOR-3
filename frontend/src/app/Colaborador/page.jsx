"use client";

import React from "react";
import {
    Users,
    GraduationCap,
    ClipboardCheck,
    BarChart3,
    TrendingUp,
    Gift,
    DollarSign,
    Circle,
}

    from "lucide-react";
import Navbar from "@/components/blocks/NavbarColaborador";
import Footer from "@/components/blocks/Footer";
import "./colaborador.css";
// import SidebarNavColaborador from "@/components/blocks/SidebarColaborador";

export default function Colaborador() {
    return (
        <>
            {/* <Navbar /> */}

            <>
                <header className="main-header">
                    <div className="header-left">
                        <div className="gm-logo">GM</div>
                        <div className="system-info">
                            <span className="system-title">Sistema de Gestão de Colaboradores</span>
                            <span className="system-subtitle">
                                General Motors - Portal do Colaborador
                            </span>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="user-profile">
                            <span className="user-name">Beatriz</span>
                            <span className="user-id">ID: 12346</span>
                        </div>
                        <button className="logout-btn">Sair</button>
                    </div>
                </header>
                <div className="layout-container">
                    <aside className="sidebar">
                        <nav className="menu-list">
                            <a href="#" className="menu-item active">
                                <svg viewBox="0 0 24 24">
                                    <rect x={3} y={3} width={7} height={7} />
                                    <rect x={14} y={3} width={7} height={7} />
                                    <rect x={14} y={14} width={7} height={7} />
                                    <rect x={3} y={14} width={7} height={7} />
                                </svg>
                                Dashboard
                            </a>
                            <a href="#" className="menu-item">
                                <svg viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                </svg>
                                Meu Painel
                            </a>
                            <a href="#" className="menu-item">
                                <svg viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                                Meus Feedbacks
                            </a>
                            <a href="#" className="menu-item">
                                <svg viewBox="0 0 24 24">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                                Minhas Sugestões
                            </a>
                        </nav>
                    </aside>
                    <main className="main-content">
                        <div className="welcome-card">
                            <div className="text-content">
                                <h1>Seja Bem-Vindo(a), Beatriz!</h1>
                                <p>
                                    Estamos felizes em ter você conosco. Confira as novidades e
                                    atualizações da GM.
                                </p>
                            </div>
                            <div className="date-content">
                                <div className="calendar-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                                        <line x1={16} y1={2} x2={16} y2={6} />
                                        <line x1={8} y1={2} x2={8} y2={6} />
                                        <line x1={3} y1={10} x2={21} y2={10} />
                                    </svg>
                                </div>
                                <div className="date-info">
                                    <span className="date-label">Hoje</span>
                                    <span className="date-value">
                                        terça-feira, 18 de novembro de 2025
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <div style={{ marginTop: 10 }}>
                            <h2 style={{ fontSize: 20, color: "#333", marginBottom: 5 }}>
                                Dashboard
                            </h2>
                            <p style={{ fontSize: 14, color: "#666" }}>
                                Visão geral do sistema de gestão de colaboradores
                            </p>
                        </div> */}
                    </main>
                </div>
            </>

            

            <div className="colaborador-layout">

                {/* <SidebarNavColaborador /> */}

                <div className="asidecolaborador-sidebar"> </div>


                <div className="rh-dashboard-container">

                    {/* CARDS SUPERIORES */}
                    <div className="rh-cards-grid">

                        <div className="rh-card">
                            <Users className="rh-card-icon blue" />
                            <h3>Total de Colaboradores</h3>
                            <p className="rh-card-value">847</p>
                            <span className="rh-card-status positive">+12 este mês</span>
                        </div>

                        <div className="rh-card">
                            <GraduationCap className="rh-card-icon purple" />
                            <h3>Aprendizes/Estagiários</h3>
                            <p className="rh-card-value">124</p>
                            <span className="rh-card-status positive">+8 este mês</span>
                        </div>

                        <div className="rh-card">
                            <ClipboardCheck className="rh-card-icon yellow" />
                            <h3>Avaliações Pendentes</h3>
                            <p className="rh-card-value">23</p>
                            <span className="rh-card-status negative">-5 este mês</span>
                        </div>

                        <div className="rh-card">
                            <BarChart3 className="rh-card-icon green" />
                            <h3>Performance Média</h3>
                            <p className="rh-card-value">8.4</p>
                            <span className="rh-card-status positive">+0.3 este mês</span>
                        </div>

                        <div className="rh-card">
                            <Gift className="rh-card-icon purple" />
                            <h3>Bonificações Ativas</h3>
                            <p className="rh-card-value">156</p>
                            <span className="rh-card-status positive">+18 este mês</span>
                        </div>

                        <div className="rh-card">
                            <DollarSign className="rh-card-icon blue" />
                            <h3>Investimento em RH</h3>
                            <p className="rh-card-value">R$ 2.4M</p>
                            <span className="rh-card-status positive">+15% este mês</span>
                        </div>

                    </div>

                    {/* SEÇÃO INFERIOR */}
                    <div className="rh-bottom-grid">

                        {/* ATIVIDADES RECENTES */}
                        <div className="rh-box">
                            <h3>Atividades Recentes</h3>

                            <div className="rh-activity">
                                <Circle className="dot green" /> Ana Silva
                                <span className="activity-info">Novo Colaborador</span>
                                <span className="activity-time">Há 2 horas</span>
                            </div>

                            <div className="rh-activity">
                                <Circle className="dot blue" /> Carlos Santos
                                <span className="activity-info">Feedback Enviado</span>
                                <span className="activity-time">Há 3 horas</span>
                            </div>

                            <div className="rh-activity">
                                <Circle className="dot yellow" /> Maria Oliveira
                                <span className="activity-info">Bonificação</span>
                                <span className="activity-time">Há 5 horas</span>
                            </div>

                            <div className="rh-activity">
                                <Circle className="dot green" /> João Pedro
                                <span className="activity-info">Treinamento Concluído</span>
                                <span className="activity-time">Há 6 horas</span>
                            </div>
                        </div>

                        {/* TOP PERFORMERS */}
                        <div className="rh-box">
                            <h3>Top Performers do Mês</h3>

                            <div className="rh-performer">
                                <span className="rank gold">1</span> Maria Oliveira – Vendas
                                <span className="score">9.8</span>
                            </div>

                            <div className="rh-performer">
                                <span className="rank silver">2</span> Carlos Santos – Engenharia
                                <span className="score">9.5</span>
                            </div>

                            <div className="rh-performer">
                                <span className="rank bronze">3</span> Ana Silva – Marketing
                                <span className="score">9.3</span>
                            </div>

                            <div className="rh-performer">
                                <span className="rank blue">4</span> Pedro Costa – TI
                                <span className="score">9.1</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}