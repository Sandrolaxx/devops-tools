# 🐳 Aula 04: A Revolução do Docker e Containers

Bem-vindos ao mundo dos Containers! 
Nesta aula, resolvemos de uma vez por todas o maior pesadelo do desenvolvimento de software: a temida frase **"Mas na minha máquina funciona!"**. 

Quando um sistema roda no seu notebook, mas quebra no servidor do cliente, geralmente o culpado é a diferença de ambiente (versões diferentes do Node, PHP, bibliotecas ausentes ou conflitos de banco de dados). O Docker nasceu para empacotar não apenas o seu código, mas **o ambiente inteiro** onde ele precisa rodar.

---

## 🚢 O que é um Container?

Para entender o Docker, pense no transporte marítimo antes dos anos 1950. Colocar sacas de café, carros e pianos soltos no mesmo navio gerava quebras e uma lentidão absurda. A solução foi criar uma **Caixa de Aço Padrão**: o Container. A partir daí, não importa o que tem dentro; o navio, o guindaste e o caminhão só precisam saber como carregar aquela caixa.

Na tecnologia, o Docker faz exatamente isso. Ele coloca o seu código, a linguagem e as bibliotecas dentro de uma "caixa de aço" virtual. O servidor não precisa mais ter o PHP ou o Node instalados, ele só precisa ter o Docker para rodar a caixa!

### 🏢 Containers vs. Máquinas Virtuais (VMs)

Se você já usou VirtualBox ou VMWare, deve estar se perguntando a diferença. A analogia perfeita é a **Moradia**:

* 🏠 **Máquina Virtual (A Casa):** Você constrói uma casa inteira no seu quintal só para receber uma visita. Ela tem fundação e encanamento próprios (um Sistema Operacional Windows/Linux inteiro só para ela). É pesada (Gigabytes) e lenta para ligar.
* 🏢 **Container (O Apartamento):** Você aluga um apartamento num prédio já existente. Ele compartilha a fundação e o encanamento do prédio (o *Kernel* do Sistema Operacional do seu PC), mas a porta é trancada e isolada. Fica pronto em milissegundos e é super leve (Megabytes).

| Característica | Máquina Virtual (VM) | Container (Docker) |
| :--- | :--- | :--- |
| **O que virtualiza?** | Virtualiza o **Hardware**. | Virtualiza o **Sistema Operacional**. |
| **Tamanho** | Gigante (Gigabytes). | Minúsculo (Megabytes). |
| **Inicialização**| Lenta (Minutos para dar boot). | Instantânea (Segundos). |

---

## 🏗️ A Trindade do Docker

O vocabulário do Docker se baseia em três pilares fundamentais:

1. 📦 **Imagem (A Receita):** É um arquivo estático e imutável. Contém o código e todas as dependências. Exemplo: *Uma imagem contendo o Ubuntu + NGINX*.
2. 🚀 **Container (O Bolo Assado):** É a Imagem em execução ("viva"). Podemos pegar 1 única Imagem e rodar 10 Containers a partir dela ao mesmo tempo.
3. ☁️ **Registry (O Supermercado):** É o local na nuvem onde as Imagens ficam armazenadas para download. O oficial e mais famoso é o **Docker Hub**.

---

## 💻 Cheat Sheet: Comandos Essenciais

Aqui estão os comandos de sobrevivência para usar no terminal do seu dia a dia:

```bash
# Roda um container a partir de uma imagem (baixa a imagem se necessário)
docker run <nome-da-imagem>

# Lista os containers que estão rodando NESTE EXATO MOMENTO
docker ps

# Lista TODOS os containers (inclusive os parados/mortos)
docker ps -a

# Para/pausa um container em execução (use o ID ou o Nome)
docker stop <id-do-container>

# Remove/Deleta um container definitivamente (ele precisa estar parado)
docker rm <id-do-container>

# Lista as Imagens (receitas) que já foram baixadas no seu computador
docker images
```

---

## 🛠️ Prática: Rodando o nosso primeiro Servidor NGINX

Se você não tem o Docker instalado na sua máquina, não tem problema! Vamos usar um terminal Linux gratuito na nuvem.

1. Acesse o **[Killercoda Ubuntu Playground](https://killercoda.com/playgrounds/scenario/ubuntu)**.
2. Aguarde o terminal carregar.
3. Vamos subir um servidor web completo em segundo plano (`-d`) e mapear a porta 8080 do nosso PC para a porta 80 do container (`-p`):
   
   ```bash
   docker run -d -p 8080:80 --name meu-site nginx
   ```

4. Digite `docker ps` para ver seu container rodando.
5. No menu superior do Killercoda, clique em **Traffic / Ports**, digite a porta `8080` e clique em acessar. 
6. 🎉 **Sucesso!** Você verá a tela de boas-vindas do NGINX rodando perfeitamente.

> **Regra de Ouro do DevOps:** Containers são descartáveis. Terminou de usar? Pare e remova:
> `docker stop meu-site` e depois `docker rm meu-site`.

---

*Professor: Sandro Ramos | Disciplina: DevOps Tools*