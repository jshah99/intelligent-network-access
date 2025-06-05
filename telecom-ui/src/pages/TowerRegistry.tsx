import React from "react";
import Layout from "../components/Layout";
import "./TowerRegistry.css";

const towers = [
  {
    id: "TWR001",
    location: "San Jose, CA",
    carriers: ["AT&T", "Verizon"],
  },
  {
    id: "TWR002",
    location: "Austin, TX",
    carriers: ["T-Mobile"],
  },
  {
    id: "TWR003",
    location: "New York, NY",
    carriers: ["AT&T", "T-Mobile"],
  },
];

const TowerRegistry = () => {
  return (
    <Layout>
      <h2>Tower Registry</h2>
      <table className="tower-table">
        <thead>
          <tr>
            <th>Tower ID</th>
            <th>Location</th>
            <th>Carriers</th>
          </tr>
        </thead>
        <tbody>
          {towers.map((tower) => (
            <tr key={tower.id}>
              <td>{tower.id}</td>
              <td>{tower.location}</td>
              <td>{tower.carriers.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default TowerRegistry;
