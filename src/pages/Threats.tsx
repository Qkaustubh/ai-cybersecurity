import React from 'react';
import ThreatTable from '../components/Threats/ThreatTable';
import { mockThreatAlerts } from '../data/mockData';

const Threats: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Threat Management</h1>
        <p className="text-gray-600">Monitor and respond to security threats</p>
      </div>
      
      <div className="mb-6">
        <ThreatTable threats={mockThreatAlerts} />
      </div>
    </div>
  );
};

export default Threats;