# 📱 Device Entity

Represents an enterprise-registered device, its attributes, and associations to users and telecom towers.

## Fields

| Field       | Type     | Description                                  |
|-------------|----------|----------------------------------------------|
| deviceId    | string   | Unique identifier for the device             |
| userId      | string   | Foreign key referencing the associated user  |
| os          | string   | Operating system (iOS, Android, Windows)     |
| carrier     | string   | Telecom carrier (AT&T, Verizon, etc.)       |
| towerId     | string   | Foreign key to the tower the device connects to |

## Relationships

- Belongs to one **User**
- Connects to one **Tower**