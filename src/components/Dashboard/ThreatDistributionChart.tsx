import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface ThreatDistributionProps {
  data: { type: string; count: number }[];
}

const ThreatDistributionChart: React.FC<ThreatDistributionProps> = ({ data }) => {
  // Take only top 5 threat types for better visualization
  const topThreats = data.slice(0, 5);
  
  // Colors for the pie chart
  const COLORS = ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#6366f1'];
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Threat Distribution by Type</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={topThreats}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
              nameKey="type"
            >
              {topThreats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value} threats`, 'Count']}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ThreatDistributionChart;