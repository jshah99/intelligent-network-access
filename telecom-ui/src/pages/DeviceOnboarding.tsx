import React, { useState } from "react";
import Layout from "../components/Layout";
import "./DeviceOnboarding.css";

const DeviceOnboarding = () => {
  const [form, setForm] = useState({
    userName: "",
    deviceId: "",
    os: "",
    carrier: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors: any = {};
    if (!form.userName.trim()) newErrors.userName = "User Name is required";
    if (!form.deviceId.trim()) newErrors.deviceId = "Device ID is required";
    if (!form.os) newErrors.os = "Operating System is required";
    if (!form.carrier) newErrors.carrier = "Carrier is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setShowPopup(true);
  };

  return (
    <Layout>
      <h2>Device & User Onboarding</h2>
      <form onSubmit={handleSubmit} className="onboarding-form">
        <label>
          User Name:
          <input
            type="text"
            name="userName"
            value={form.userName}
            onChange={handleChange}
          />
          {errors.userName && <span className="error">{errors.userName}</span>}
        </label>

        <label>
          Device ID:
          <input
            type="text"
            name="deviceId"
            value={form.deviceId}
            onChange={handleChange}
          />
          {errors.deviceId && <span className="error">{errors.deviceId}</span>}
        </label>

        <label>
          Operating System:
          <select name="os" value={form.os} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
            <option value="Windows">Windows</option>
          </select>
          {errors.os && <span className="error">{errors.os}</span>}
        </label>

        <label>
          Carrier:
          <select name="carrier" value={form.carrier} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="AT&T">AT&T</option>
            <option value="Verizon">Verizon</option>
            <option value="T-Mobile">T-Mobile</option>
          </select>
          {errors.carrier && <span className="error">{errors.carrier}</span>}
        </label>

        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>
              <strong>Success!</strong> Device onboarded.
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DeviceOnboarding;
