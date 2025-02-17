import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface MetricCardProps {
  title?: string;
  value?: number;
  maxValue?: number;
  unit?: string;
  description?: string;
  trend?: number;
  color?: "default" | "success" | "warning" | "danger";
}

const MetricCard = ({
  title = "Metric",
  value = 75,
  maxValue = 100,
  unit = "%",
  description = "Sample metric description",
  trend = 5.2,
  color = "default",
}: MetricCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case "success":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "danger":
        return "text-red-600";
      default:
        return "text-blue-600";
    }
  };

  const getProgressColor = () => {
    switch (color) {
      case "success":
        return "bg-green-600";
      case "warning":
        return "bg-yellow-600";
      case "danger":
        return "bg-red-600";
      default:
        return "bg-blue-600";
    }
  };

  return (
    <Card className="w-full h-full bg-white shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-gray-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex items-baseline justify-between">
            <span className={`text-2xl font-bold ${getColorClasses()}`}>
              {value}
              {unit}
            </span>
            <span
              className={`text-sm ${trend >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              {trend >= 0 ? "+" : ""}
              {trend}%
            </span>
          </div>
          <Progress
            value={(value / maxValue) * 100}
            className="h-2"
            indicatorClassName={getProgressColor()}
          />
          <div className="text-xs text-gray-500">
            {value} out of {maxValue} {unit}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
