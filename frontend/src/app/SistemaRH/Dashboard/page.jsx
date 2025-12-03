"use client";

import { useEffect, useState } from "react";
import {
  Users,
  GraduationCap,
  ClipboardCheck,
  BarChart3,
  Circle,
  TrendingUp,
  FileText,
} from "lucide-react";
import "./dashboard.css";

export default function DashboardContent() {
  // Estado inicial com valores zerados
  const [data, setData] = useState({
    totalColaboradores: 0,
    totalEstagiarios: 0,
    avaliacoesPendentes: 0,
    performanceMedia: 0,
    topPerformers: [],
    atividadesRecentes: []
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        // IMPORTANTE: Certifique-se que a URL bate com seu backend
        const response = await fetch('http://localhost:3000/api/dashboard');
        
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error("Erro ao buscar dados");
        }
      } catch (error) {
        console.error("Erro de conexão:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  if (loading) {
    return <div className="rh-dashboard-container"><p>Carregando dados...</p></div>;
  }

  return (
    <div className="rh-dashboard-container">

      <h1 className="rh-title">Dashboard</h1>
      <p className="rh-subtitle">Visão geral do sistema de gestão de colaboradores</p>

      {/* CARDS SUPERIORES - DADOS REAIS */}
      <div className="rh-cards-grid">
        <div className="rh-card">
          <Users className="rh-card-icon blue" />
          <h3>Total de Colaboradores</h3>
          <p className="rh-card-value">{data.totalColaboradores}</p>
          <span className="rh-card-status positive">Ativos no sistema</span>
        </div>

        <div className="rh-card">
          <GraduationCap className="rh-card-icon purple" />
          <h3>Aprendizes/Estagiários</h3>
          <p className="rh-card-value">{data.totalEstagiarios}</p>
          <span className="rh-card-status positive">Em treinamento</span>
        </div>

        <div className="rh-card">
          <ClipboardCheck className="rh-card-icon yellow" />
          <h3>Avaliações Pendentes</h3>
          <p className="rh-card-value">{data.avaliacoesPendentes}</p>
          <span className="rh-card-status negative">Aguardando aprovação</span>
        </div>

        <div className="rh-card">
          <BarChart3 className="rh-card-icon green" />
          <h3>Performance Média</h3>
          <p className="rh-card-value">{data.performanceMedia}</p>
          <span className="rh-card-status positive">Pontuação Geral</span>
        </div>
      </div>

      
      <div className="rh-section-clean">
        <h3 className="titulo1">Gráficos de Performance</h3>
        
        <div className="rh-vertical-stack">
          <div className="rh-card-wide">
            <TrendingUp className="rh-card-icon green" />
            <h3>Crescimento de Colaboradores</h3>
            <p className="rh-card-value">+20%</p>
            <span className="rh-card-status positive">Este mês (Simulado)</span>
          </div>

          <div className="rh-card-wide">
            <BarChart3 className="rh-card-icon blue" />
            <h3>Performance em Projetos</h3>
            <p className="rh-card-value">80%</p>
            <span className="rh-card-status positive">Excelente (Simulado)</span>
          </div>
        </div>
      </div>

      <div className="rh-bottom-grid">
        
        {/* ATIVIDADES RECENTES - VINDO DOS LOGS */}
        <div className="rh-box">
          <h3>Atividades Recentes (Logs)</h3>
          {data.atividadesRecentes && data.atividadesRecentes.length > 0 ? (
            data.atividadesRecentes.map((item, index) => (
              <div className="rh-activity" key={index}>
                <Circle className="dot blue" /> {item.nome}
                <span className="activity-info">{item.acao}</span>
                <span className="activity-time">{item.tempo}</span>
              </div>
            ))
          ) : (
            <p>Sem atividades recentes.</p>
          )}
        </div>

        {/* RANKING - VINDO DO BANCO */}
        <div className="rh-box">
          <h3>Top Performers do Mês</h3>
          {data.topPerformers && data.topPerformers.length > 0 ? (
            data.topPerformers.map((user, index) => (
              <div className="rh-performer" key={index}>
                <span className={`rank ${index === 0 ? 'gold' : index === 1 ? 'silver' : 'bronze'}`}>
                  {index + 1}
                </span> 
                {user.nome} - {user.departamento || 'Geral'}
                <span className="score">{user.score}</span>
              </div>
            ))
          ) : (
             <p>Nenhum ranking disponível.</p>
          )}
        </div>

      </div>

      {/* RODAPÉ ESTÁTICO (Mantido original) */}
      <div className="rh-box">
        <h3>Últimos Relatórios Gerados</h3>
        <div className="rh-activity">
          <FileText className="dot purple" /> Relatório de Desempenho - Outubro
          <span className="activity-time">Gerado Há 2 dias</span>
        </div>
        <div className="rh-activity">
          <FileText className="dot yellow" /> Relatório de Investimento - Setembro
          <span className="activity-time">Gerado Há 5 dias</span>
        </div>
      </div>

    </div>
  );
}