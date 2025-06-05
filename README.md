# 🛰️ Intelligent Network Access – Telecom SaaS Platform

This project is a high-assurance, scalable, and accessible Telecom Mission Control platform that allows enterprises to securely manage connected carrier devices via a responsive web and mobile UI.

It includes complete architecture planning, data models, API specifications, and a functional frontend prototype built in React.

---

## 📁 Project Structure

<pre> Intelligent-Network-Access/ ├── telecom-ui/ ← React-based frontend UI (Vite + TypeScript) │ ├── src/ │ │ ├── assets/ ← UI screenshots │ │ └── ... │ └── README.md ← UI-specific setup & explanation │ ├── telecom-architecture/ ← Architecture, diagrams, API contracts │ ├── architecture/ ← High-level architecture overview + flow docs │ ├── models/ ← Entity Relationship Diagrams, flowcharts │ ├── api-contracts/ ← Detailed API contracts (OpenAPI-style) │ └── README.md ← System architecture documentation │ └── README.md ← Top-level overview (this file) </pre>

## 🧩 What's Included

### 📐 `telecom-architecture/`

- **Architecture Overview**  
  Layered frontend system design for scalable, a11y-compliant deployment.
- **Data Flow Models**  
  Detailed onboarding, policy enforcement, and tower registry workflows.
- **Entity Relationship Diagrams**  
  Visual relationships among users, devices, policies, and towers.
- **API Contracts**  
  RESTful endpoint specifications for:
  - Device Service
  - Policy Reactor
  - Tower Registry
  - Dashboard

### 🎨 `telecom-ui/`

A fully functional React prototype with:

- Device + user onboarding form
- Policy-aware upload simulation
- Dashboard with real-time summaries
- Form validation and component-level routing
- Responsive layout using plain CSS
- React Router v6 and context-based state
- WCAG accessibility compliance (keyboard, alt text, label-for)

📸 Screenshots located in: `telecom-ui/src/assets/`

---

## 🚀 Getting Started with the UI

### Prerequisites

- Node.js v18+
- npm

### Steps to Run

```bash
cd intelligent-network-access/telecom-ui
npm install
npm run dev

Open in browser: http://localhost:5173

👤 Author
Jinal Kalpesh Shah
Senior Software Engineer


```
