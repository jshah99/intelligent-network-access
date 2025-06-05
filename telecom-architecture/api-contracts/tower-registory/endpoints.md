# 🗼 Tower Registry API Endpoints

These APIs allow the frontend to query telecom tower information, carrier support, and compatibility details to aid in device onboarding and policy evaluation.

---

## 📍 GET /v1/towers

Returns a paginated list of available telecom towers with basic metadata.

**Query Example:**
```
GET /v1/towers?page=1&limit=20
```

**Response:**
```json
{
  "status": "success",
  "code": 200,
  "data": [
    {
      "towerId": "TWR-20233",
      "location": "San Jose, CA",
      "carriers": ["AT&T", "Verizon"]
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 450
  }
}
```

---

## 📡 GET /v1/towers/:towerId

Fetches detailed information about a specific tower.

**Request:**
```
GET /v1/towers/TWR-20233
```

**Response:**
```json
{
  "status": "success",
  "code": 200,
  "data": {
    "towerId": "TWR-20233",
    "location": "San Jose, CA",
    "geo": {
      "lat": 37.3382,
      "lng": -121.8863
    },
    "supportedOS": ["iOS", "Android", "Windows"],
    "supportedCarriers": ["AT&T", "Verizon"]
  }
}
```

---

## 🔍 GET /v1/towers/compatible-devices

Checks which towers are compatible with a given device.

**Query Parameters:**
```
GET /v1/towers/compatible-devices?os=iOS&carrier=AT&T
```

**Response:**
```json
{
  "status": "success",
  "code": 200,
  "data": [
    {
      "towerId": "TWR-20233",
      "location": "San Jose, CA"
    },
    {
      "towerId": "TWR-34891",
      "location": "Fremont, CA"
    }
  ]
}
```

---

## ⚠️ Error Handling

```json
{
  "status": "error",
  "code": 404,
  "message": "Tower not found"
}
```