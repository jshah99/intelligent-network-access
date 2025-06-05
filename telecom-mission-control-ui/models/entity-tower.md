# 🗼 Tower Entity

Represents a physical telecom tower and its network attributes.

## Fields

| Field             | Type     | Description                                            |
|-------------------|----------|--------------------------------------------------------|
| towerId           | string   | Unique identifier for the tower                        |
| location          | string   | Geographical location                                  |
| supportedCarriers | string[] | List of supported telecom carriers (AT&T, Verizon, etc.) |
| geo               | object   | Latitude/Longitude coordinates                         |

## Relationships

- Receives devices from many **Devices**
- Bi-directionally connected with **Policies**