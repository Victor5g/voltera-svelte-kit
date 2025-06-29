<p align="center">
<img alt="Icon" width='100' src="https://github.com/user-attachments/assets/1d004673-3c7b-48c9-9e9f-b8c2df11ea63">
</p>

<h1 align="center">SvelteKit Agify</h1>

<p align="center">
  <img alt="Svelte" src="https://img.shields.io/static/v1?label=Svelte&message=5.0.0&color=FF3E00&labelColor=000000">
  <img alt="SvelteKit" src="https://img.shields.io/static/v1?label=SvelteKit&message=2.16.0&color=4A4A4A&labelColor=FF3E00">
  <img alt="TypeScript" src="https://img.shields.io/static/v1?label=TypeScript&message=5.8.3&color=3178C6&labelColor=000000">
  <img alt="Vite" src="https://img.shields.io/static/v1?label=Vite&message=6.2.6&color=646CFF&labelColor=000000">
</p>

## 🧾 Description

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
