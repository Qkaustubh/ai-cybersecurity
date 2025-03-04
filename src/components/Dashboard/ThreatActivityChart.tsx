import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ThreatActivityChartProps {
  data: { hour: number; count: number }[];
}

const ThreatActivityChart: React.FC<ThreatActivityChartProps> = ({ data }) => {
  // Format hour labels
  const formattedData = data.map(item => ({
    ...item,
    label: `${item.hour}:00`
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Threat Activity (Last 24 Hours)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={formattedData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="label" 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => value}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => value}
            />
            <Tooltip 
              formatter={(value) => [`${value} threats`, 'Count']}
              labelFormatter={(label) => `Time: ${label}`}
            />
            <Area 
              type="monotone" 
              dataKey="count" 
              stroke="#3b82f6" 
              fillOpacity={1} 
              fill="url(#colorCount)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ThreatActivityChart;