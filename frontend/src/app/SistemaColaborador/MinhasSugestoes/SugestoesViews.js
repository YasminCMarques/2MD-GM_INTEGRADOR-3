import { Lightbulb, Award, Star, TrendingUp, Plus } from 'lucide-react';
import styles from './minhassugestoes.css';

export default function SugestoesView({ usuario, sugestoes }) {
  // Cálculos visuais (seguros para rodar em qualquer lugar)
  const totalSugestoes = sugestoes.length;
  const aprovadas = sugestoes.filter(s => s.status === 'aprovada').length;
  const pontuacaoTotal = sugestoes.reduce((acc, curr) => acc + parseFloat(curr.pontos_gerados), 0);
  const mediaPontos = totalSugestoes > 0 ? (pontuacaoTotal / totalSugestoes).toFixed(1) : "0.0";

  return (
    <div className={styles.container}>
      
      {/* Cabeçalho */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Minhas Sugestões</h1>
          <p className={styles.subtitle}>Colaborador: {usuario?.nome || usuario?.email}</p>
        </div>
        <button className={styles.buttonNew}>
          <Plus size={20} />
          Nova Sugestão
        </button>
      </div>

      {/* Cards de Métricas */}
      <div className={styles.metricsGrid}>
        <div className={styles.card}>
          <div><p className={styles.cardLabel}>Total Enviado</p><h3 className={styles.cardValue}>{totalSugestoes}</h3></div>
          <div className={styles.iconWrapper}><Lightbulb color="#3b82f6" size={24} /></div>
        </div>

        <div className={styles.card}>
          <div><p className={styles.cardLabel}>Aprovadas</p><h3 className={styles.cardValue}>{aprovadas}</h3></div>
          <div className={styles.iconWrapper}><Award color="#a855f7" size={24} /></div>
        </div>

        <div className={styles.card}>
          <div><p className={styles.cardLabel}>Pontuação</p><h3 className={styles.cardValue}>{pontuacaoTotal}</h3></div>
          <div className={styles.iconWrapper}><Star color="#f97316" size={24} /></div>
        </div>

        <div className={styles.card}>
          <div><p className={styles.cardLabel}>Média</p><h3 className={styles.cardValue}>{mediaPontos}</h3></div>
          <div className={styles.iconWrapper}><TrendingUp color="#22c55e" size={24} /></div>
        </div>
      </div>

      {/* Tabela de Histórico */}
      <div className={styles.historyContainer}>
        <div className={styles.historyHeader}>
          <h2 className={styles.historyTitle}>Histórico</h2>
        </div>

        <div>
          {sugestoes.map((item) => (
            <div key={item.id} className={styles.suggestionItem}>
              <div className={styles.suggestionContent}>
                
                <div className={styles.suggestionLeft}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.suggestionTitle}>{item.titulo}</h3>
                    {/* Classes dinâmicas baseadas no CSS Module */}
                    <span className={`${styles.badge} ${styles['status_' + item.status]}`}>
                      {item.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className={styles.description}>{item.descricao}</p>
                  <p className={styles.date}>📅 {new Date(item.data_criacao).toLocaleDateString('pt-BR')}</p>
                </div>

                {parseFloat(item.pontos_gerados) > 0 && (
                  <div className={styles.pointsCircle}>
                    <span className={styles.pointsValue}>{parseFloat(item.pontos_gerados)}</span>
                    <span className={styles.pointsLabel}>pontos</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {sugestoes.length === 0 && (
            <div className={styles.emptyState}>Nenhuma sugestão encontrada no banco de dados.</div>
          )}
        </div>
      </div>
    </div>
  );
}