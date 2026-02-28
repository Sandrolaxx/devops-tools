# 🐙 Git e GitHub: A Fonte da Verdade

Neste módulo, aprendemos a base absoluta de qualquer pipeline DevOps: o controle de versão. O Git atua como nossa "máquina do tempo" para o código, garantindo que nunca percamos o histórico de evolução do nosso software.

## 🧠 Conceitos Chave

> **A Regra de Ouro:** O Git é a sua câmera fotográfica (tira a foto da versão atual). O GitHub é o seu Instagram (onde você publica, faz backup e compartilha o trabalho com o time).

Entenda o fluxo dos arquivos na sua máquina:
1. **Working Directory:** Onde você edita o código (arquivos em vermelho no status).
2. **Staging Area:** A área de preparação. Você diz ao Git: *"Prepare isso para a próxima versão"* (arquivos em verde).
3. **Repository (.git):** O baú seguro. Você bate o martelo e salva o histórico permanentemente.

## 💻 Cheat Sheet: Comandos Essenciais

Aqui estão os comandos que você usará todos os dias:

```bash
git init                  # Transforma a pasta atual em um repositório Git
git status                # Mostra o que foi modificado e o que está na Staging Area
git add .                 # Envia TODAS as alterações para a Staging Area
git commit -m "Mensagem"  # Tira a "foto" e salva a versão com uma mensagem descritiva
git log                   # Exibe o histórico de versões (commits)
git push origin main      # Envia seus commits locais para a nuvem (GitHub)
git pull origin main      # Baixa as atualizações da nuvem para o seu computador
```

Arquivo para ser commitado no GitHub:
```yaml
version: '3.8'

services:
  servidor-web:
    image: nginx:alpine
    container_name: meu-site-nginx
    ports:
      - "8080:80" # A porta 8080 é a que acessamos no navegador localmente
    restart: always
```