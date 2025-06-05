# 🔐 Policy Evaluation & Enforcement API Endpoints

These APIs allow the frontend system to validate and enforce enterprise policies in real time or near-real time, depending on the user's role, carrier, app, and actions.

---

## 🔍 POST /v1/policy/evaluate

Evaluates whether the user is allowed to perform a specific action in a specific app context.

**Request:**
```json
{
  "userId": "USR-84722",
  "deviceId": "DEV-00912",
  "appId": "APP-10012",
  "action": "upload_file",
  "location": {
    "towerId": "TWR-20233",
    "geo": { "lat": 37.422, "lng": -122.084 }
  }
}
```

**Response (Allow):**
```json
{
  "status": "success",
  "code": 200,
  "data": {
    "allowed": true,
    "policyId": "POL-99881",
    "reason": "Role: Contractor has upload permission in zone 4."
  }
}
```

**Response (Deny):**
```json
{
  "status": "success",
  "code": 200,
  "data": {
    "allowed": false,
    "policyId": "POL-99881",
    "reason": "Device not authorized for uploads in this tower region."
  }
}
```

---

## ✅ POST /v1/policy/acknowledge

Logs that a policy was enforced on the client and the user was notified.

**Request:**
```json
{
  "userId": "USR-84722",
  "deviceId": "DEV-00912",
  "policyId": "POL-99881",
  "action": "upload_file",
  "result": "blocked",
  "timestamp": "2025-06-04T13:45:00Z"
}
```

**Response:**
```json
{
  "status": "success",
  "code": 200,
  "message": "Policy acknowledgement recorded"
}
```

---

## ⚠️ Error Handling

All policy errors return the following format:

```json
{
  "status": "error",
  "code": 403,
  "message": "User does not have permission to perform this action."
}
```