'use client'; 
import React, { useEffect, useState } from 'react';
import styles from './ranking.module.css';

export default function RankingDashboard() {
  // Estado inicial
  const [rankingData, setRankingData] = useState({ 
    ranking: [], 
    recentes: [], // Nova lista vindo do banco
    stats: {} 
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Certifique-se que a porta é a mesma do seu console (3000 ou a que estiver rodando o back)
        const response = await fetch('http://localhost:3000/api/ranking');
        const result = await response.json();

        if (result.success) {
          setRankingData(result.data);
        }
      } catch (error) {
        console.error("Erro na API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className={styles.container}><p>Carregando dados...</p></div>;

  const { ranking, recentes, stats } = rankingData;

  // --- LÓGICA DO PÓDIO (Ordenação Visual: Prata - Ouro - Bronze) ---
  const goldUser = ranking[0] || null;
  const silverUser = ranking[1] || null;
  const bronzeUser = ranking[2] || null;

  const podiumDisplay = [
    { ...silverUser, position: 2, colorClass: styles.rank2, icon: '🥈' },
    { ...goldUser, position: 1, colorClass: styles.rank1, icon: '🏆' },
    { ...bronzeUser, position: 3, colorClass: styles.rank3, icon: '🥉' }
  ].filter(user => user.id); 

  // Formatações
  const valorBonificacao = typeof stats.bonificacoes === 'number' 
    ? stats.bonificacoes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
    : 'R$ 0';

  const getInitials = (name) => name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : '??';

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className='titulo'>Ranking & Bonificação</h1>
        <p>Sistema de reconhecimento baseado em sugestões aprovadas</p>
      </header>

      {/* Estatísticas */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <h3>Bonificações Totais</h3>
            <div className={styles.statValue}>{valorBonificacao}</div>
          </div>
          <div className={styles.iconBox} style={{color: '#166534', background: '#dcfce7'}}>💲</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <h3>Performance Média</h3>
            <div className={styles.statValue}>{stats.media || 0}</div>
          </div>
          <div className={styles.iconBox} style={{color: '#854d0e', background: '#fef9c3'}}>⭐</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <h3>Sugestões Aprovadas</h3>
            <div className={styles.statValue}>{stats.conquistas || 0}</div>
          </div>
          <div className={styles.iconBox} style={{color: '#6b21a8', background: '#f3e8ff'}}>🎖️</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <h3>Colaboradores</h3>
            <div className={styles.statValue}>{stats.colaboradores || 0}</div>
          </div>
          <div className={styles.iconBox} style={{color: '#1e40af', background: '#dbeafe'}}>👥</div>
        </div>
      </div>

      <div className={styles.mainContent}>
        
        {/* PÓDIO - Baseado na soma dos pontos da tabela sugestoes */}
        <div className={styles.podiumContainer}>
          <h2 className={styles.podiumTitle}>Top 3 do Mês</h2>
          <div className={styles.podiumStage}>
            {podiumDisplay.map((user) => (
              <div key={user.id} className={`${styles.podiumColumn} ${user.colorClass}`}>
                <div className={styles.avatar}>{getInitials(user.nome)}</div>
                <div className={styles.userName}>{user.nome?.split(' ')[0]}</div>
                <div className={styles.userDept}>{user.departamento}</div>
                <div className={styles.podiumCard}>
                  <div className={styles.trophyIcon}>{user.icon}</div>
                  <div className={styles.scoreBox}>
                    <span className={styles.scoreValue}>{Number(user.total_score || 0).toFixed(1)}</span>
                    <span className={styles.scoreLabel}>Pontos</span>
                  </div>
                </div>
              </div>
            ))}
            {podiumDisplay.length === 0 && <p style={{color: '#999'}}>Sem dados suficientes.</p>}
          </div>
        </div>

        {/* LISTA LATERAL - Puxando títulos e descrições reais da tabela */}
        <div className={styles.achievementsList}>
          <h3>Últimas Sugestões Aprovadas</h3>
          
          {recentes && recentes.length > 0 ? (
            recentes.map((item, index) => (
              <div key={index} className={styles.achievementItem}>
                <div className={styles.achievementIcon}>💡</div>
                <div className={styles.achievementText}>
                  <h4>{item.titulo}</h4>
                  <p>{item.descricao}</p>
                  <small style={{color: '#64748b', fontSize: '0.75rem'}}>
                     Autor: {item.autor} • +{item.pontos_gerados} pts
                  </small>
                </div>
              </div>
            ))
          ) : (
            <p style={{padding: '1rem', color: '#999'}}>Nenhuma sugestão recente.</p>
          )}
        </div>

      </div>
    </div>
  );
}