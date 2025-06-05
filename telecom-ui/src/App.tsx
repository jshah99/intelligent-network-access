import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import DeviceOnboarding from "./pages/DeviceOnboarding";
import PolicyReactor from "./pages/PolicyReactor";
import TowerRegistry from "./pages/TowerRegistry";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/onboarding" element={<DeviceOnboarding />} />
        <Route path="/policy" element={<PolicyReactor />} />
        <Route path="/towers" element={<TowerRegistry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
