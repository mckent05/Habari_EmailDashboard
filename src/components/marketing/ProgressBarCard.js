import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

const ProgressBarCard = ({ data }) => {
  return (
    <Card className="shadow-sm mb-3">
      <Card.Body>
        <h6 className="text-muted mb-3">Budget by Platform</h6>
        {data.map((item, idx) => (
          <div key={idx} className="mb-3">
            <p className="mb-1 d-flex justify-content-between">
              <span>{item.platform}</span>
              <span>Remaining: ${item.remaining}</span>
            </p>
            <ProgressBar
              now={item.percent}
              label={`${item.percent}%`}
              variant={item.variant}
            />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default ProgressBarCard;
