'use client'; 

import { useState, useEffect } from 'react';
import { Lightbulb, Award, Star, TrendingUp, Plus } from 'lucide-react';
import styles from './page.module.css';


const API_URL = 'http://localhost:3000/api/sugestoes/minhas';

export default function MinhasSugestoesPage() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function carregarDados() {
      try {

        const getToken = () => {

          const chavesPossiveis = ['token', 'access_token', 'jwt', 'userToken', 'auth_token'];
          
          for (const chave of chavesPossiveis) {
            const val = localStorage.getItem(chave);
            if (val) {
              console.log(`Sucesso: Token encontrado no LocalStorage na chave: "${chave}"`);
              return val;
            }
          }


          if (typeof document !== 'undefined') {
            const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
            if (match) {
                console.log("Sucesso: Token encontrado nos Cookies");
                return match[2];
            }
          }
          
          return null;
        };


        console.group("🕵️ DEBUG DO TOKEN");
        console.log("Procurando token no LocalStorage...");
        if (typeof window !== 'undefined') {

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                console.log(` - Chave encontrada: "${key}" | Valor: ${localStorage.getItem(key)?.substring(0, 15)}...`);
            }
        }
        console.groupEnd();

        const token = getToken();

        if (!token) {

          setError('Token não encontrado. Abra o Console (F12) para ver os detalhes.');
          setLoading(false);
          return;
        }


        const res = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!res.ok) {
          if (res.status === 401 || res.status === 403) {
            throw new Error('Sessão expirada ou inválida.');
          }
          throw new Error(`Erro na API: ${res.status}`);
        }

        const json = await res.json();
        setDados(json);
      } catch (err) {
        console.error("Erro de conexão:", err);
        setError(err.message || 'Falha ao conectar com o servidor.');
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  if (loading) return <div className={styles.emptyState}>Carregando dados...</div>;
  if (error) return <div className={styles.errorState}>{error}</div>;
  if (!dados) return null;

  const { usuario, sugestoes } = dados;

  // --- CÁLCULOS ---
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
          <p className={styles.subtitle}>Colaborador: {usuario.nome || usuario.email}</p>
        </div>
        
      </div>

      {/* Cards de Métricas */}
      <div className={styles.metricsGrid}>
        <StatCard label="Total Enviado" value={totalSugestoes} icon={<Lightbulb color="#3b82f6" size={24} />} styles={styles} />
        <StatCard label="Aprovadas" value={aprovadas} icon={<Award color="#a855f7" size={24} />} styles={styles} />
        <StatCard label="Pontuação" value={pontuacaoTotal} icon={<Star color="#f97316" size={24} />} styles={styles} />
        <StatCard label="Média" value={mediaPontos} icon={<TrendingUp color="#22c55e" size={24} />} styles={styles} />
      </div>

      {/* Lista */}
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
            <div className={styles.emptyState}>Nenhuma sugestão encontrada.</div>
          )}
        </div>
      </div>
    </div>
  );
}

// Componente auxiliar Visual
function StatCard({ label, value, icon, styles }) {
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.cardLabel}>{label}</p>
        <h3 className={styles.cardValue}>{value}</h3>
      </div>
      <div className={styles.iconWrapper}>{icon}</div>
    </div>
  );
}