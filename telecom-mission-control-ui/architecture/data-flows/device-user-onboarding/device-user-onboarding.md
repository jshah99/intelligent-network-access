# 🔁 Device + User Onboarding Flow

This diagram illustrates the step-by-step process of onboarding a new user and their device into the Telecom Mission Control system.

## 📌 Flow Summary

1. **Admin Portal** – Enterprise admin initiates user + device onboarding.
2. **Frontend UI** – User/device data collected via React/React Native.
3. **API Gateway** – Validates and routes request to backend services.
4. **Device Registration Service** – Handles logic for tower mapping and device validation.
5. **Tower Registry** – Responds with valid tower-carrier-device combinations.
6. **User Identity Service** – Creates or verifies user identity and associates the device.
7. **Frontend Cache** – Confirmation + token saved locally (IndexedDB/AsyncStorage) for offline use.

## 🔐 Notes

- All interactions use secure HTTPS with JWT-based authentication.
- Offline-first design ensures device onboarding can resume after reconnection.
- Frontend uses retry queues for reliable delivery.

---

🖼️ [View Diagram](./device-user-onboarding.png)
