import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, CheckCircle, Clock, Play, XCircle } from "lucide-react";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed" | "failed";
  impact: "high" | "medium" | "low";
  timestamp: string;
}

interface AIRecommendationsProps {
  recommendations?: Recommendation[];
  onApply?: (id: string) => void;
}

const defaultRecommendations: Recommendation[] = [
  {
    id: "1",
    title: "Index Optimization",
    description:
      "Create a new index on the SALES_HISTORY table to improve query performance",
    status: "pending",
    impact: "high",
    timestamp: "2024-03-21T10:00:00Z",
  },
  {
    id: "2",
    title: "Statistics Update",
    description:
      "Update statistics on INVENTORY_MASTER table for better query optimization",
    status: "in_progress",
    impact: "medium",
    timestamp: "2024-03-21T09:30:00Z",
  },
  {
    id: "3",
    title: "Memory Configuration",
    description:
      "Increase buffer pool size by 2GB for improved cache hit ratio",
    status: "completed",
    impact: "high",
    timestamp: "2024-03-21T09:00:00Z",
  },
];

const AIRecommendations = ({
  recommendations = defaultRecommendations,
  onApply = () => {},
}: AIRecommendationsProps) => {
  const getStatusIcon = (status: Recommendation["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "in_progress":
        return <Play className="h-4 w-4 text-blue-500" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getImpactColor = (impact: Recommendation["impact"]) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[250px] w-full rounded-md border p-4">
          <div className="space-y-4">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="flex items-start space-x-4 rounded-lg border p-4 hover:bg-gray-50"
              >
                <div className="mt-1">{getStatusIcon(rec.status)}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{rec.title}</h4>
                    <Badge className={getImpactColor(rec.impact)}>
                      {rec.impact} impact
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {rec.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(rec.timestamp).toLocaleString()}
                    </span>
                    {rec.status === "pending" && (
                      <Button
                        size="sm"
                        onClick={() => onApply(rec.id)}
                        className="ml-2"
                      >
                        Apply
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
