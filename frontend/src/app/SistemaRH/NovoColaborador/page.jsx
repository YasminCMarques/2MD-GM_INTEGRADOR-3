"use client";

import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import { Camera, Save, X, User } from 'lucide-react';
import './novocolaborador.css';

export default function NovoColaboradorContent() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cpf: '',
    departamento: 'vendas',
    senha: '',
    tipo: 'comum'
  });

  const [fotoArquivo, setFotoArquivo] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validação simples de tamanho (Ex: 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("A imagem é muito grande! Escolha uma menor que 2MB.");
        return;
      }
      setFotoArquivo(file);
      setFotoPreview(URL.createObjectURL(file));
    }
  };

  const handleTriggerFileSelect = () => {
    fileInputRef.current.click();
  };

  // --- FUNÇÃO AUXILIAR: Converte arquivo para Base64 ---
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let token = localStorage.getItem('token');
    if (!token) {
      alert("Sessão expirada. Faça login novamente.");
      return;
    }
    token = token.replace(/"/g, '');
    
    setIsSaving(true);

    try {
      // 1. Se tiver foto, converte para texto Base64
      let base64Foto = "";
      if (fotoArquivo) {
        base64Foto = await convertToBase64(fotoArquivo);
      }

      // 2. Monta o Payload JSON normal (VOLTAMOS PARA JSON)
      const payload = {
        nome: `${formData.nome} ${formData.sobrenome}`.trim(),
        email: formData.email,
        telefone: formData.telefone,
        cpf: formData.cpf,
        departamento: formData.departamento,
        senha: formData.senha,
        tipo: formData.tipo,
        foto: base64Foto // Enviamos a string da imagem aqui
      };

      console.log("Enviando JSON com foto...");

      const response = await fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Importante: Voltamos a usar JSON
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        await Swal.fire({
          title: "Sucesso!",
          text: "Colaborador salvo com sucesso!",
          icon: "success",
          confirmButtonText: "OK"
        });

        // Limpa tudo
        setFormData({
          nome: '', sobrenome: '', email: '', telefone: '',
          cpf: '', departamento: 'vendas', senha: '', tipo: 'comum'
        });
        setFotoArquivo(null);
        setFotoPreview(null);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Erro da API:", errorData);
        alert(errorData.message || "Erro ao salvar colaborador.");
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
          <h2 className='titulo2'>Novo Cadastro</h2>
          <p>Preencha as informações abaixo para adicionar um novo membro à equipe.</p>
        </div>

        {/* --- ÁREA DA FOTO (Mantém igual ao anterior) --- */}
        <div className="nc-photo-upload">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handlePhotoChange} 
            accept="image/png, image/jpeg, image/jpg"
            style={{ display: 'none' }} 
          />
          <div className="photo-placeholder" onClick={handleTriggerFileSelect}>
            {fotoPreview ? (
              <img src={fotoPreview} alt="Preview" className="photo-preview-img" />
            ) : (
              <User size={32} strokeWidth={1.5} />
            )}
          </div>
          <div>
            <button type="button" className="btn-upload" onClick={handleTriggerFileSelect}>
              <Camera size={16} /> Alterar foto
            </button>
            <div className="info-foto">
              JPG ou PNG. Máx 2MB.
            </div>
          </div>
        </div>

        {/* MANTENHA O RESTO DOS INPUTS (NOME, EMAIL, ETC) AQUI IGUAL AO SEU CÓDIGO ORIGINAL */}
        <div className="nc-grid">
           <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Ex: João" required />
          </div>
          <div className="form-group">
             <label htmlFor="sobrenome">Sobrenome</label>
             <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} placeholder="Ex: Silva" required />
          </div>
           <div className="form-group">
            <label htmlFor="email">Endereço de Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="joao@empresa.com" required />
          </div>
           <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input type="telefone" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(11) 99999-9999" />
          </div>
           <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="Ex: CPF" required />
          </div>
          <div className="form-group">
            <label htmlFor="departamento">Departamento</label>
            <select id="departamento" name="departamento" value={formData.departamento} onChange={handleChange}>
              <option value="vendas">Vendas & Marketing</option>
              <option value="ti">Tecnologia (TI)</option>
              <option value="rh">Recursos Humanos</option>
              <option value="financeiro">Financeiro</option>
              <option value="operacoes">Operações</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha de Acesso</label>
            <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} placeholder="••••••••" required minLength={6} />
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Nível de Acesso</label>
            <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange}>
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