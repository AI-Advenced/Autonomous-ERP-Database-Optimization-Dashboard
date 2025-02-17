import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

interface DrilldownViewProps {
  queryData?: Array<{
    id: string;
    query: string;
    duration: number;
    status: "success" | "warning" | "error";
  }>;
  indexData?: Array<{
    name: string;
    table: string;
    usage: number;
    fragmentation: number;
  }>;
  statisticsData?: Array<{
    table: string;
    lastUpdate: string;
    rowCount: number;
    dataSize: string;
  }>;
  configData?: Array<{
    parameter: string;
    value: string;
    recommended: string;
  }>;
}

const DrilldownView = ({
  queryData = [
    { id: "1", query: "SELECT * FROM users", duration: 150, status: "success" },
    {
      id: "2",
      query: "UPDATE orders SET status = 'shipped'",
      duration: 300,
      status: "warning",
    },
    { id: "3", query: "DELETE FROM temp_table", duration: 50, status: "error" },
  ],
  indexData = [
    { name: "idx_users_email", table: "users", usage: 85, fragmentation: 12 },
    { name: "idx_orders_date", table: "orders", usage: 65, fragmentation: 25 },
    {
      name: "idx_products_category",
      table: "products",
      usage: 45,
      fragmentation: 8,
    },
  ],
  statisticsData = [
    {
      table: "users",
      lastUpdate: "2024-03-20",
      rowCount: 10000,
      dataSize: "1.2 GB",
    },
    {
      table: "orders",
      lastUpdate: "2024-03-19",
      rowCount: 50000,
      dataSize: "2.5 GB",
    },
    {
      table: "products",
      lastUpdate: "2024-03-18",
      rowCount: 5000,
      dataSize: "500 MB",
    },
  ],
  configData = [
    { parameter: "max_connections", value: "100", recommended: "150" },
    { parameter: "shared_buffers", value: "1GB", recommended: "2GB" },
    { parameter: "work_mem", value: "4MB", recommended: "8MB" },
  ],
}: DrilldownViewProps) => {
  const getStatusColor = (status: "success" | "warning" | "error") => {
    switch (status) {
      case "success":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card className="w-full h-full bg-white">
      <CardContent className="p-6">
        <Tabs defaultValue="queries" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="queries">Query Details</TabsTrigger>
            <TabsTrigger value="indexes">Index Analysis</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
            <TabsTrigger value="config">Configuration</TabsTrigger>
          </TabsList>

          <TabsContent value="queries">
            <ScrollArea className="h-[300px] w-full rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Query</TableHead>
                    <TableHead>Duration (ms)</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {queryData.map((query) => (
                    <TableRow key={query.id}>
                      <TableCell className="font-mono text-sm">
                        {query.query}
                      </TableCell>
                      <TableCell>{query.duration}</TableCell>
                      <TableCell className={getStatusColor(query.status)}>
                        {query.status.toUpperCase()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="indexes">
            <ScrollArea className="h-[300px] w-full rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Index Name</TableHead>
                    <TableHead>Table</TableHead>
                    <TableHead>Usage %</TableHead>
                    <TableHead>Fragmentation %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {indexData.map((index) => (
                    <TableRow key={index.name}>
                      <TableCell>{index.name}</TableCell>
                      <TableCell>{index.table}</TableCell>
                      <TableCell>
                        <Progress
                          value={index.usage}
                          className="w-[60px] h-2"
                        />
                        <span className="ml-2">{index.usage}%</span>
                      </TableCell>
                      <TableCell>{index.fragmentation}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="statistics">
            <ScrollArea className="h-[300px] w-full rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Table</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead>Row Count</TableHead>
                    <TableHead>Data Size</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {statisticsData.map((stat) => (
                    <TableRow key={stat.table}>
                      <TableCell>{stat.table}</TableCell>
                      <TableCell>{stat.lastUpdate}</TableCell>
                      <TableCell>{stat.rowCount.toLocaleString()}</TableCell>
                      <TableCell>{stat.dataSize}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="config">
            <ScrollArea className="h-[300px] w-full rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parameter</TableHead>
                    <TableHead>Current Value</TableHead>
                    <TableHead>Recommended</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {configData.map((config) => (
                    <TableRow key={config.parameter}>
                      <TableCell>{config.parameter}</TableCell>
                      <TableCell>{config.value}</TableCell>
                      <TableCell className="text-blue-600">
                        {config.recommended}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DrilldownView;
