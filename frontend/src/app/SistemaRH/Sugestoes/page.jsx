'use client';

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import styles from './sugestoes.module.css';

export default function SugestoesRecebidasPage() {
  const [sugestoes, setSugestoes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados do Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [pontos, setPontos] = useState(''); // Input da nota

  // 1. Buscar Sugestões Pendentes
  const fetchPendentes = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/sugestoes/pendentes');
      const result = await response.json();
      if (result.success) setSugestoes(result.data);
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendentes();
  }, []);

  // 2. Abrir o Modal
  const handleOpenModal = (item) => {
    setItemSelecionado(item);
    setPontos(''); // Limpa o campo de nota
    setModalOpen(true);
  };

  // 3. Enviar Avaliação (Aprovar ou Rejeitar)
 const handleAvaliar = async (status) => {
  if (!itemSelecionado) return;

  // Validação simples: se aprovar, precisa de nota
  if (status === 'aprovada' && !pontos) {
    Swal.fire({
      title: 'Pontuação Necessária',
      text: 'Por favor, atribua uma pontuação para aprovar esta sugestão.',
      icon: 'warning', // Ícone de aviso
      confirmButtonText: 'Entendi'
    });
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/api/sugestoes/${itemSelecionado.id}/avaliar`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: status, // 'aprovada' ou 'rejeitada'
        pontos: pontos // Nota (se for rejeitada, o back ignora isso)
      })
    });

    const result = await response.json();

    if (result.success) {
      if (status === 'aprovada') {
        // Exibir o SweetAlert de sucesso após a aprovação
        Swal.fire({
          title: "Sugestão aprovada com sucesso!",
          icon: "success",
          draggable: true
        });
      } else if (status === 'rejeitada') {
        // Exibir o SweetAlert de erro após a rejeição
        Swal.fire({
          icon: "error",
          text: "Sugestão Rejeitada!"
 
        });
      }

      setModalOpen(false);
      fetchPendentes(); // Recarrega a lista para sumir com o item avaliado
    } else {
      alert("Erro ao avaliar: " + result.message);
    }

  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro ao conectar com o servidor.");
  }
};



  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  if (loading) return <div className={styles.container}><p>Carregando...</p></div>;

  return (
  
    <div className="colab-container">
  
  <div className={styles.container}>
      <header className={styles.header}>
        <h1>Sugestões Recebidas</h1>
        <p>Gerencie as ideias enviadas pelos colaboradores</p>
      </header>

      <div className={styles.cardsList}>
        {sugestoes.length > 0 ? (
          sugestoes.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.titleArea}>
                  <h3>{item.titulo}</h3>
                  <span className={styles.badge}>Pendente</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>👤 <strong>{item.autor}</strong></div>
                  <div className={styles.metaItem}>📅 {formatDate(item.data_criacao)}</div>
                  <div className={styles.metaItem}>🏢 {item.departamento}</div>
                </div>
                <div className={styles.descriptionBox}>" {item.descricao} "</div>
              </div>

              <div className={styles.cardFooter}>
                {/* Botão que abre o modal */}
                <button 
                  className={styles.actionButton} 
                  onClick={() => handleOpenModal(item)}
                >
                  ⚙️ Avaliar Sugestão
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>🎉 Nenhuma sugestão pendente! Tudo limpo por aqui.</p>
          </div>
        )}
      </div>

      {/* --- O MODAL --- */}
      {modalOpen && itemSelecionado && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Avaliar Sugestão</h2>
              <p style={{color: '#64748b', fontSize: '0.9rem'}}>
                {itemSelecionado.titulo} (Autor: {itemSelecionado.autor})
              </p>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.inputGroup}>
                <label>Atribuir Pontuação (0 a 10):</label>
                <input 
                  type="number" 
                  className={styles.scoreInput}
                  placeholder="Ex: 9.5"
                  value={pontos}
                  onChange={(e) => setPontos(e.target.value)}
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>
            </div>

            <div className={styles.modalActions}>
              <button 
                className={styles.btnCancel} 
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>
              
              <button 
                className={styles.btnReject} 
                onClick={() => handleAvaliar('rejeitada')}
              >
                Rejeitar X
              </button>

              <button 
                className={styles.btnApprove} 
                onClick={() => handleAvaliar('aprovada')}
              >
                Aprovar & Pontuar ✅
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
    </div>
  );
}