"use client";

import { useState } from 'react';
import { Send, TrendingUp } from 'lucide-react'; 
import Swal from 'sweetalert2';
import styles from './page.module.css';

const API_CRIAR = 'http://localhost:3000/api/sugestoes/criar';

export default function FormularioNovaSugestao({ aoSucesso }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [enviando, setEnviando] = useState(false);

  const getToken = () => {
    if (typeof window !== 'undefined') {
       return localStorage.getItem('token') || localStorage.getItem('access_token');
    }
    return null;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);

    try {
        const token = getToken();
        if (!token) {
            Swal.fire('Erro', 'Você precisa estar logado.', 'error');
            setEnviando(false);
            return;
        }

        const res = await fetch(API_CRIAR, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ titulo, descricao })
        });

        if (res.ok) {
            Swal.fire({
                title: 'Sugestão Enviada!',
                text: 'Obrigado por contribuir com sua ideia.',
                icon: 'success',
                confirmButtonColor: '#8b5cf6',
                confirmButtonText: 'Ótimo!'
            })
            setTitulo('');
            setDescricao('');
        } else {
            const erroData = await res.json();
            Swal.fire('Ops!', erroData.msg || 'Erro ao enviar sugestão.', 'error');
        }

    } catch (error) {
        console.error(error);
        Swal.fire('Erro', 'Falha na conexão com o servidor.', 'error');
    } finally {
        setEnviando(false);
    }
  }

  return (
    <div className={styles.container}>
      
      {/* Cabeçalho */}
      <div>
        <h1 className={styles.title}>Nova Sugestão</h1>
        <p className={styles.subtitle}>
            Tem uma ideia para melhorar nossa empresa? Preencha o formulário abaixo.
        </p>
      </div>

      {/* Card do Formulário */}
      <div className={styles.cardForm}>
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Título da Ideia</label>
                <input 
                    type="text" 
                    className={styles.input} 
                    placeholder="Ex: Melhoria no sistema de entregas"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Descrição Detalhada</label>
                <textarea 
                    className={styles.textarea} 
                    placeholder="Descreva o problema atual e como sua ideia pode resolver..."
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
            </div>

            <div className={styles.footerActions}>
                <button type="submit" className={styles.btnSubmit} disabled={enviando}>
                    {enviando ? 'Enviando...' : (
                        <> <Send size={20} /> Enviar Sugestão </>
                    )}
                </button>
            </div>
        </form>
      </div>

      {/* --- NOVA SEÇÃO: Continue Evoluindo --- */}
      <div className={styles.evolutionContainer}>
        
        {/* Banner Roxo */}
        <div className={styles.bannerPurple}>
            <div className={styles.bannerIcon}>
                <TrendingUp size={32} color="#fff" />
            </div>
            <div>
                <div className={styles.bannerTitle}>Continue Evoluindo!</div>
                <p className={styles.bannerText}>
                    As sugestões são a chave para a inovação. Use este espaço para propor melhorias e transformar o ambiente de trabalho.
                </p>
            </div>
        </div>

        {/* Lista de Dicas */}
        <h3 className={styles.tipsTitle}>Dicas para criar ótimas sugestões</h3>
        
        <div className={styles.tipsList}>
            {/* Dica 1 */}
            <div className={styles.tipItem}>
                <div className={styles.tipNumber}>1</div>
                <div className={styles.tipContent}>
                    <h4>Seja Claro e Objetivo</h4>
                    <p>Descreva sua ideia de forma simples. Evite termos técnicos desnecessários para que todos possam entender.</p>
                </div>
            </div>

            {/* Dica 2 */}
            <div className={styles.tipItem}>
                <div className={styles.tipNumber}>2</div>
                <div className={styles.tipContent}>
                    <h4>Foque na Solução</h4>
                    <p>Além de apontar um problema, tente sempre propor uma solução viável. Isso acelera a implementação.</p>
                </div>
            </div>

            {/* Dica 3 */}
            <div className={styles.tipItem}>
                <div className={styles.tipNumber}>3</div>
                <div className={styles.tipContent}>
                    <h4>Pense no Impacto Coletivo</h4>
                    <p>As melhores ideias são aquelas que beneficiam a equipe ou a empresa como um todo.</p>
                </div>
            </div>
        </div>

      </div>

    </div>
  );
}