# 📲 User + Device Onboarding API Endpoints

These endpoints manage onboarding of enterprise users and their associated devices, including validation with tower compatibility and syncing with offline data.

---

## 🧾 POST /v1/users/register

Registers a new enterprise user and their basic identity.

**Request:**
```json
{
  "name": "Jinal Shah",
  "email": "jinal@example.com",
  "role": "contractor",
  "phone": "+11234567890"
}
```

**Response:**
```json
{
  "status": "success",
  "code": 201,
  "data": {
    "userId": "USR-84722"
  }
}
```

---

## 📱 POST /v1/devices/register

Registers a user’s device and links it to their account.

**Request:**
```json
{
  "userId": "USR-84722",
  "deviceOS": "iOS",
  "carrier": "AT&T",
  "imei": "356938035643809"
}
```

**Response:**
```json
{
  "status": "success",
  "code": 201,
  "data": {
    "deviceId": "DEV-00912"
  }
}
```

---

## 🗼 GET /v1/towers/validate-device

Validates whether the user’s device is allowed at the connected tower.

**Query Parameters:**
```
GET /v1/towers/validate-device?deviceId=DEV-00912&towerId=TWR-20233
```

**Response:**
```json
{
  "status": "success",
  "code": 200,
  "data": {
    "isCompatible": true,
    "allowedOS": ["iOS", "Android"],
    "allowedCarriers": ["AT&T"]
  }
}
```

---

## 🔁 POST /v1/onboarding/sync-offline

Pushes offline onboarding actions to the server for reconciliation.

**Request:**
```json
{
  "userId": "USR-84722",
  "deviceId": "DEV-00912",
  "actions": [
    {
      "type": "register",
      "timestamp": "2025-06-04T08:42:00Z"
    }
  ]
}
```

**Response:**
```json
{
  "status": "success",
  "code": 200,
  "message": "Offline data synced successfully."
}
```

---

## ⚠️ Error Handling

All error responses follow this pattern:

```json
{
  "status": "error",
  "code": 400,
  "message": "Device IMEI already registered"
}
```