# 🛰️ Telecom Mission Control – Frontend System

A high-assurance, accessible, and scalable frontend platform for enterprise-level telecom management.  
This system enables **device + user onboarding**, **policy enforcement**, and **real-time dashboards**, used across **web and mobile**, with full offline mode support.

---

## 🔧 What’s Implemented

This repository covers **architecture design**, **UI development**, **data models**, and **API contracts** for a Telecom SaaS platform.

### ✅ Code Features (Frontend)

- **🔐 Device + User Onboarding**

  - Validated form with dynamic fields
  - Disabled submit button until valid
  - Popup on success

- **📊 Dashboard**

  - Displays stats like total onboarded devices
  - Navigation with React Router
  - Modular UI components

- **⚙️ Policy Enforcement (Policy Reactor)**

  - Enforces action-level rules based on user role and app context
  - Defined in flow model and ER diagram
  - Mock logic in code (admin/role logic)

- **🏗️ Tower Registry Service**
  - Registers telecom towers and supported carriers
  - Used to determine compatibility during onboarding
  - Data flow and contract modeled

---

## 🖼️ UI Screenshots

### 🎯 Device + User Onboarding

![Onboarding Form](./assets/onboarding-form.png)

### 🧠 Policy Enforcement (UI logic in place)

![Policy Flow](./assets/policy-enforcement.png)

### 🗼 Tower Registry Overview

![Tower Flow](./assets/tower-registry.png)

### 📊 Dashboard

![Dashboard](./assets/dashboard.png)

> All screenshots are located in the `/assets/` folder.

---

---

## 📦 Tech Stack

- **React + Vite** (TypeScript)
- **React Router DOM**
- **Modular CSS (no Tailwind)**
- **Accessible & Responsive Design**

---

## 🛠️ Run It Locally

### 📥 Prerequisites

- Node.js v18+
- npm

### 🚀 Steps

```bash
cd intelligent-network-access/telecom-ui
npm install
npm run dev

App runs at: http://localhost:5173
```
