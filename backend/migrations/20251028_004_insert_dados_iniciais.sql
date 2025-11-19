-- Migration: Inserir dados iniciais
-- Data: 2025-01-15
-- Descrição: Dados iniciais para teste do sistema

USE produtos_api;

-- Inserir usuários iniciais (senha: 123456)
-- Hash gerado com bcrypt para a senha "123456" (validado)
INSERT INTO usuarios (nome, email, senha, tipo) VALUES
('Administrador', 'admin@produtos.com', '$2a$10$BLAcJu1irAzg06WbtoLoPe0RA.hkfZ0oJ25KYARPkHWRweJuWBALy', 'admin'),
('João Silva', 'joao@email.com', '$2a$10$BLAcJu1irAzg06WbtoLoPe0RA.hkfZ0oJ25KYARPkHWRweJuWBALy', 'comum'),
('Maria Souza', 'maria@email.com', '$2a$10$BLAcJu1irAzg06WbtoLoPe0RA.hkfZ0oJ25KYARPkHWRweJuWBALy', 'comum');

-- Inserir produtos iniciais
INSERT INTO produtos (nome, descricao, preco, categoria, imagem) VALUES
('Smartphone Galaxy', 'Celular Samsung Galaxy com 128GB', 1299.99, 'Eletrônicos', 'smartphone.jpg'),
('Notebook Dell', 'Notebook Dell Inspiron 15 polegadas', 2499.99, 'Eletrônicos', 'notebook.jpg'),
('Camiseta Polo', 'Camiseta polo masculina azul', 89.90, 'Roupas', 'camiseta.jpg'),
('Livro JavaScript', 'Livro sobre programação JavaScript', 79.90, 'Livros', 'livro.jpg');

INSERT INTO usuarios (nome, email, senha, tipo)
VALUES
('João Mendes', 'joao.mendes@email.com', '$2b$10$7gH1H1E2pXH8V5uUyYdQUu5gV4XqjOEUwWkhzfsWnSnGJzgg6NDv2', 'comum'),

('Ana Costa', 'ana.costa@email.com', '$2b$10$7MMvwZlJ7tYduZzqW9SCNecS8K2nMExnOB0GMPqk4B5oIUx0Qn0Q2', 'comum'),

('Carlos Henrique', 'carlos.henrique@email.com', '$2b$10$9Q8eC6TGvD2cI8xN/yQreOQ6hpT19JcObM.1vQZvsQ6I3RTrLt5LS', 'comum'),

('Patrícia Lima', 'patricia.lima@email.com', '$2b$10$9t5o2xDk0qhMCSlTvGp1HunUOtfHghTh3gIMDrrOJV07mnzYfK7Ku', 'comum'),

('Fernando Alves', 'fernando.alves@email.com', '$2b$10$FyrDyiNRGE6M8ZAYPqCD9eG2oG48t0rQ7T4FoTQ8R2jCgaZPj8sK2', 'admin'),

('Beatriz Rocha', 'beatriz.rocha@email.com', '$2b$10$GJoxN6JhA/VXqQWxaK2qIOLWRDpt8s/7baFT0otDLH5bXJzHjKg6C', 'comum');

