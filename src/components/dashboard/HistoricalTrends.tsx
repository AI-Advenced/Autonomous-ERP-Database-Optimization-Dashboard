import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface HistoricalDataPoint {
  timestamp: string;
  cpu: number;
  memory: number;
  queryTime: number;
}

interface HistoricalTrendsProps {
  data?: HistoricalDataPoint[];
  forecastData?: HistoricalDataPoint[];
}

const defaultData: HistoricalDataPoint[] = [
  { timestamp: "00:00", cpu: 45, memory: 60, queryTime: 120 },
  { timestamp: "04:00", cpu: 55, memory: 65, queryTime: 115 },
  { timestamp: "08:00", cpu: 75, memory: 75, queryTime: 150 },
  { timestamp: "12:00", cpu: 65, memory: 70, queryTime: 130 },
  { timestamp: "16:00", cpu: 80, memory: 85, queryTime: 160 },
  { timestamp: "20:00", cpu: 70, memory: 75, queryTime: 140 },
];

const defaultForecast: HistoricalDataPoint[] = [
  { timestamp: "00:00", cpu: 70, memory: 75, queryTime: 140 },
  { timestamp: "04:00", cpu: 75, memory: 80, queryTime: 145 },
  { timestamp: "08:00", cpu: 85, memory: 85, queryTime: 155 },
  { timestamp: "12:00", cpu: 80, memory: 82, queryTime: 150 },
];

const HistoricalTrends = ({
  data = defaultData,
  forecastData = defaultForecast,
}: HistoricalTrendsProps) => {
  return (
    <Card className="w-full h-full bg-white">
      <CardHeader>
        <CardTitle>Historical Trends & Forecasting</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="historical" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="historical">Historical Data</TabsTrigger>
            <TabsTrigger value="forecast">Forecast</TabsTrigger>
          </TabsList>
          <TabsContent value="historical" className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="cpu"
                  stroke="#8884d8"
                  name="CPU Usage (%)"
                />
                <Line
                  type="monotone"
                  dataKey="memory"
                  stroke="#82ca9d"
                  name="Memory Usage (%)"
                />
                <Line
                  type="monotone"
                  dataKey="queryTime"
                  stroke="#ffc658"
                  name="Query Time (ms)"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="forecast" className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={forecastData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="cpu"
                  stroke="#8884d8"
                  name="CPU Usage (%)"
                  strokeDasharray="5 5"
                />
                <Line
                  type="monotone"
                  dataKey="memory"
                  stroke="#82ca9d"
                  name="Memory Usage (%)"
                  strokeDasharray="5 5"
                />
                <Line
                  type="monotone"
                  dataKey="queryTime"
                  stroke="#ffc658"
                  name="Query Time (ms)"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HistoricalTrends;
