# 🔐 Policy Entity

Defines rules enforced at the network edge based on user roles, apps, and actions.

## Fields

| Field         | Type     | Description                                         |
|---------------|----------|-----------------------------------------------------|
| policyId      | string   | Unique identifier for the policy                   |
| roleId        | string   | Foreign key linking to a Role                      |
| appId         | string   | Foreign key to the App being restricted/allowed    |
| allowedActions| string[] | List of allowed actions (e.g., read, write)        |
| rules         | object   | JSON object defining context-aware rules           |

## Relationships

- Linked to one **Role**
- Connected to one or many **Apps**
- Bi-directionally connected to one or more **Towers**