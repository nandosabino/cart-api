# 🛒 Cart API (Backend)

API RESTful que fornece suporte ao projeto **Carrinho de Compras**.  
Construída com **Node.js + Express**, esta API gerencia os itens do carrinho, permitindo adicionar, remover e atualizar produtos.

---

## Tecnologias 🛠

- Node.js  
- Express  
- Vercel (deploy)  

---

## ⚙️ Endpoints

- `GET /cart` → Lista todos os itens do carrinho  
- `POST /cart` → Adiciona um item ao carrinho  
- `PUT /cart/:id` → Atualiza quantidade de um item  
- `DELETE /cart/:id` → Remove item do carrinho  

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/nandosabino/cart-api.git

cd cart-api

# Instale dependências
npm install

# Inicie o servidor
npm start
