# 🗼 Tower Registry – Data Flow

This document outlines the data flow and system interactions for the **Tower Registry** module in the Telecom Mission Control platform. The registry plays a critical role in mapping nationwide telecom towers with supported carriers and enabling downstream features like onboarding, policy enforcement, and real-time insights.

---

## 📊 Overview

The **Tower Registry** is responsible for ingesting and maintaining up-to-date information about telecom towers across regions, including the carriers they serve and their geographic metadata. This enables device compatibility checks, network policy enforcement, and visual dashboards.

---

## 🔁 Flow Diagram

![Tower Registry Flow](./tower-registry-service.png)

---

## 🔧 Flow Steps

1. **Tower Feed Integrators** ingest periodic tower metadata (e.g., AT&T, Verizon, T-Mobile tower sources).
2. The **Tower Registry Service** processes and stores this data, mapping tower IDs with:
   - Supported Carriers
   - Location metadata (latitude/longitude, region)
   - Supported device OSes and signal types
3. The **SecureEdge Gateway** queries this service during:
   - Device onboarding (to validate tower compatibility)
   - Policy enforcement (to understand real-time coverage context)
4. The **Sentinel Dashboard** visualizes tower and coverage stats for the enterprise.
5. Periodic validations and sync jobs ensure the registry remains current with external tower sources.

---

## 🔄 Bi-Directional Flows

- **Tower Feed Integrators ↔ Tower Registry**: Periodic syncs and conflict resolution
- **SecureEdge Gateway ↔ Tower Registry**: On-demand lookups and compatibility checks

---

## 💼 Use Case: Validating Tower Compatibility for Device Onboarding

> A user initiates onboarding from a remote device. The system verifies whether the current cell tower supports the device’s OS and assigned carrier.

- The Gateway calls the Tower Registry
- The tower ID is resolved to a known location and carrier set
- If compatible, onboarding proceeds. If not, user is flagged and alternative action is suggested.

---

## 🧩 Components Involved

| Component              | Role                                                    |
| ---------------------- | ------------------------------------------------------- |
| Tower Feed Integrators | Syncs tower metadata from various telco sources         |
| Tower Registry Service | Central service storing and querying tower metadata     |
| SecureEdge Gateway     | Consumes registry APIs to validate device compatibility |
| Sentinel Dashboard     | Displays tower health, reach, and stats to admins       |

---

## 🌐 Scale & Resilience

- Designed to handle thousands of tower updates per region
- Fault-tolerant ingestion and caching
- Used across onboarding, enforcement, and dashboards
