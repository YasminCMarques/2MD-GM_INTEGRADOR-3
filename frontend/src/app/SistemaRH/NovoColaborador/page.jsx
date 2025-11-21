"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Camera, Save, X, User } from 'lucide-react';
import './novocolaborador.css';

export default function NovoColaboradorContent() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cargo: '',
    departamento: 'vendas',
    senha: '',
    tipo: 'comum'
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Recupera o token do LocalStorage
    let token = localStorage.getItem('token');

    // Verifica se o token existe
    if (!token) {
      alert("Sessão expirada ou token inválido. Faça login novamente.");
      return;
    }

    // Remove aspas extras caso o token tenha sido salvo com JSON.stringify
    token = token.replace(/"/g, '');
    
    setIsSaving(true);

    try {
      const payload = {
        nome: `${formData.nome} ${formData.sobrenome}`.trim(),
        email: formData.email,
        telefone: formData.telefone,
        cargo: formData.cargo,
        departamento: formData.departamento,
        senha: formData.senha,
        tipo: formData.tipo
      };

      console.log("Enviando payload:", payload);

      const response = await fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Envio do JWT no Header
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Sucesso: Exibe o SweetAlert
        await Swal.fire({
          title: "Sucesso!",
          text: "Colaborador salvo com sucesso!",
          icon: "success",
          confirmButtonText: "OK"
        });

        // Limpa o formulário
        setFormData({
          nome: '',
          sobrenome: '',
          email: '',
          telefone: '',
          cargo: '',
          departamento: 'vendas',
          senha: '',
          tipo: 'comum'
        });
      } else {
        // Tratamento de erro da API (Ex: 401, 400, 500)
        const errorData = await response.json().catch(() => ({}));
        console.error("Erro da API:", errorData);
        
        if (response.status === 401) {
            alert("Sessão inválida ou expirada. Por favor, faça login novamente.");
        } else {
            alert(errorData.message || "Erro ao salvar colaborador. Verifique os dados.");
        }
      }

    } catch (error) {
      console.error("Erro na requisição:", error);
      alert('Erro de conexão com o servidor.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="app-wrapper">

      <form className="nc-container" onSubmit={handleSubmit}>
        <div className="nc-header">
          <h2>Novo Cadastro</h2>
          <p>Preencha as informações abaixo para adicionar um novo membro à equipe.</p>
        </div>

        <div className="nc-photo-upload">
          <div className="photo-placeholder">
            <User size={32} strokeWidth={1.5} />
          </div>

          <div>
            <button type="button" className="btn-upload">
              <Camera size={16} /> Alterar foto
            </button>
            <div className="info-foto">
              JPG ou PNG. Máx 1MB.
            </div>
          </div>
        </div>

        <div className="nc-grid">
          {/* --- LINHA 1 --- */}
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Ex: João"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
              type="text"
              id="sobrenome"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
              placeholder="Ex: Silva"
              required
            />
          </div>

          {/* --- LINHA 2 --- */}
          <div className="form-group">
            <label htmlFor="email">Endereço de Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="joao@empresa.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
            />
          </div>

          {/* --- LINHA 3 --- */}
          <div className="form-group">
            <label htmlFor="cargo">Cargo</label>
            <input
              type="text"
              id="cargo"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              placeholder="Ex: Desenvolvedor Senior"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="departamento">Departamento</label>
            <select
              id="departamento"
              name="departamento"
              value={formData.departamento}
              onChange={handleChange}
            >
              <option value="vendas">Vendas & Marketing</option>
              <option value="ti">Tecnologia (TI)</option>
              <option value="rh">Recursos Humanos</option>
              <option value="financeiro">Financeiro</option>
              <option value="operacoes">Operações</option>
            </select>
          </div>

          {/* --- LINHA 4 (NOVOS CAMPOS) --- */}
          <div className="form-group">
            <label htmlFor="senha">Senha de Acesso</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Nível de Acesso</label>
            <select
              id="tipo"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
            >
              <option value="comum">Usuário Comum</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

        </div>

        <div className="nc-actions">
          <button type="button" className="btn-cancel" onClick={() => window.history.back()}>
            <X size={16} /> Cancelar
          </button>

          <button type="submit" className="btn-save" disabled={isSaving}>
            <Save size={16} /> {isSaving ? 'Salvando...' : 'Salvar Cadastro'}
          </button>
        </div>
      </form>
    </div>
  );
}