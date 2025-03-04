import React from 'react';
import { Activity } from 'lucide-react';
import { SystemMetric } from '../../types';

interface SystemHealthCardProps {
  metrics: SystemMetric[];
}

const SystemHealthCard: React.FC<SystemHealthCardProps> = ({ metrics }) => {
  // Get the latest metrics
  const latestMetrics = metrics[metrics.length - 1];

  const getColorClass = (value: number) => {
    if (value >= 80) return 'text-red-600';
    if (value >= 60) return 'text-orange-500';
    if (value >= 40) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-4 py-3 bg-gray-800 text-white">
        <div className="flex items-center">
          <Activity className="h-5 w-5 mr-2" />
          <h3 className="text-lg font-medium">System Health</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">CPU Usage</span>
              <span className={`text-sm font-medium ${getColorClass(latestMetrics.cpuUsage)}`}>
                {latestMetrics.cpuUsage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  latestMetrics.cpuUsage >= 80 ? 'bg-red-600' : 
                  latestMetrics.cpuUsage >= 60 ? 'bg-orange-500' : 
                  latestMetrics.cpuUsage >= 40 ? 'bg-yellow-600' : 
                  'bg-green-600'
                }`} 
                style={{ width: `${latestMetrics.cpuUsage}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Memory Usage</span>
              <span className={`text-sm font-medium ${getColorClass(latestMetrics.memoryUsage)}`}>
                {latestMetrics.memoryUsage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  latestMetrics.memoryUsage >= 80 ? 'bg-red-600' : 
                  latestMetrics.memoryUsage >= 60 ? 'bg-orange-500' : 
                  latestMetrics.memoryUsage >= 40 ? 'bg-yellow-600' : 
                  'bg-green-600'
                }`} 
                style={{ width: `${latestMetrics.memoryUsage}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Network Load</span>
              <span className={`text-sm font-medium ${getColorClass(latestMetrics.networkLoad)}`}>
                {latestMetrics.networkLoad}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  latestMetrics.networkLoad >= 80 ? 'bg-red-600' : 
                  latestMetrics.networkLoad >= 60 ? 'bg-orange-500' : 
                  latestMetrics.networkLoad >= 40 ? 'bg-yellow-600' : 
                  'bg-green-600'
                }`} 
                style={{ width: `${latestMetrics.networkLoad}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          <p>Alerts generated today: {latestMetrics.alertsGenerated}</p>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthCard;