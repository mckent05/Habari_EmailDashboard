import React from "react";
import { Card } from "react-bootstrap";

const StatisticsCard = ({ title, value, previous, progress, positive }) => {
  return (
    <Card className="shadow-sm mb-3">
      <Card.Body>
        <h6 className="text-muted">{title}</h6>
        <h3 className="fw-bold">{value}</h3>
        <p className="text-muted mb-1">Previous {previous}</p>
        <span className={`fw-semibold ${positive ? "text-success" : "text-danger"}`}>
          {progress}
        </span>
      </Card.Body>
    </Card>
  );
};

export default StatisticsCard;
