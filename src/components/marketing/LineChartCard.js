import React from "react";
import { Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineChartCard = ({ data }) => {
  return (
    <Card className="shadow-sm mb-3">
      <Card.Body>
        <h6 className="text-muted mb-3">Acquisition vs Cost</h6>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="acquisition"
              stroke="#28a745"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="cost"
              stroke="#007bff"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default LineChartCard;
