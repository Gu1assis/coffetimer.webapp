# ☕ CoffeeTimer

**Pare de queimar seu café!**

Você sabe aquele momento em que você faz um café delicioso, mas esquece dele esfriando? ☕ O CoffeeTimer avisa você exatamente quando seu café está na temperatura perfeita.

## Como funciona

1. **Clique em "Iniciar"** e o cronômetro começa
2. **Receba mensagens em tempo real** sobre o estado do seu café:
   - 🔥 **Ai! Está fervendo!** (0-1:30) - Aguarde um pouco
   - 😁 **Na temperatura Ideal!** (1:31-3:00) - É AGORA!
   - 😥 **Vai esfriar!** (3:01-5:00) - Aproveite logo
   - 🥶 **Frio!!!** (5:01-7:00) - Já era, esqueceu...
   - 😭 **Estragou!** (7:00+) - Tá hora de fazer outro

Simples, prático e nunca mais perca seu café!

---

## 🚀 Sobre o Deploy

Este app foi criado principalmente para testar e demonstrar **deploy automatizados**. Utilizamos uma stack moderna de DevOps:

- **GitHub Actions** - CI/CD automatizado
- **Docker Compose** - Orquestração de containers
- **Nginx** - Proxy reverso e certificados HTTPS
- **Duck DNS** - DNS dinâmico para acesso remoto
- **Oracle Cloud** - VPS hospedagem

O serviço está ao vivo e disponível em: **https://coffetimer.duckdns.org/**

---

Criado com ❤️ por [@Gu1Assis](https://github.com/Gu1assis)
