import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const Dashboard = () => {
  const mockData = {
    totalDevices: 128,
    activeTowers: 34,
    policyAlerts: 5,
  };

  return (
    <Layout>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card title="Total Devices" value={mockData.totalDevices} />
        <Card title="Active Towers" value={mockData.activeTowers} />
        <Card title="Policy Violations" value={mockData.policyAlerts} />
      </div>
    </Layout>
  );
};

export default Dashboard;
