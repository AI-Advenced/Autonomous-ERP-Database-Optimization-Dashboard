import React from "react";
import MetricsGrid from "./dashboard/MetricsGrid";
import AIRecommendations from "./dashboard/AIRecommendations";
import HistoricalTrends from "./dashboard/HistoricalTrends";
import DrilldownView from "./dashboard/DrilldownView";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[1512px] mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Database Optimization Dashboard
        </h1>

        {/* Metrics Grid Section */}
        <section>
          <MetricsGrid />
        </section>

        {/* AI Recommendations Section */}
        <section>
          <AIRecommendations />
        </section>

        {/* Historical Trends and Drilldown Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section>
            <HistoricalTrends />
          </section>
          <section>
            <DrilldownView />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
