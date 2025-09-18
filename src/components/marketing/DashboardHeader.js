import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const DashboardHeader = ({ range, onRangeChange }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="fw-bold">Marketing</h5>
      <ButtonGroup>
        <Button
          variant={range === "7d" ? "success" : "outline-success"}
          size="sm"
          onClick={() => onRangeChange("7d")}
        >
          7 Days
        </Button>
        <Button
          variant={range === "14d" ? "success" : "outline-success"}
          size="sm"
          onClick={() => onRangeChange("14d")}
        >
          14 Days
        </Button>
        <Button
          variant={range === "1m" ? "success" : "outline-success"}
          size="sm"
          onClick={() => onRangeChange("1m")}
        >
          1 Month
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default DashboardHeader;
