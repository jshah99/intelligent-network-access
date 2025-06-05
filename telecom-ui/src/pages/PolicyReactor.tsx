import React, { useState } from "react";
import Layout from "../components/Layout";
import "./PolicyReactor.css";

const PolicyReactor = () => {
  const [form, setForm] = useState({
    role: "",
    app: "",
    action: "",
  });

  const [policyResult, setPolicyResult] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckPolicy = (e: React.FormEvent) => {
    e.preventDefault();

    const { role, app, action } = form;

    const isAllowed =
      (role === "Admin" && app === "WhatsApp" && action === "Upload") ||
      (role === "Admin" && app === "Zoom" && action === "Download") ||
      (role === "User" && app === "Slack" && action === "Share");

    if (isAllowed) {
      setPolicyResult("✅ Action Allowed");
    } else {
      setPolicyResult("❌ Action Denied");
    }
  };

  return (
    <Layout>
      <h2>Policy Enforcement Simulator</h2>
      <form className="policy-form" onSubmit={handleCheckPolicy}>
        <label>
          User Role:
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </label>

        <label>
          App:
          <select name="app" value={form.app} onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Zoom">Zoom</option>
            <option value="Slack">Slack</option>
          </select>
        </label>

        <label>
          Action:
          <select
            name="action"
            value={form.action}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="Upload">Upload</option>
            <option value="Download">Download</option>
            <option value="Share">Share</option>
          </select>
        </label>

        <button type="submit">Check Policy</button>
      </form>

      {policyResult && <div className="result-box">{policyResult}</div>}
    </Layout>
  );
};

export default PolicyReactor;
