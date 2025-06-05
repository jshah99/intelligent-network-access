# 🧩 Role Entity

Defines access and permission structure within an enterprise.

## Fields

| Field       | Type     | Description                              |
|-------------|----------|------------------------------------------|
| roleId      | string   | Unique identifier for the role           |
| name        | string   | Role name (e.g., Admin, Technician)      |
| permissions | string[] | Set of permissions assigned to the role  |

## Relationships

- Assigned to many **Users**
- Governs multiple **Policies**