import React from "react";
import { Card } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartCard = ({ data }) => {
  return (
    <Card className="shadow-sm mb-3">
      <Card.Body>
        <h6 className="text-muted mb-3">Traffic Source</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="traffic" fill="#28a745" />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default BarChartCard;
