"use client";

import {
  Users,
  GraduationCap,
  ClipboardCheck,
  BarChart3,
  Gift,
  DollarSign,
  Circle,
  TrendingUp,
  FileText,
} from "lucide-react";
import "./dashboard.css";

export default function DashboardContent() {
  return (
    <div className="rh-dashboard-container">

      <h1 className="rh-title">Dashboard</h1>
      <p className="rh-subtitle">Visão geral do sistema de gestão de colaboradores</p>

      <div className="rh-cards-grid">
        <div className="rh-card">
          <Users className="rh-card-icon blue" />
          <h3>Total de Colaboradores</h3>
          <p className="rh-card-value">847</p>
          <span className="rh-card-status positive">+ 10 este mês</span>
        </div>

        <div className="rh-card">
          <GraduationCap className="rh-card-icon purple" />
          <h3>Aprendizes/Estagiários</h3>
          <p className="rh-card-value">50</p>
          <span className="rh-card-status positive">+ 8 este mês</span>
        </div>

        <div className="rh-card">
          <ClipboardCheck className="rh-card-icon yellow" />
          <h3>Avaliações Pendentes</h3>
          <p className="rh-card-value">23</p>
          <span className="rh-card-status negative">- 10 este mês</span>
        </div>

        <div className="rh-card">
          <BarChart3 className="rh-card-icon green" />
          <h3>Performance Média</h3>
          <p className="rh-card-value">8.4</p>
          <span className="rh-card-status positive">+ 0.3 este mês</span>
        </div>

        
      </div>

      
      <div className="rh-section-clean">
        <h3 className="titulo">Gráficos de Performance</h3>
        
        
        <div className="rh-vertical-stack">
          
          <div className="rh-card-wide">
            <TrendingUp className="rh-card-icon green" />
            <h3>Crescimento de Colaboradores</h3>
            <p className="rh-card-value">+20%</p>
            <span className="rh-card-status positive">Este mês</span>
          </div>

          <div className="rh-card-wide">
            <BarChart3 className="rh-card-icon blue" />
            <h3>Performance em Projetos</h3>
            <p className="rh-card-value">80%</p>
            <span className="rh-card-status positive">Excelente</span>
          </div>

        </div>
      </div>

      <div className="rh-bottom-grid">
        
        
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

        <div className="rh-box">
          <h3>Top Performers do Mês</h3>
          <div className="rh-performer">
            <span className="rank gold">1</span> Maria Oliveira - Vendas
            <span className="score">9.8</span>
          </div>
          <div className="rh-performer">
            <span className="rank silver">2</span> Carlos Santos - Engenharia
            <span className="score">9.5</span>
          </div>
          <div className="rh-performer">
            <span className="rank bronze">3</span> Ana Silva - Marketing
            <span className="score">9.3</span>
          </div>
          <div className="rh-performer">
            <span className="rank blue">4</span> Pedro Costa - TI
            <span className="score">9.1</span>
          </div>
        </div>

      </div>

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
