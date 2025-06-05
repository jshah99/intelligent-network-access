# 📦 App Entity

Represents a mobile or web application accessed by users.

## Fields

| Field     | Type     | Description                               |
|-----------|----------|-------------------------------------------|
| appId     | string   | Unique identifier for the app             |
| name      | string   | Application name                          |
| actions   | string[] | List of valid actions (e.g., open, send)  |

## Relationships

- Linked to many **Policies**