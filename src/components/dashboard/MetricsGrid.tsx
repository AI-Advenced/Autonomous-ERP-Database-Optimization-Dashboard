import React from "react";
import MetricCard from "./MetricCard";

interface MetricsGridProps {
  metrics?: Array<{
    title: string;
    value: number;
    maxValue: number;
    unit: string;
    description: string;
    trend: number;
    color: "default" | "success" | "warning" | "danger";
  }>;
}

const MetricsGrid = ({
  metrics = [
    {
      title: "CPU Usage",
      value: 65,
      maxValue: 100,
      unit: "%",
      description: "Current CPU utilization across all cores",
      trend: 2.5,
      color: "success",
    },
    {
      title: "Memory Usage",
      value: 82,
      maxValue: 100,
      unit: "%",
      description: "Current memory utilization",
      trend: -1.2,
      color: "warning",
    },
    {
      title: "Query Performance",
      value: 95,
      maxValue: 100,
      unit: "ms",
      description: "Average query response time",
      trend: -5.8,
      color: "default",
    },
    {
      title: "Backup Status",
      value: 100,
      maxValue: 100,
      unit: "%",
      description: "Latest backup completion status",
      trend: 0,
      color: "success",
    },
  ],
}: MetricsGridProps) => {
  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            maxValue={metric.maxValue}
            unit={metric.unit}
            description={metric.description}
            trend={metric.trend}
            color={metric.color}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;
