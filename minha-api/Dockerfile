# 1. Pega uma imagem leve do Node
FROM node:18-alpine

# 2. Define a pasta onde vamos trabalhar lá dentro
WORKDIR /app

# 3. Copia APENAS o package.json primeiro (O Truque do Cache!)
COPY package.json ./

# 4. Instala as dependências (Express)
RUN npm install

# 5. Agora sim, copia o restante do código (server.js)
COPY . .

# 6. Avisa que vamos usar a porta 3000
EXPOSE 3000

# 7. O botão de ligar!
CMD ["node", "server.js"]