# 👤 User Entity

Represents an enterprise user who interacts with the platform through one or more registered devices. Each user is assigned a role that determines their allowed actions within apps and policies.

---

## 🧾 Attributes

| Field       | Type     | Description                            |
|-------------|----------|----------------------------------------|
| userId      | string   | Unique ID for the user (e.g., USR-001) |
| name        | string   | Full name of the user                  |
| email       | string   | Unique email address                   |
| phone       | string   | Contact number                         |
| roleId      | string   | Reference to the user's assigned role  |
| createdAt   | datetime | Timestamp when the user was created    |
| updatedAt   | datetime | Timestamp when the user was last updated |

---

## 🔗 Relationships

- One **User** can have **multiple Devices** (1:N)
- One **User** is assigned exactly **one Role** (1:1)
- User's actions are evaluated against **Policies** based on their role

---

## 🧪 Example Object

```json
{
  "userId": "USR-84722",
  "name": "Jinal Shah",
  "email": "jinal@example.com",
  "phone": "+11234567890",
  "roleId": "ROLE-2001",
  "createdAt": "2024-04-01T10:23:00Z",
  "updatedAt": "2024-12-05T15:17:30Z"
}
```