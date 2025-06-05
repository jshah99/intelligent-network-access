# 📊 Entity Relationship Overview – Telecom Mission Control

This document provides an overview of the core entities used in the system and their relationships. These models form the foundation for API contracts, database design, and business logic.

---

## 🧱 Core Entities

- **User** – Represents an enterprise user with assigned roles.
- **Device** – Represents a registered device associated with a user.
- **Tower** – Represents a telecom tower and its supported OS/carriers.
- **Policy** – Represents access rules based on user role, app, action, and context.
- **Role** – Defines what actions a user can take in a given policy.
- **App** – Represents a software application being managed or restricted.

---

## 🔗 Key Relationships

- A **User** can have multiple **Devices** (1:N)
- A **Device** is registered to exactly one **User** (N:1)
- A **Device** connects through a **Tower**, which supports specific OS and carriers
- A **User** is assigned a **Role**
- **Policies** define allowed or denied **Actions** based on:
  - Role
  - App
  - Tower location
  - Device type

---

## 🧩 Normalized Design Principles

- All entities use UUIDs or standardized prefixed IDs (e.g., `USR-1001`, `DEV-2002`)
- Relational links are represented through IDs (e.g., `userId`, `roleId`)
- Models are normalized for modularity and extensibility

---

## 📌 Example Diagram References

- Device + User Onboarding Flow (see `docs/data-flows/onboard-flow.png`)
- Policy Enforcement Flow (see `docs/data-flows/policy-reactor.png`)
- Tower Registry Flow (see `docs/data-flows/tower-registry.png`)

---

## 📁 Related Files

| Entity  | Spec File                        |
|---------|----------------------------------|
| User    | `models/user.md`                 |
| Device  | `models/device.md`               |
| Tower   | `models/tower.md`                |
| Policy  | `models/policy.md`               |
| Role    | `models/role.md`                 |
| App     | `models/app.md`                  |

---

For the detailed schema per entity, refer to the individual model files listed above.