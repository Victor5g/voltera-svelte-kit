# SvelteKit Agify

Este é um projeto que utiliza a API gratuita [agify.io](https://agify.io) para estimar a idade com base em um nome.

## 🧠 Funcionalidade

- O usuário digita um nome.
- Após uma pequena pausa (debounce), o sistema consulta a API e exibe a idade estimada.
- A URL é atualizada com `?name=SeuNome`, permitindo compartilhamento direto.

## 🛠 Tecnologias

- [SvelteKit](https://kit.svelte.dev/)
- HTML5 + CSS puro
- Nenhuma dependência externa

## 🚀 Como rodar

```bash
npm install
npm run dev
