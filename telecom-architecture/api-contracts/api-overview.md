# 📘 API Overview – Telecom Mission Control

This document outlines the API design philosophy, conventions, and reusable standards for the Telecom Mission Control frontend architecture. These APIs enable consistent communication with backend services across user onboarding, policy enforcement, and tower management.

---

## 🌐 API Design Strategy

- **Architecture**: RESTful with resource-oriented URIs
- **Versioning**: Versioned via URL prefix (e.g., `/v1/users`)
- **Format**: All payloads use `application/json`
- **Statelessness**: Each API call should be independent and self-contained

---

## 🔐 Authentication & Authorization

- All endpoints require a **JWT Bearer Token** passed via the `Authorization` header.
- Role-based access is enforced at the gateway.

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsIn...
```

---

## ✅ Standard Success Response Format

```json
{
  "status": "success",
  "code": 200,
  "data": {
    "userId": "USR-39292",
    "deviceId": "DEV-92818"
  }
}
```

---

## ⚠️ Standard Error Response Format

```json
{
  "status": "error",
  "code": 403,
  "message": "Permission denied. Role not authorized."
}
```

---

## 📦 Pagination Format (for list endpoints)

- `GET /v1/users?page=2&limit=10`

```json
{
  "status": "success",
  "code": 200,
  "data": [ ... ],
  "meta": {
    "page": 2,
    "limit": 10,
    "total": 87
  }
}
```

---

## 🧩 Extensibility Conventions

- Use snake_case for parameters and camelCase for JSON keys.
- Add optional fields with `nullable: true` in contract definitions.
- Introduce new endpoints under `/v2/` when breaking changes are required.

---

## 📁 API Contracts Per Module

| Module            | Path                             |
|-------------------|----------------------------------|
| User Onboarding   | `api-contracts/user-onboarding/` |
| Policy Engine     | `api-contracts/policy/`          |
| Tower Registry    | `api-contracts/tower-registry/`  |