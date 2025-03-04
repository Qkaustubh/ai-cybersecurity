import React from 'react';
import ThreatSummary from '../components/Dashboard/ThreatSummary';
import RecentThreats from '../components/Dashboard/RecentThreats';
import ThreatActivityChart from '../components/Dashboard/ThreatActivityChart';
import ModelPerformanceCard from '../components/Dashboard/ModelPerformanceCard';
import SystemHealthCard from '../components/Dashboard/SystemHealthCard';
import ThreatDistributionChart from '../components/Dashboard/ThreatDistributionChart';
import { 
  mockThreatStatistics, 
  recentThreats, 
  mockModelPerformance, 
  mockSystemMetrics,
  hourlyThreatCounts,
  threatsByType
} from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Security Dashboard</h1>
        <p className="text-gray-600">Real-time threat monitoring and analysis</p>
      </div>
      
      <div className="mb-6">
        <ThreatSummary statistics={mockThreatStatistics} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ThreatActivityChart data={hourlyThreatCounts} />
        <ThreatDistributionChart data={threatsByType} />
      </div>
      
      <div className="mb-6">
        <RecentThreats threats={recentThreats} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ModelPerformanceCard performance={mockModelPerformance} />
        <SystemHealthCard metrics={mockSystemMetrics} />
      </div>
    </div>
  );
};

export default Dashboard;