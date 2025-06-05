import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  value: string | number;
}

const Card = ({ title, value }: CardProps) => {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <h3 className="card-value">{value}</h3>
    </div>
  );
};

export default Card;
