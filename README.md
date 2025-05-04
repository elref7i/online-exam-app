# 📝 Online Exam App

A full-featured online exam platform built using **Next.js 14 App Router** with modern web development tools and best practices like **clean architecture**, **server actions**, and **type-safe validation**.

## 🔧 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **React Query** – for server state management
- **React Hook Form + Zod** – for type-safe form validation
- **NextAuth.js** – for secure authentication
- **next-intl** – for internationalization (i18n)
- **Tailwind CSS + ShadCN UI** – for responsive, accessible UI
- **React Icons** – for consistent iconography
- **Server Actions & Route Handlers** – for server-side operations only (no client mutations)
- **Clean Code & Clean Architecture** – with clear folder structure and separation of concerns

## 🚀 Features

- 🔐 Authentication using **NextAuth**
- 🌍 Multilingual support using **next-intl**
- 📄 Exam creation and participation
- 📊 Result tracking
- 🎯 Role-based access control
- ⚙️ Form handling with validation (Zod + RHF)
- ☁️ Fetching via **server actions and route handlers only**

## 📁 Folder Structure Highlights

- `app/` — App Router with layouts, pages, and routes
- `lib/` — Shared utilities and helper functions
- `components/` — Reusable UI components (with ShadCN)
- `actions/` — Server actions for mutation logic
- `schemas/` — Zod schemas for validation
- `hooks/` — Custom hooks
- `services/` — Abstraction layer for data fetching (React Query)
- `auth/` — NextAuth configuration

## 🎓 Training & Learning Outcomes

This project was developed as part of my **advanced frontend training**, focusing on:

- Mastery of **Next.js App Router** and latest features (server components, actions)
- Applying **clean architecture** in a scalable web app
- Writing **type-safe** code with **TypeScript**, **Zod**, and **React Hook Form**
- Structuring secure and performant **API communication**
- Using **React Query** for optimized state fetching and caching
- Building a modern, accessible UI with **Tailwind CSS** and **ShadCN**

## 🛠️ Getting Started

```bash
git clone https://github.com/elref7i/online-exam-app.git
cd online-exam-app
npm install
npm run dev
