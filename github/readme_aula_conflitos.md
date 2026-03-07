# 🔀 Git Avançado: Branches e Resolução de Conflitos

Neste módulo, subimos de nível! Deixamos de usar o Git apenas como um "pendrive glorificado" para salvar arquivos e passamos a utilizá-lo como verdadeiros Engenheiros de Software trabalhando em equipe. 

## 🧠 Conceitos Chave

> **A Analogia do Multiverso:** Uma *Branch* (ramificação) é como um universo paralelo. Você cria uma cópia exata do código principal (a branch `main`), faz toda a sua bagunça, testa novas ideias e, se tudo der certo, você funde (*Merge*) esse universo de volta à linha do tempo oficial. Se der errado, você simplesmente apaga a branch e a `main` continua intacta.

* **Trunk-Based Development:** É a estratégia de branching queridinha do DevOps. Em vez de branches que duram meses, os desenvolvedores enviam pequenas alterações para a `main` (o tronco) todos os dias.
* **Pull Request (PR):** É um pedido formal (no GitHub/GitLab) dizendo: *"Equipe, terminei o código da minha branch. Alguém pode revisar e aprovar a junção (merge) com a main?"*

## 💻 Cheat Sheet: Comandos de Branching

Aqui estão os comandos essenciais para navegar entre os universos do seu código:

```bash
git branch                      # Lista todas as branches locais (a que tem um * é a atual)
git checkout -b minha-branch    # Cria uma nova branch e já "viaja" para ela
git switch -c minha-branch      # (Alternativa moderna ao comando acima)
git checkout main               # Volta para a branch principal
git merge minha-branch          # Estando na main, puxa as alterações da "minha-branch" para ela
git branch -d minha-branch      # Deleta a branch após o uso

```

## ⚔️ Sobrevivendo aos Conflitos de Merge

**Regra de Ouro:** Um conflito de merge **não é um erro**! É o Git sendo cuidadoso.
Ele acontece quando duas pessoas alteram a **mesma linha do mesmo arquivo**. O Git pausa tudo e pede para um humano decidir qual versão está correta.

Quando isso acontece, o Git injeta esses marcadores no seu código:

```yaml
<<<<<<< HEAD (Sua versão local)
      - "9000:80" 
=======
      - "8081:80" 
>>>>>>> 1234abcd (A versão que veio do colega/nuvem)

```

**Como resolver?**

1. Abra o arquivo em conflito no seu editor (o VS Code é excelente para isso, pois ele colore as linhas e oferece botões rápidos).
2. Escolha qual versão deve permanecer (ou reescreva a linha combinando as duas).
3. Apague as marcações do Git (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Salve o arquivo e faça um novo commit para selar a paz: `git commit -m "Resolve conflito de merge"`.

## 🏗️ Nossa Prática: O Caos Programado

Na nossa aula, simulamos um cenário real de DevOps alterando a porta do nosso servidor web (o arquivo `docker-compose.yml`) localmente e no GitHub ao mesmo tempo.

Se você precisar simular esse conflito novamente para treinar:

1. Altere a porta do arquivo `docker-compose.yml` no seu computador e faça um `commit` local (não faça push).
2. Vá ao site do GitHub, edite o mesmo arquivo, coloque uma porta diferente e faça o commit por lá.
3. Tente fazer `git push` no seu terminal. O Git vai negar.
4. Faça `git pull`. O terminal ficará vermelho e o conflito acontecerá!
5. Abra o VS Code, aceite uma das alterações, salve, faça um novo `add/commit` e, finalmente, o seu `git push`.