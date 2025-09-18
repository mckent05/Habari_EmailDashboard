import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StatCard from "../components/marketing/StatisticsCard";
import LineChartCard from "../components/marketing/LineChartCard";
import BarChartCard from "../components/marketing/BarChartCard";
import ProgressBarCard from "../components/marketing/ProgressBarCard";
import DashboardHeader from "../components/marketing/DashboardHeader";
import "./marketing-dashboard.css";

const MarketingDashboard = () => {
  const [range, setRange] = useState("7d");

  const stats = [
    { title: "Total Spend", value: "$8,765", previous: "$10,234", progress: "-14.32%", positive: false },
    { title: "Visitor", value: "14,321", previous: "12,548", progress: "+14.23%", positive: true },
    { title: "Acquisition", value: "1,023", previous: "876", progress: "+16.78%", positive: true },
    { title: "Revenue", value: "$18,765", previous: "$15,432", progress: "+21.67%", positive: true },
  ];

  const lineDataAll = [
    { date: "March 1", acquisition: 100, cost: 200 },
    { date: "March 2", acquisition: 300, cost: 400 },
    { date: "March 3", acquisition: 200, cost: 350 },
    { date: "March 4", acquisition: 500, cost: 600 },
    { date: "March 5", acquisition: 450, cost: 700 },
    { date: "March 6", acquisition: 600, cost: 500 },
    { date: "March 7", acquisition: 700, cost: 800 },
    { date: "March 8", acquisition: 800, cost: 850 },
    { date: "March 9", acquisition: 650, cost: 780 },
    { date: "March 10", acquisition: 720, cost: 820 },
    { date: "March 11", acquisition: 500, cost: 600 },
    { date: "March 12", acquisition: 550, cost: 650 },
    { date: "March 13", acquisition: 700, cost: 900 },
    { date: "March 14", acquisition: 750, cost: 950 },
    { date: "March 15", acquisition: 800, cost: 1000 },
  ];

  const barDataAll = lineDataAll.map(d => ({ date: d.date, traffic: d.acquisition / 5 }));

  const lineData = useMemo(() => {
    if (range === "7d") return lineDataAll.slice(0, 7);
    if (range === "14d") return lineDataAll.slice(0, 14);
    return lineDataAll;
  }, [range]);

  const barData = useMemo(() => {
    if (range === "7d") return barDataAll.slice(0, 7);
    if (range === "14d") return barDataAll.slice(0, 14);
    return barDataAll;
  }, [range]);

  const progressData = [
    { platform: "Facebook", remaining: "12,345", percent: 60, variant: "success" },
    { platform: "X", remaining: "1,543", percent: 86, variant: "success" },
    { platform: "Google", remaining: "5,678", percent: 67, variant: "success" },
    { platform: "TikTok", remaining: "3,456", percent: 21, variant: "warning" },
    { platform: "Bing", remaining: "2,098", percent: 35, variant: "danger" },
  ];

  return (
    <Container fluid className="p-4 bg-light marketing-dashboard-cont">
      <DashboardHeader range={range} onRangeChange={setRange} />

      <Row>
        <Col md={6} className="d-flex flex-wrap gap-3">
          {stats.map((s, idx) => (
            <div key={idx} className="flex-fill" style={{ minWidth: "48%" }}>
              <StatCard {...s} />
            </div>
          ))}
        </Col>
        <Col md={6}>
          <LineChartCard data={lineData} />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <BarChartCard data={barData} />
        </Col>
        <Col md={6}>
          <ProgressBarCard data={progressData} />
        </Col>
      </Row>
    </Container>
  );
};

export default MarketingDashboard;
